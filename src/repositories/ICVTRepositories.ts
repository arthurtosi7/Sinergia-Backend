import CVT from "../models/CVT";

interface ICVTRepositories {
    create(num_visita: string, cliente: string, data: Date, horario_inicial: string, horario_final: string, endereco: string, tipo_de_visita: string, cnpj: string, tecnico: string, tecnico_auxiliar: string, nome_do_recebedor: string, cpf_do_recebedor: string,
           temp_paralisacao: string, imagem: string, emprego_de_material: boolean, devolucao_da_chave: boolean, nome_elevador: string, info_adicionais: string, info_tecnica: string): Promise<void>;

    findByName(num_visita: string): Promise<CVT>;

    listAll(): Promise<CVT[]>;
}

export default ICVTRepositories;