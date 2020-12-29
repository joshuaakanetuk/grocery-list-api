const knex = require("knex");
const bcrypt = require("bcryptjs");

// you'll need to hash the password and put it
// in the database and seed sql file as well so when
// you login it will pass the authToken as a response.

// bcrypt.hash("password", 12)
// .then(data => console.log(data))

const UsersService = {
  hasUserWithUserName(knex, username) {
    console.log(username)
    return knex("users")
      .where({username})
      .first()
      .then((user) => !!user);
  },
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into("users")
      .returning("*")
      .then((rows) => rows[0]);
  },
  hashPassword(password) { 
    return bcrypt.hash(password, 12);
  },
};

module.exports = UsersService;