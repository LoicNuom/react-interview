import database from "./database"

const firebase = database.getInstance()
const db = firebase.db

const articleExample ={

}

export async function getAllArticles(){
  const articles = []

  /* TODO: create a call to firebase to get all the articles in the collection 'articles' */

  return articles
}


/* TODO: Bonus points, create a function that return only the articles with a set of tags, or keywords */