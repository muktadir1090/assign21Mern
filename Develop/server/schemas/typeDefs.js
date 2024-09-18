
const typeDefs = `
  type Book {
    bookId: ID
    title: String
    author: [String]
    description: String
    image: String
    link: String
  }

  type User {
    username: String
    password: String
    email: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
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

  type Mutation {
    saveBook(data: BookInput): User
    deleteBook(id: ID): User
    login(username: String, email: String): Auth
    addUser(username: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
