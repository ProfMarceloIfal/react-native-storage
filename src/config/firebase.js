
import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

//Aqui vc deve colocar as suas credenciais 
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export { app, db, storage }