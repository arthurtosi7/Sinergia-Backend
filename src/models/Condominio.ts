import CVT from "./CVT";
import Elevador from "./Elevador";

type Condominio = {
    nome: string;
    bairro: string;
    cep: string;
    cidade: string;
    email: string;
    federacao: string;
    logradouro: string;
    mes_art: string;
    mes_ria: string;
    numero: number;
    rota: string;
    status_ria: boolean;
    sub_rota: number;
    tel_admin: string;
    tel_sindico: string;
    CVT: CVT[];
    elevador: Elevador;
    //INFORMAÇÕES DO CONDOMÍNIO
};

export default Condominio;