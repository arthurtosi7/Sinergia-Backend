import Condominio from "./Condominio";
import Elevador from "./Elevador";

type CVT = {
    num_visita: number;
    cliente: Condominio;
    data: string;
    horario_inicial: string;
    horario_final: string;
    endereço: string;
    tipo_de_visita: string;
    cnpj: string;
    tecnico: string;
    tecnico_auxiliar: string;
    nome_do_recebedor: string;
    cpf_do_recebedor: string;
    temp_paralisacao: string;
    emprego_de_material: boolean;
    devolucao_da_chave: boolean;
    elevador: Elevador;
    info_adicionais: string;
    info_tecnica: string;
};

export default CVT;