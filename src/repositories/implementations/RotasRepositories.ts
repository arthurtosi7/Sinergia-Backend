import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import IRotasRepositories from "../IRotasRepositories";
import Rota from "../../models/Rota";
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

// @ts-ignore
class RotasRepositories implements IRotasRepositories {
    private readonly db = getFirestore(app);

    async create(letra: string, nome_regiao: string, abreviacao: string): Promise<void> {
        await setDoc(doc(this.db, "rotas", letra), {
            letra: letra,
            nome_regiao: nome_regiao,
            abreviacao: abreviacao,
            condominios: []
        });

        return undefined;
    }

    async findByLetra(letra: string): Promise<Rota> {
        const document = await getDoc(doc(this.db, "rotas", letra));
        if (!document.exists()) {
            return undefined;
        }

        const condominiosCollection = collection(this.db, 'rotas', letra, 'condominios');
        const condominiosSnapshot = await getDocs(condominiosCollection);
        const condominios = condominiosSnapshot.docs.map(Condominiodoc => Condominiodoc.id);
        const rota = {
            letra: document.data().letra,
            nome_regiao: document.data().nome_regiao,
            abreviacao: document.data().abreviacao,
            condominios: condominios
        }
        return rota as Rota;


    }

    //Função para inserir um condominio em uma rota. Recebe uma rota e o nome do condomínio. Deve salvar apenas o nome do condomínio dentro de uma nova coleção chamada "condominios" dentro da rota.
    async insertCondominio (rota: Rota, condominio: string): Promise<void> {
        await setDoc(doc(this.db, "rotas", rota.letra, "condominios", condominio), {
            nome: condominio
        });

        return undefined;
    }
}

export default RotasRepositories;