import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok } from "src/utils/Returns";
import RotasRepositories from "../../repositories/implementations/RotasRepositories";

const listAll = async (): Promise<APIGatewayProxyResult> => {
    const database = new RotasRepositories();
    const rotas = await database.listAll();
    return ok("message", rotas);
}

export const handler = Handler(listAll);