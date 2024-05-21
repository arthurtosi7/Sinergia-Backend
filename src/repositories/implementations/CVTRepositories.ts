import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc, deleteDoc, collection, getDocs } from "firebase/firestore";
import ICVTRepositories from "../ICVTRepositories";
import CVT from "../../models/CVT";

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

    async create(num_visita: string, data: string, hora: string, id_condominio: string, id_visitante: string): Promise<void> {
        await setDoc(doc(this.db, "cvt", num_visita), {
            num_visita: num_visita,
            data: data,
            hora: hora,
            id_condominio: id_condominio,
            id_visitante: id_visitante
        });

        return undefined;
    }

    async findByName(num_visita: string): Promise<CVT> {
        const document = await getDoc(doc(this.db, "cvt", num_visita));
        if (!document.exists()) {
            return undefined;
        }

        const cvt = {
            num_visita: document.data().num_visita,
            data: document.data().data,
            hora: document.data().hora,
            id_condominio: document.data().id_condominio,
            id_visitante: document.data().id_visitante
        }
        return cvt as unknown as CVT;
    }
}

export default CVTRepositories;
