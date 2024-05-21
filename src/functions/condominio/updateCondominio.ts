import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok, notFound, badRequest } from "src/utils/Returns";
import CondominiosRepositories from "../../repositories/implementations/CondominiosRepositories";

const updateCondominio = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    
    const { name, bairro, cep, cidade, email, federacao, logradouro, mes_art, mes_ria, numero,
        rota, status_ria, sub_rota, tel_admin, tel_sindico, nome_CVT, nome_elevador } = JSON.parse(event.body);
    if (name === undefined || bairro === undefined || cep === undefined ||
        cidade === undefined || email === undefined || federacao === undefined ||
        logradouro === undefined || mes_art === undefined || mes_ria === undefined ||
        numero === undefined || rota === undefined || status_ria === undefined ||
        sub_rota === undefined || tel_admin === undefined || tel_sindico === undefined ||
        nome_CVT === undefined || nome_elevador === undefined)
        throw badRequest("Algum campo não definido!");
      
  const database = new CondominiosRepositories();
  const condominio = await database.findByName(name);

  if (condominio === undefined)
      throw notFound("Condomínio não encontrado!");

  await database.update(name, bairro, cep, cidade, email, federacao, logradouro, mes_art, mes_ria, numero,
    rota, status_ria, sub_rota, tel_admin, tel_sindico, nome_CVT, nome_elevador);
    
  return ok("message", "Condomínio atualizado com sucesso!");
};

export const handler = Handler(updateCondominio);