const typeDefs = `
  type Book{
    bookId: ID
    title: String
    author: [String]
    description: String
    image: String
    link: String
    title: String
    author: [String]
    description: String
    image: String
    link: String

  }
  type User {

    username:String
    password :String
    email:String
    savedBook:[Book]

  }
  type auth {
  token: ID!
  user:User
  }

  input bookinput {
    bookId: String
    title: String
    author: [String]
    description: String
    image: String
    link: String
  }
  type Query {
    classes: [Class]
    me: User
  }
  type mutation {
    saveBook( data: bookinput) : User 
    deleteBook(id: ID): User
    login(username: String, email:String): auth
    adduser(username:String, email:String, password:String) :auth
 }
 ` 
;

module.exports = typeDefs;
