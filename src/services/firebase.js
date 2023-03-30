import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where,
    addDoc,
  } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "ecommerce-react-aa92b",
    storageBucket: "ecommerce-react-aa92b.appspot.com",
    messagingSenderId: process.env.REACT_APP_MSG_ID,
    appId: "1:834510325013:web:0049e82e4d2b8a7fab951c"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  
  export async function getProds() {
      const collectionRef = collection(db, "products");
      let results = await getDocs(collectionRef);
    
      let dataProds = results.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    
      return dataProds;
    }
    
    export async function getUnProd(idParams) {
      const docRef = doc(db, "products", idParams);
      const docResult = await getDoc(docRef);
      if (docResult.exists()) {
        return { id: docResult.id, ...docResult.data() };
      }
    }
    
    export async function getProdsByCategory(idCategoryParams) {
      const collectionRef = collection(db, "products");
    
      const queryCat = query(
        collectionRef,
        where("category", "==", idCategoryParams)
      );
    
      let results = await getDocs(queryCat);
    
      let dataProds = results.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    
      return dataProds;
    }
    
    export async function createBuyOrder(orderData){
      const collectionRef = collection(db, "orders");
      let respuesta = await addDoc(collectionRef, orderData)
      return respuesta.id;
    }
    
  
  export default firebaseApp;