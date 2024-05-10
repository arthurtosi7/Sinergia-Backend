import Rotas from "../models/Rotas";

interface IRotasRepositories {
    create(letra: string, nome_regiao: string, abreviacao: string): Promise<void>;
}

export default IRotasRepositories;