import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok, notFound, badRequest } from "src/utils/Returns";
import CVTRepositories from "../../repositories/implementations/CVTRepositories";

const updateCondominio = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    
    const { num_visita, cliente, data, horario_inicial, horario_final, endereco, tipo_de_visita,
        cnpj, tecnico, tecnico_auxiliar, nome_do_recebedor, cpf_do_recebedor, temp_paralisacao,
        imagem, emprego_de_material, devolucao_da_chave, nome_elevador, info_adicionais,
        info_tecnica } = JSON.parse(event.body);
    if (cliente === undefined || data === undefined || horario_inicial === undefined ||
        horario_final === undefined || endereco === undefined || tipo_de_visita === undefined ||
        cnpj === undefined || tecnico === undefined || tecnico_auxiliar === undefined ||
        nome_do_recebedor === undefined || cpf_do_recebedor === undefined || temp_paralisacao === undefined ||
        imagem === undefined || emprego_de_material === undefined || devolucao_da_chave === undefined ||
        nome_elevador === undefined || info_tecnica === undefined)
        throw badRequest("Algum campo não definido!");
      
  const database = new CVTRepositories();
  const verify = await database.findByName(num_visita);

  if (verify === undefined)
      throw notFound("CVT não encontrado!");

  await database.update(cliente, data, horario_inicial, horario_final, endereco, tipo_de_visita,
    cnpj, tecnico, tecnico_auxiliar, nome_do_recebedor, cpf_do_recebedor, temp_paralisacao,
    imagem, emprego_de_material, devolucao_da_chave, nome_elevador, info_adicionais,
    info_tecnica);
    
  return ok("message", "CVT atualizado com sucesso!");
};

export const handler = Handler(updateCVT);