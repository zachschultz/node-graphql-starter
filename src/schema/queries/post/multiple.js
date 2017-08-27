import { GraphQLList } from 'graphql';

import Db from '../../../models';
import Post from '../../types/post';

export default {
  type: new GraphQLList(Post),
  resolve(root, args) {
    return Db.Post.findAll({ where: args });
  }
}
