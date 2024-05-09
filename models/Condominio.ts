import CVT from "./CVT";
import Elevador from "./Elevador";

type Condominio = {
    nome: string;
    CVT: CVT[];
    elevador: Elevador;
    //INFORMAÇÕES DO CONDOMÍNIO
};

export default Condominio;