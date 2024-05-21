import {
    APIGatewayAuthorizerResult,
    APIGatewayTokenAuthorizerEvent,
    APIGatewayTokenAuthorizerHandler,
    Context,
} from "aws-lambda";
import { ITokenData } from "./tokenData";
import { tryAuthenticate } from "./authenticator";

const generateAuthenticateResult = (
    principalId: string,
    effect: string,
    resource: string,
    session?: ITokenData
): APIGatewayAuthorizerResult => ({
    principalId: principalId,
    policyDocument: {
        Version: "2012-10-17",
        Statement: [
            {
                Action: "execute-api:Invoke",
                Effect: effect,
                Resource: resource,
            },
        ],
    },
    ...(session && {
        context: {
            session: JSON.stringify(session),
        },
    }),
});

export const authenticate: APIGatewayTokenAuthorizerHandler = async (
    event: APIGatewayTokenAuthorizerEvent,
    context: Context
) => {
    let session: ITokenData | undefined = undefined;
    try {
        session = tryAuthenticate(event.authorizationToken);
    } catch (error) {
        console.error({ event, context, error });
        throw new Error("Unauthorized");
    }
    if (!session) throw new Error("Unauthorized");

    return generateAuthenticateResult(session.email, "Allow", "*", session);
};