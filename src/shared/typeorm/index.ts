import {createConnection, } from 'typeorm'

async function main() {

  try {
    const conn = await createConnection()
    console.log("connected to the database")
  } catch (e) {
    console.log(e)
  }
}

main()
