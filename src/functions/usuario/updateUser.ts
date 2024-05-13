import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok, notFound, badRequest } from "src/utils/Returns";
import UserRepositories from "../../repositories/implementations/UserRepositories";

const updateUser = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    
    const { full_name, username, email, password, birth, job } = JSON.parse(event.body);
  if (full_name === undefined || username === undefined || email === undefined
    || password === undefined || birth === undefined || job === undefined)
      throw badRequest("Algum campo não definido!");
      
  const database = new UserRepositories();
  const person = await database.findByEmail(email);

  if (person === undefined)
      throw notFound("Usuário não encontrado!");

  await database.update(full_name, username, email, password, birth, job);
    
  return ok("message", "Usuário atualizado com sucesso!");
};

export const handler = Handler(updateUser);