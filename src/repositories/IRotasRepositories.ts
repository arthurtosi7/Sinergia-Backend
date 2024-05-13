import Rota from "../models/Rota";

interface IRotasRepositories {
    /**
     * Create a new route
     * @param letra
     * @param nome_regiao
     * @param abreviacao
     */
    create(letra: string, nome_regiao: string, abreviacao: string): Promise<void>;

    /**
     * Find a route by its letter
     * @param letra
     */
    findByLetra(letra: string): Promise<Rota>;

    /**
     * Insert a new condo in a route
     * @param rota
     * @param condominio
     */
    insertCondominio(rota: Rota, condominio: string): Promise<void>;
}

export default IRotasRepositories;