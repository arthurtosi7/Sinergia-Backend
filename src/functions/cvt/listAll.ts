import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok } from "src/utils/Returns";
import CVTRepositories from "../../repositories/implementations/CVTRepositories";

const listAll = async (): Promise<APIGatewayProxyResult> => {
    const database = new CVTRepositories();
    const cvts = await database.listAll();
    return ok("message", cvts);
}

export const handler = Handler(listAll);