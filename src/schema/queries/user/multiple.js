import { GraphQLList } from 'graphql';

import Db from '../../../models';
import User from '../../types/user';

export default {
  type: new GraphQLList(User),
  resolve(root, args) {
    return Db.User.findAll({ where: args });
  }
};
