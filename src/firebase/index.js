import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAcfKteCNmjHl5tJyTn2F_NFe0mT4XRGzo",
  authDomain: "coderhouse-heybro.firebaseapp.com",
  projectId: "coderhouse-heybro",
  storageBucket: "coderhouse-heybro.appspot.com",
  messagingSenderId: "694945978144",
  appId: "1:694945978144:web:04be9aecc0fe81cc71a945",
  measurementId: "G-NVYCEVEBLF"
};

const iniciarFirebase = () => initializeApp(firebaseConfig);

export default iniciarFirebase