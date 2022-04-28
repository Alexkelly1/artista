import app from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAMVNLVNB_8xCb1p4YyHRM5s1rUyejhykw",
  authDomain: "artista-26a24.firebaseapp.com",
  projectId: "artista-26a24",
  storageBucket: "artista-26a24.appspot.com",
  messagingSenderId: "962053485800",
  appId: "1:962053485800:web:f7463e2abedcb09225455d",
  measurementId: "G-61FE658B73"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;