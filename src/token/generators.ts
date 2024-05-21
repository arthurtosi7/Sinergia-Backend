import * as JWT from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import { ITokenData } from "./tokenData";

const generateToken = (user: ITokenData): string => {
    const token = JWT.sign(
        user,
        process.env.SECRET_KEY as Secret,
        {
            expiresIn: "3h",
        }
    );

    return token;
};

export { generateToken };