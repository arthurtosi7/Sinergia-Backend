import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import UserRepositories from "../../repositories/implementations/UserRepositories";
import { ok, notFound, badRequest } from "src/utils/Returns";

const deleteUser = async (
    event: APIGatewayProxyEvent
) : Promise<APIGatewayProxyResult> => {
  
    const { username } = event.pathParameters;
    if (username === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new UserRepositories();
    const user = await database.findByUsername(username);
    if (user === undefined)
        return notFound("Usuário não encontrado!");

    await database.delete(username);
        
    return ok("message", "Usuário deletado com sucesso!");
};

export const handler = Handler(deleteUser);