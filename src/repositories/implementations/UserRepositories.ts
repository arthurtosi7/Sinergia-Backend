import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import IUserRepositories from "../IUserRepositories";
import user from "../../models/User";

const firebaseConfig = {
    apiKey: "AIzaSyAtLGZpmFzhi9ydmWjr8W3-C0xCfkpDCw0",
    authDomain: "sinergia-80431.firebaseapp.com",
    projectId: "sinergia-80431",
    storageBucket: "sinergia-80431.appspot.com",
    messagingSenderId: "845344386673",
    appId: "1:845344386673:web:c5909607f556d36b3e75d0"
};

const app = initializeApp(firebaseConfig);

class UserRepositories implements IUserRepositories {
    private readonly db = getFirestore(app); //Private pois só será usada nessa classe
    //Modo read only
    async create(full_name: string, username: string ,email: string, password: string, birth: string, job: string): Promise<void> {
        await setDoc(doc(this.db, "usuarios", username), {
            const date_of_birth = new Date(birth); //?????
            full_name: full_name,
            email: email,
            password: password,
            birth: date_of_birth,
            job: job
        });

        return undefined;
    }
}

export default UserRepositories;