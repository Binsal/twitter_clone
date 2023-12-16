import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5RJzMCfRcXToTHCtqkmGGxByiyD1QQ9M",
  authDomain: "twitter-f9fe2.firebaseapp.com",
  projectId: "twitter-f9fe2",
  storageBucket: "twitter-f9fe2.appspot.com",
  messagingSenderId: "270726246375",
  appId: "1:270726246375:web:39ecf0fc63e90575879742"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
