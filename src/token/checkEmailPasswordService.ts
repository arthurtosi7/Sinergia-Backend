import { createHash } from "crypto";
import { docClient } from "dynamodb";
import { ITokenData } from "./tokenData";
import { PermissionLevels } from "src/enums/permissionLevels";

class CheckEmailPasswordService {
    async execute(email: string, senha: string) {
        const response = await docClient
            .query({
                TableName: "sinergiaDataUserCVT",
                KeyConditionExpression: "PK = :email",
                ExpressionAttributeValues: {
                    ":email": email,
                },
            })
            .promise();

        const user = response.Items[0]; // Assuming there's only one user per email

        if (!user) {
            return false;
        }

        const { salt, hashedPassword } = user;
        const hashedPasswordInput = createHash('sha256').update(senha + salt).digest('hex');

        if (hashedPasswordInput !== hashedPassword) {
            return false;
        }

        const userInfo: ITokenData = {
            email: user.email,
            nome: user.nome,
            permissionLevel: user.cargo as PermissionLevels
        };

        return {
            correctPassword: true,
            user: userInfo,
            PermissionLevels: user.permissionLevel as PermissionLevels
        };
    }
}

export { CheckEmailPasswordService };