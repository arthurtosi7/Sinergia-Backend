import {doc, getDoc, setDoc, getFirestore, deleteDoc, serverTimestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import ICondominiosRepositories from "../ICondominiosRepositories";
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

class CondominiosRepositories implements ICondominiosRepositories {
    private readonly db = getFirestore(app);
    async findByName(name: string): Promise<Condominio> {
        const document = await getDoc(doc(this.db, "condominios", name));
        if (!document.exists()) {
            return undefined;
        }
        const cond = {
            name: document.data().name,
            bairro: document.data().bairro,
            cep: document.data().cep,
            cidade: document.data().cidade,
            email: document.data().email,
            federacao: document.data().federacao,
            logradouro: document.data().logradouro,
            mes_art: document.data().mes_art,
            mes_ria: document.data().mes_ria,
            numero: document.data().numero,
            rota: document.data().rota,
            status_ria: document.data().status_ria,
            sub_rota: document.data().sub_rota,
            tel_admin: document.data().tel_admin,
            tel_sindico: document.data().tel_sindico,
            nome_CVT: document.data().nome_CVT,
            nome_elevador: document.data().nome_elevador
        }
        return cond as unknown as Condominio;
    }

    async create(name: string, bairro: string, cep: string, cidade: string, email: string, federacao: string,
    logradouro: string, mes_art: string, mes_ria: string, numero: number, rota: string, status_ria: boolean,
    sub_rota: number, tel_admin: string, tel_sindico: string, nome_CVT: string, nome_elevador: string): Promise<void> {
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
        nome_CVT: nome_CVT,
        nome_elevador: nome_elevador
        });
    }

    async update(name: string, bairro: string, cep: string, cidade: string, email: string, federacao: string,
    logradouro: string, mes_art: string, mes_ria: string, numero: number, rota: string, status_ria: boolean,
    sub_rota: number, tel_admin: string, tel_sindico: string, nome_CVT: string, nome_elevador: string): Promise<void> {
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
            nome_CVT: nome_CVT,
            nome_elevador: nome_elevador
        });
    }

    async delete(Condominio: string): Promise<void> {
        await deleteDoc(doc(this.db, "condominios", Condominio));
    }

}

export default CondominiosRepositories;