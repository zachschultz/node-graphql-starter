import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

import Db from '../../../models';
import Post from '../../types/post';

export default {
  type: Post,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  },
  resolve(_, args) {
    const { id } = args;

    return Db.Post.findById(id)
      .then(post => {
        return post.destroy().then(() => post);
      });
  }
}
