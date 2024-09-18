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



{
  addUser: async (parent, { data }, context) => {
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
  login: async (parent, { data }, context) => {
    // Create and return the new School object
    
       if (context.user){     
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: data } },
          { new: true, runValidators: true }
        );
        return updatedUser;
         }},
}

};


  deleteBook: async (parent, { data }, context) => {
    // Create and return the new School object
    
       if (context.user){     
         {
          const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedBooks: { bookId: params.bookId } } },
            { new: true }
          );
          if (!updatedUser) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
          }
          return (updatedUser);
        
         }},
},

module.exports = resolvers;
