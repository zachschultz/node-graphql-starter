import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-custom-types';

import Db from '../../models';
import User from './user';

export default new GraphQLObjectType({
  name: 'Post',
  description: 'This represents a Post',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(post) {
          return post.id;
        }
      },
      title: {
        type: GraphQLString,
        resolve(post) {
          return post.title;
        }
      },
      content: {
        type: GraphQLString,
        resolve(post) {
          return post.content;
        }
      },
      creator: {
        type: User,
        resolve(post) {
          return post.getUser();
        }
      },
      createdAt: {
        type: GraphQLDateTime,
        resolve(post) {
          return post.createdAt;
        }
      }
    }
  }
});
