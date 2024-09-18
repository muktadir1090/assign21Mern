const { deleteBook } = require('../controllers/user-controller');
const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },
  }
};


Mutation: {
  saveBook: async (parent, { data }, context) => {
    // Create and return the new School object
    
       if (context.user){     
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: data } },
          { new: true, runValidators: true }
        );
        return updatedUser;
         }},
  },


{
  addUser: async (parent, { name, location, studentCount }) => {
    // Create and return the new School object
    return await School.create({ name, location, studentCount });
  },
},

{
  login: async (parent, { name, location, studentCount }) => {
    // Create and return the new School object
    return await School.create({ name, location, studentCount });
  },
},

};{
  deleteBook: async (parent, { name, location, studentCount }) => {
    // Create and return the new School object
    return await School.create({ name, location, studentCount });
  },
},

module.exports = resolvers;
