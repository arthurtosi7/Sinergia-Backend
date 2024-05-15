import CVT from "src/models/CVT";
import Condominio from "../models/Condominio";
import Elevador from "src/models/Elevador";

interface ICondominiosRepositories {

    findByName(name: string): Promise<Condominio>;

    create(name: string, bairro: string, cep: string, cidade: string, email: string, federacao: string, logradouro: string,
        mes_art: string, mes_ria: string, numero: number, rota: string, status_ria: boolean, sub_rota: number, tel_admin: string,
        tel_sindico: string, CVT: CVT[], elevador: Elevador
    ): Promise<void>;

    update(name: string, bairro: string, cep: string, cidade: string, email: string, federacao: string, logradouro: string,
        mes_art: string, mes_ria: string, numero: number, rota: string, status_ria: boolean, sub_rota: number, tel_admin: string,
        tel_sindico: string, CVT: CVT[], elevador: Elevador
    ): Promise<void>;

    delete(Condominio: string): Promise<void>;

    list(): Promise<Condominio[]>;

}

export default ICondominiosRepositories;