import { APIGatewayProxyHandler } from "aws-lambda";
import { ok, badRequest } from "../../utils/Returns";
import { CheckEmailPasswordService } from "src/services/auth/checkEmailPasswordService";
import { GenerateTokenService } from "src/services/base/generateTokenService";
import { bodySchema } from "src/entities/login/Login";

export const handle: APIGatewayProxyHandler = async (event) => {
    if (!event.body) {
        return badRequest("A valid body is required");
    }

    type UserLogin = { email: string; senha: string };
    let body: UserLogin;

    try {
        body = await bodySchema.validateAsync(JSON.parse(event.body));
    } catch (error) {
        return badRequest("Corpo inválido");
    }

    const checkemailPasswordService = new CheckEmailPasswordService();
    const incorrectLogin = await checkemailPasswordService.execute(
        body.email,
        body.senha
    );

    if (!incorrectLogin) {
        return badRequest("Login Incorreto");
    }

    const generateTokenService = new GenerateTokenService();
    const token = await generateTokenService.execute(incorrectLogin.user);

    return ok("token", token);
};
