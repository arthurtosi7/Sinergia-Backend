import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, notFound, ok} from "src/utils/Returns";
import UserRepositories from "../../repositories/implementations/UserRepositories";

const findUser = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { email } = event.pathParameters;
    if (email === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new UserRepositories();
    const user = await database.findByEmail(email);
    if (user === undefined)
        return notFound("Usuário não encontrado!");

    return ok("message", user);
}

export const handler = Handler(findUser);