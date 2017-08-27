import {
  GraphQLInt, 
  GraphQLNonNull, 
  GraphQLString 
} from 'graphql';

import Db from '../../../models';
import User from '../../types/user';

export default {
  type: User,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(_, args) {
    const { id, email, firstName, lastName } = args;
    return Db.User.findById(id)
      .then(userToUpdate => {
        const updatedUser = {
          id,
          email,
          firstName,
          lastName,
        }
        return userToUpdate.update(updatedUser);
      });
  }
}
