import { ITokenData } from "../entities/tokenData";
import {
    APIGatewayEventDefaultAuthorizerContext,
    APIGatewayEventRequestContextWithAuthorizer,
} from "aws-lambda";
import { PermissionLevels } from "src/enums/permissionLevels";

export const baseAuthorizer = (
    requestContext: APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventDefaultAuthorizerContext>,
    permissionLevels: PermissionLevels[],
): ITokenData | undefined => {
    if (!requestContext.authorizer) return;

    const session: ITokenData = JSON.parse(requestContext.authorizer.session);

    if (permissionLevels.includes(session.permissionLevel))
        return session;
};