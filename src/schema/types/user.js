import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { GraphQLDateTime } from 'graphql-custom-types';

import Post from './post';

export default new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(user) {
          return user.id;
        }
      },
      email: {
        type: GraphQLString,
        resolve(user) {
          return user.email;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(user) {
          return user.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(user) {
          return user.lastName;
        }
      },
      posts: {
        type: new GraphQLList(Post),
        resolve(user) {
          return user.getPosts();
        }
      },
      createdAt: {
        type: GraphQLDateTime,
        resolve(user) {
          return user.createdAt;
        }
      }
    }
  }
});
