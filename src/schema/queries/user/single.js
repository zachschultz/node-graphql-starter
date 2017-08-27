import {
  GraphQLNonNull,
  GraphQLInt
} from 'graphql';

import Db from '../../../models';
import User from '../../types/user';

export default {
  type: User,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  },
  resolve(root, args, req) {
    const { id } = args;
    return Db.User.findById(id);
  }
};
