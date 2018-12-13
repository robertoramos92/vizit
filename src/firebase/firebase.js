import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCveHfeTdsPt98yqyqc0p4jNiTa2-EyZAk",
    authDomain: "vizit-027.firebaseapp.com",
    databaseURL: "https://vizit-027.firebaseio.com",
    projectId: "vizit-027",
    storageBucket: "vizit-027.appspot.com",
    messagingSenderId: "542092873446"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  const auth = firebase.auth()

  export {
      auth,
  };