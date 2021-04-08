import firebase from "firebase";

const firebaseApp = {
	apiKey: "AIzaSyDi6XWX_gfS8cN3XaBgESiRJoeTuxQB9kY",
	authDomain: "clone-4a4d7.firebaseapp.com",
	projectId: "clone-4a4d7",
	storageBucket: "clone-4a4d7.appspot.com",
	messagingSenderId: "863478981238",
	appId: "1:863478981238:web:54bfdb0438c36238b07557",
};

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
