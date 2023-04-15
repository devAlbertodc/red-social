//import "firebase/compat/auth";
//import "firebase/compat/database";
//import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/database";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";
//Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAG2Pa3A3RAi8WCwhcosQ4LM1whE27PQco",
	authDomain: "redsocial-d0461.firebaseapp.com",
	projectId: "redsocial-d0461",
	storageBucket: "redsocial-d0461.appspot.com",
	messagingSenderId: "580487213697",
	appId: "1:580487213697:web:b4ed0ffe15478f85841380",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore();

export function strMsgErr(error) {
	switch (error.code) {
		case "auth/invalid-email":
			errMsg.value = "El email ingresado no es válido.";
			break;
		case "auth/user-not-found":
			errMsg.value = "El email ingresado no existe.";
			break;
		case "auth/wrong-password":
			errMsg.value = "Contraseña incorrecta.";
			break;
		case "auth/network-request-failed":
			errMsg.value =
				"Problemas recibiendo los datos. Intenta de nuevo, por favor";
			break;
		default:
			errMsg.value = "Error de autenticación.";
			break;
	}
	return errMsg.value;
}
