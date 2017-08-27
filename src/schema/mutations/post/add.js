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
    userId: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(_, args) {
    const {
      userId,
      title,
      content,
    } = args;

    return Db.User.findById(userId)
      .then(user => {
        return user.createPost({
          title,
          content,
          UserId: 1,
        });
      });
  }
}
