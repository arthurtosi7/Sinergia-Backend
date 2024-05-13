import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, notFound, ok} from "src/utils/Returns";
import RotasRepositories from "../../repositories/implementations/RotasRepositories";

const findRota = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { letra } = event.pathParameters;
    if (letra === undefined)
        return  badRequest("Letra não definida!");

    const database = new RotasRepositories();
    const rota = await database.findByLetra(letra);
    if (rota === undefined)
        return notFound("Rota não encontrada!");

    return ok("message", rota);
}

export const handler = Handler(findRota);