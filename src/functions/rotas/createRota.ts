import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok } from "src/utils/Returns";

const createRota = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

}

export const handler = Handler(createRota);