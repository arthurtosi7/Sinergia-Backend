import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok } from "src/utils/Returns";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtLGZpmFzhi9ydmWjr8W3-C0xCfkpDCw0",
  authDomain: "sinergia-80431.firebaseapp.com",
  projectId: "sinergia-80431",
  storageBucket: "sinergia-80431.appspot.com",
  messagingSenderId: "845344386673",
  appId: "1:845344386673:web:c5909607f556d36b3e75d0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const testFirebase = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return ok("message", "Hello World!");
};

export const handler = Handler(testFirebase);