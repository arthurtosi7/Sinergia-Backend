import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, notFound, ok} from "src/utils/Returns";
import RotasRepositories from "../../repositories/implementations/RotasRepositories";
import CondominiosRepositories from "../../repositories/implementations/CondominiosRepositories";

const insertCondominio = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { nome_cond } = JSON.parse(event.body);
    if (nome_cond === undefined)
        return  badRequest("Nome do condomínio não definido!");

    const database_cond = new CondominiosRepositories();
    const condominio = await database_cond.findByName(nome_cond);
    if (condominio == undefined)
        return notFound("Condomínio não encontrado!");

    const database_rota = new RotasRepositories();
    const { letra } = event.pathParameters;
    const rota = await database_rota.findByLetra(letra);
    if (rota === undefined)
        return notFound("Rota não encontrada!");

    const verify = await database_rota.condominioAlreadyOnRotas(rota, nome_cond);
    if (verify)
        return badRequest("Condomínio já está na rota!");

    await database_rota.insertCondominio(rota, nome_cond);

    return ok("Condomínio inserido com sucesso", "message");
}

export const handler = Handler(insertCondominio);