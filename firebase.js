import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1s_OmYkGpq4nAT7g7Bz_NnQZbcJQjGP0",
  authDomain: "convite-cinema.firebaseapp.com",
  projectId: "convite-cinema",
  storageBucket: "convite-cinema.firebasestorage.app",
  messagingSenderId: "501495618765",
  appId: "1:501495618765:web:fe059935fd023837fd5d84"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function salvarResposta(resposta){
  await addDoc(collection(db, "respostas"), {
    resposta: resposta,
    data: new Date()
  });
}

console.log("Firebase conectado!");