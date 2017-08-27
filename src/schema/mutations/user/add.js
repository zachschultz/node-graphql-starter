import {
  GraphQLNonNull, 
  GraphQLString 
} from 'graphql';

import Db from '../../../models';
import User from '../../types/user';

export default {
  type: User,
  args: {
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
    const { email, firstName, lastName } = args;
    return Db.User.create({ email, firstName, lastName });
  }
}
