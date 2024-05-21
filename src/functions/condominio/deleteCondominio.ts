import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import CondominiosRepositories from "../../repositories/implementations/CondominiosRepositories";
import { ok, notFound, badRequest } from "src/utils/Returns";

const deleteCondominio = async (
    event: APIGatewayProxyEvent
) : Promise<APIGatewayProxyResult> => {
  
    const { name } = event.pathParameters;
    if (name === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new CondominiosRepositories();
    const condominio = await database.findByName(name);
    if (condominio === undefined)
        return notFound("Condomínio não encontrado!");

    await database.delete(name);
        
    return ok("message", "Condomínio deletado com sucesso!");
};

export const handler = Handler(deleteCondominio);