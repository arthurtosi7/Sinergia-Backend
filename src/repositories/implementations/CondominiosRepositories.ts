import {doc, getDoc, setDoc, getFirestore, deleteDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import ICondominiosRepositories from "../ICondominiosRepositories";
import Condominio from "../../models/Condominio";
import CVT from "src/models/CVT";
import Elevador from "src/models/Elevador";

const firebaseConfig = {
    apiKey: "AIzaSyAtLGZpmFzhi9ydmWjr8W3-C0xCfkpDCw0",
    authDomain: "sinergia-80431.firebaseapp.com",
    projectId: "sinergia-80431",
    storageBucket: "sinergia-80431.appspot.com",
    messagingSenderId: "845344386673",
    appId: "1:845344386673:web:c5909607f556d36b3e75d0"
};

const app = initializeApp(firebaseConfig);

class CondominiosRepositories implements ICondominiosRepositories {
    private readonly db = getFirestore(app);
    async findByName(name: string): Promise<Condominio> {
        const document = await getDoc(doc(this.db, "condominios", name));
        if (!document.exists()) {
            return undefined;
        }
        const cond = document.data();
        return cond as Condominio;
    }

    async create(name: string, bairro: string, cep: string, cidade: string, email: string, federacao: string,
    logradouro: string, mes_art: string, mes_ria: string, numero: number, rota: string, status_ria: boolean,
    sub_rota: number, tel_admin: string, tel_sindico: string, CVT: CVT[], elevador: Elevador): Promise<void> {
        await setDoc(doc(this.db, "condominios", name),{
        name: name,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        email: email,
        federacao: federacao,
        logradouro: logradouro,
        mes_art: mes_art,
        mes_ria: mes_ria,
        numero: numero,
        rota: rota,
        status_ria: status_ria,
        sub_rota: sub_rota,
        tel_admin: tel_admin,
        tel_sindico: tel_sindico,
        CVT: CVT,
        elevador: elevador
        });
    }

    async update(name: string, bairro: string, cep: string, cidade: string, email: string, federacao: string,
    logradouro: string, mes_art: string, mes_ria: string, numero: number, rota: string, status_ria: boolean,
    sub_rota: number, tel_admin: string, tel_sindico: string, CVT: CVT[], elevador: Elevador): Promise<void> {
        const document = await getDoc(doc(this.db, "condominios", name));
        if (!document.exists()) {
            return undefined;
        }
        await setDoc(doc(this.db, "condominios", name), {
            name: name,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            email: email,
            federacao: federacao,
            logradouro: logradouro,
            mes_art: mes_art,
            mes_ria: mes_ria,
            numero: numero,
            rota: rota,
            status_ria: status_ria,
            sub_rota: sub_rota,
            tel_admin: tel_admin,
            tel_sindico: tel_sindico,
            CVT: CVT,
            elevador: elevador
        });
    }

    async delete(Condominio: string): Promise<void> {
        await deleteDoc(doc(this.db, "condominios", Condominio));
    }

}

export default CondominiosRepositories;