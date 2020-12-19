// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCltUUy9jLkYxiWGNKaHDoCp6vhyz5VLRQ",
    authDomain: "poll-app-2ddf3.firebaseapp.com",
    databaseURL: "https://poll-app-2ddf3.firebaseio.com",
    projectId: "poll-app-2ddf3",
    storageBucket: "poll-app-2ddf3.appspot.com",
    messagingSenderId: "1035340703316",
    appId: "1:1035340703316:web:b413d919d5a80cb4adefc1",
    measurementId: "G-EFJ865QDJ8"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.firestore().enablePersistence();

  export {auth, provider};
  export default db;
  