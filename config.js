import firebase from firebase 
const firebaseConfig = {
  apiKey: "AIzaSyDb0rsciJA0fkxIV-KyNM7FtXahQ0cn-5E",
  authDomain: "storytelling-app-3bfad.firebaseapp.com",
  projectId: "storytelling-app-3bfad",
  storageBucket: "storytelling-app-3bfad.appspot.com",
  messagingSenderId: "468117855016",
  appId: "1:468117855016:web:764fe4633d0c0c4cafce1d"
};
const app = initializeApp(firebaseConfig);
export default firebase.database();