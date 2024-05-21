import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import {badRequest, created} from "src/utils/Returns";
import CVTRepositories from "../../repositories/implementations/CVTRepositories"
import * as console from "node:console";

const createCVT = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const num_visita = Math.floor(Math.random() * 99999).toString(); //Math.floor arredonda para baixo, Math.random gera um número aleatório entre 0 e 1, multiplicando por 100000, temos um número entre 0 e 99999, e toString converte para string


    return created("CVT criado com sucesso", "message");
}

export const handler = Handler(createCVT);