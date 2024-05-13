import Rota from "../models/Rota";
import Condominio from "../models/Condominio";

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
     * Check if a condo is already in a route
     * @param rota
     * @param condominio
     */
    condominioAlreadyOnRotas(rota: Rota, condominio: string): Promise<boolean>;

    /**
     * List all routes
     */
    listAll(): Promise<Rota[]>;

    /**
     * Insert a new condo in a route
     * @param rota
     * @param condominio
     */
    insertCondominio(rota: Rota, condominio: string): Promise<void>;
}

export default IRotasRepositories;