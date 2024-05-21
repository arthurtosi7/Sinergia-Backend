import  * as JWT from "jsonwebtoken";
import { config } from "dotenv";
import { ITokenData } from "./tokenData";

export const tryAuthenticate = (
    authorization: string | undefined
): ITokenData | undefined => {
    if (!authorization) {
        return;
    }

    config();

    const [, token] = authorization.split(" ");

    try {
        JWT.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return;
    }

    return JWT.decode(token, {
        json: true,
    }) as ITokenData;
};