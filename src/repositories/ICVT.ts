import CVT from "../models/CVT";

interface ICVT {
    create(num_visita: string, data: string, hora: string, id_condominio: string, id_visitante: string): Promise<void>;

    findByName(num_visita: string): Promise<CVT>;
}

export default ICVT;