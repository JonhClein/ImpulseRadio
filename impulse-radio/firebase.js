
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB41Gfg8XMm1Aty_NwXpn5EF4Tk_oMWyO0",
  authDomain: "impulseradio-cf0a6.firebaseapp.com",
  projectId: "impulseradio-cf0a6",
  storageBucket: "impulseradio-cf0a6.appspot.com",
  messagingSenderId: "413542059649",
  appId: "1:413542059649:web:a6df54b8f6c90fee340780",
  measurementId: "G-R7CG4383JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);