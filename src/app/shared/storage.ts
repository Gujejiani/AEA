
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDtcZLSWw_TZoY8QK4JGl1bx-9cBg-TBHA",
    authDomain: "healthcontrol-76123.firebaseapp.com",
    databaseURL: "https://healthcontrol-76123.firebaseio.com",
    projectId: "healthcontrol-76123",
    storageBucket: "healthcontrol-76123.appspot.com",
    messagingSenderId: "1069123909186",
    appId: "1:1069123909186:web:1e192af66c63e053861fdb",
    measurementId: "G-V4860GNSNG"
  };
let storagee = null;
  if (typeof localStorage !== 'undefined') { 
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  
    storagee = getStorage(app)
  };

   export const storage = storagee;
 
