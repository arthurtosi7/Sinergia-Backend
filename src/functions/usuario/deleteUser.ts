import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import UserRepositories from "../../repositories/implementations/UserRepositories";
import { ok, notFound, badRequest } from "src/utils/Returns";

const deleteUser = async (
    event: APIGatewayProxyEvent
) : Promise<APIGatewayProxyResult> => {
  
    const { email } = event.pathParameters;
    if (email === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new UserRepositories();
    const user = await database.findByEmail(email);
    if (user === undefined)
        return notFound("Usuário não encontrado!");

    await database.delete(email);
        
    return ok("message", "Usuário deletado com sucesso!");
};

export const handler = Handler(deleteUser);