import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, created} from "src/utils/Returns";
import CondominiosRepositories from "../../repositories/implementations/CondominiosRepositories";

const createCondominio = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { name, bairro, cep, cidade, email, federacao, logradouro, mes_art, mes_ria, numero,
        rota, status_ria, sub_rota, tel_admin, tel_sindico, nome_CVT, nome_elevador
    } = JSON.parse(event.body);
    if (name === undefined || bairro === undefined || cep === undefined ||
        cidade === undefined || email === undefined || federacao === undefined ||
        logradouro === undefined || mes_art === undefined || mes_ria === undefined ||
        numero === undefined || rota === undefined || status_ria === undefined ||
        sub_rota === undefined || tel_admin === undefined || tel_sindico === undefined ||
        nome_CVT === undefined || nome_elevador === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new CondominiosRepositories();
    const verify = await database.findByName(name);
    if (verify !== undefined)
        return  badRequest("Condomínio já cadastrado!");

    await database.create(name, bairro, cep, cidade, email, federacao, logradouro, mes_art, mes_ria, numero,
        rota, status_ria, sub_rota, tel_admin, tel_sindico, nome_CVT, nome_elevador);
    return created("Condomínio criado com sucesso", "message");
}

export const handler = Handler(createCondominio);