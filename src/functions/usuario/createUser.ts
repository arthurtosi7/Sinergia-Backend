import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, created} from "src/utils/Returns";
import UserRepositories from "../../repositories/implementations/UserRepositories";

const createUser = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const { nome, usuario, email, senha, data_nasc, cargo } = JSON.parse(event.body);
    if (nome === undefined || usuario === undefined || email === undefined ||
        senha === undefined || data_nasc === undefined || cargo === undefined)
        return  badRequest("Algum campo não definido!");

    const database = new UserRepositories();
    const verify = await database.findByEmail(email);
    if (verify !== undefined)
        return  badRequest("Email já cadastrado!");

    await database.create(nome, usuario, email, senha, data_nasc, cargo);
    return created("Usuário criado com sucesso", "message");
}

export const handler = Handler(createUser);