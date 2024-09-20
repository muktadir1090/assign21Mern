const { TokenExpiredError } = require('jsonwebtoken');
const { deleteBook } = require('../controllers/user-controller');
const { Class, User } = require('../models');

const resolvers = {
  Query: {
   
  },

  Mutation: {
    saveBook: async (parent, { data }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: data } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addUser: async (parent, { data }, context) => {
      // Logic to add a new user
      const newUser = new User(data);
      await newUser.save();
      return newUser;
    },

    login: async (parent, { data }, context) => {
      // Logic for login (you may need to implement JWT tokens or session management here)
      const user = await User.findOne({ email: data.email });
      if (!user) {
        throw new AuthenticationError('User not found');
      }
      // Assume some logic for password validation
      return       
        user;
    },

    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        if (!updatedUser) {
          throw new Error("Couldn't find user with this ID");
        }
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;