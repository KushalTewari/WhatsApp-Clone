import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCBJna5YV4l4AhvpYXQInwChHcLsr6v52M",
  authDomain: "whatsapp-clone-3479e.firebaseapp.com",
  projectId: "whatsapp-clone-3479e",
  storageBucket: "whatsapp-clone-3479e.appspot.com",
  messagingSenderId: "1051284775798",
  appId: "1:1051284775798:web:d05c01fb8add3b8efa9057",
  measurementId: "G-9KJE7X7B35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider};
export default db;
