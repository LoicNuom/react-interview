//import database from "./database"
import {config} from "./database"
import firebase from "firebase";


const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

export async function getAllTags(){
  const tags = await db.collection('tags').get().then(querySnapshot => {
  const data = querySnapshot.docs.map(doc => doc.data());
  return data
})

  return tags
}

