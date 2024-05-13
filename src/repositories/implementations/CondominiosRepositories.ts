import {doc, getDoc, getFirestore} from "firebase/firestore";
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
        const cond = document.data();
        return cond as Condominio;
    }

}

export default CondominiosRepositories;