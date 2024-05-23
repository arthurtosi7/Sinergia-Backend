import { initializeApp } from "firebase/app";
import { Timestamp, getFirestore, setDoc, getDoc, doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import ICVTRepositories from "../ICVTRepositories";
import CVT from "../../models/CVT";
import Condominio from "../../models/Condominio";

const firebaseConfig = {
    apiKey: "AIzaSyAtLGZpmFzhi9ydmWjr8W3-C0xCfkpDCw0",
    authDomain: "sinergia-80431.firebaseapp.com",
    projectId: "sinergia-80431",
    storageBucket: "sinergia-80431.appspot.com",
    messagingSenderId: "845344386673",
    appId: "1:845344386673:web:c5909607f556d36b3e75d0"
};

const app = initializeApp(firebaseConfig);

class CVTRepositories implements ICVTRepositories {
    private readonly db = getFirestore(app);

    async create(num_visita: string, cliente: string, data: Date, horario_inicial: string, horario_final: string, endereco: string, tipo_de_visita: string, cnpj: string, tecnico: string, tecnico_auxiliar: string, nome_do_recebedor: string, cpf_do_recebedor: string, temp_paralisacao: string, imagem: string, emprego_de_material: boolean, devolucao_da_chave: boolean, nome_elevador: string, info_adicionais: string, info_tecnica: string): Promise<void> {
        await setDoc(doc(this.db, "cvt", num_visita), {
            num_visita: num_visita,
            cliente: cliente,
            data: data,
            horario_inicial: horario_inicial,
            horario_final: horario_final,
            endereco: endereco,
            tipo_de_visita: tipo_de_visita,
            cnpj: cnpj,
            tecnico: tecnico,
            tecnico_auxiliar: tecnico_auxiliar,
            nome_do_recebedor: nome_do_recebedor,
            cpf_do_recebedor: cpf_do_recebedor,
            temp_paralisacao: temp_paralisacao,
            imagem: imagem,
            emprego_de_material: emprego_de_material,
            devolucao_da_chave: devolucao_da_chave,
            nome_elevador: nome_elevador,
            info_adicionais: info_adicionais,
            info_tecnica: info_tecnica
        });
    }

    async findByName(num_visita: string): Promise<CVT> {
        const document = await getDoc(doc(this.db, "cvt", num_visita));
        if (!document.exists()) {
            return undefined;
        }

        const cvt = {
            num_visita: document.data().num_visita,
            cliente: document.data().cliente,
            data: document.data().data.toDate(),
            horario_inicial: document.data().horario_inicial,
            horario_final: document.data().horario_final,
            endereco: document.data().endereco,
            tipo_de_visita: document.data().tipo_de_visita,
            cnpj: document.data().cnpj,
            tecnico: document.data().tecnico,
            tecnico_auxiliar: document.data().tecnico_auxiliar,
            nome_do_recebedor: document.data().nome_do_recebedor,
            cpf_do_recebedor: document.data().cpf_do_recebedor,
            temp_paralisacao: document.data().temp_paralisacao,
            imagem: document.data().imagem,
            emprego_de_material: document.data().emprego_de_material,
            devolucao_da_chave: document.data().devolucao_da_chave,
            nome_elevador: document.data().nome_elevador,
            info_adicionais: document.data().info_adicionais,
            info_tecnica: document.data().info_tecnica
        }
        return cvt as unknown as CVT;
    }

    async listAll(): Promise<CVT[]> {
        const cvtsCollection = collection(this.db, 'cvts');
        const cvtsSnapshot = await getDocs(cvtsCollection);

        const cvtList = cvtsSnapshot.docs.map(doc =>
            ({
                num_visita: doc.data().num_visita,
                cliente: doc.data().cliente,
                data: doc.data().data.toDate(),
                horario_inicial: doc.data().horario_inicial,
                horario_final: doc.data().horario_final,
                endereco: doc.data().endereco,
                tipo_de_visita: doc.data().tipo_de_visita,
                cnpj: doc.data().cnpj,
                tecnico: doc.data().tecnico,
                tecnico_auxiliar: doc.data().tecnico_auxiliar,
                nome_do_recebedor: doc.data().nome_do_recebedor,
                cpf_do_recebedor: doc.data().cpf_do_recebedor,
                temp_paralisacao: doc.data().temp_paralisacao,
                imagem: doc.data().imagem,
                emprego_de_material: doc.data().emprego_de_material,
                devolucao_da_chave: doc.data().devolucao_da_chave,
                nome_elevador: doc.data().nome_elevador,
                info_adicionais: doc.data().info_adicionais,
                info_tecnica: doc.data().info_tecnica
            })
        );

        return cvtList as unknown as CVT[];
    }

    async update(num_visita: string, cliente: string, data: Timestamp, horario_inicial: string, horario_final: string, endereco: string, tipo_de_visita: string,
        cnpj: string, tecnico: string, tecnico_auxiliar: string, nome_do_recebedor: string, cpf_do_recebedor: string, temp_paralisacao: string,
        imagem: string, emprego_de_material: string, devolucao_da_chave: string, nome_elevador: string, info_adicionais: string,
        info_tecnica: string): Promise<void> {
            const document = await getDoc(doc(this.db, "cvt", num_visita));
            if (!document.exists()) {
                return undefined;
            }
            await setDoc(doc(this.db, "cvt", num_visita), {
                cliente: doc.data().cliente,
                data: doc.data().data.toDate(),
                horario_inicial: doc.data().horario_inicial,
                horario_final: doc.data().horario_final,
                endereco: doc.data().endereco,
                tipo_de_visita: doc.data().tipo_de_visita,
                cnpj: doc.data().cnpj,
                tecnico: doc.data().tecnico,
                tecnico_auxiliar: doc.data().tecnico_auxiliar,
                nome_do_recebedor: doc.data().nome_do_recebedor,
                cpf_do_recebedor: doc.data().cpf_do_recebedor,
                temp_paralisacao: doc.data().temp_paralisacao,
                imagem: doc.data().imagem,
                emprego_de_material: doc.data().emprego_de_material,
                devolucao_da_chave: doc.data().devolucao_da_chave,
                nome_elevador: doc.data().nome_elevador,
                info_adicionais: doc.data().info_adicionais,
                info_tecnica: doc.data().info_tecnica
            });
        }
}

export default CVTRepositories;
