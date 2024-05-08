import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Handler } from "src/errors/Handler";
import { ok } from "src/utils/Returns";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtLGZpmFzhi9ydmWjr8W3-C0xCfkpDCw0",
  authDomain: "sinergia-80431.firebaseapp.com",
  projectId: "sinergia-80431",
  storageBucket: "sinergia-80431.appspot.com",
  messagingSenderId: "845344386673",
  appId: "1:845344386673:web:c5909607f556d36b3e75d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const testFirebase = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return ok("message", "Hello World!");
};

export const handler = Handler(testFirebase);