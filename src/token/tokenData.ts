import { PermissionLevels } from "src/enums/permissionLevels";

interface ITokenData {
    email: string;
    nome: string;
    permissionLevel: PermissionLevels;
}

export { ITokenData };
