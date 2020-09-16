import database from "./database"

const db = database.getInstance().db

async function getAllTags(){
  const tags = await db.get('tags')

  return tags
}