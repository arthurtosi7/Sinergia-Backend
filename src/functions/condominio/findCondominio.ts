import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, notFound, ok} from "src/utils/Returns";
import CondominiosRepositories from "../../repositories/implementations/CondominiosRepositories";

const findCondominio = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { name } = event.pathParameters;
    if (name === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new CondominiosRepositories();
    const user = await database.findByName(name);
    if (user === undefined)
        return notFound("Usuário não encontrado!");

    return ok("message", user);
}

export const handler = Handler(findCondominio);