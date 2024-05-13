import Condominio from "../models/Condominio";

interface ICondominiosRepositories {
    findByName(name: string): Promise<Condominio>;
}

export default ICondominiosRepositories;