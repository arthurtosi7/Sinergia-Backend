import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, created} from "src/utils/Returns";
import RotasRepositories from "../../repositories/implementations/RotasRepositories";

const createRota = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { letra, nome_regiao, abreviacao } = JSON.parse(event.body);
    if (letra === undefined || nome_regiao === undefined || abreviacao === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new RotasRepositories();
    const verify = await database.findByLetra(letra);
    if (verify !== undefined)
        return  badRequest("Já existe uma rota com essa letra!");

    await database.create(letra, nome_regiao, abreviacao);
    return created("Rota criada com sucesso", "message");
}

export const handler = Handler(createRota);