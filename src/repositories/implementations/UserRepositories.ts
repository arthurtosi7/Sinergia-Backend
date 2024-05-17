import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc, deleteDoc } from "firebase/firestore";
import IUserRepositories from "../IUserRepositories";
import User from "../../models/User";

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
        await setDoc(doc(this.db, "usuarios", email), {
            //const date_of_birth = new Date(birth); //?????
            username: username,
            name: full_name,
            email: email,
            password: password,
            birth: birth,
            job: job
        });

        return undefined;
    }

    async findByEmail(email: string): Promise<User> {
        const document = await getDoc(doc(this.db, "usuarios", email));
        if (!document.exists()) {
            return undefined;
        }
        const user = {
            username: document.data().username,
            full_name: document.data().full_name,
            email: document.data().email,
            password: document.data().password,
            birth: document.data().birth,
            job: document.data().job
        }
        return user as unknown as User;
    }
    
    async update(full_name: string, username: string, email: string, password: string, birth: string, job: string): Promise<void> {
        const document = await getDoc(doc(this.db, "usuarios", email));
        if (!document.exists()) {
            return undefined;
        }
        await setDoc(doc(this.db, "usuarios", email), {
            //const date_of_birth = new Date(birth); //?????
            username: username,
            name: full_name,
            email: email,
            password: password,
            birth: birth,
            job: job
        });

        return undefined;
    }


    async delete(username: string): Promise<void> {
        await deleteDoc(doc(this.db, "usuarios", username));
    }
}

export default UserRepositories;