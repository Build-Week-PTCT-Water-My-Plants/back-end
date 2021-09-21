//db to import goes here when completed
//const db = require('../data/')

module.exports = {
    add,
    find,
    findBy,
    findById,
  };
  
  function find() {
    return db("users as u")
  }
  
  function findBy(filter) {
    return db("users as u")
  }
  
  async function add(user) {
    const [id] = await db("users").insert(user);
    return findById(id);
  }
  
  function findById(id) {
    return db("users as u")
  }