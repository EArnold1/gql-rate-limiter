import { Resolvers } from './types/graphql';

export const AppResolver: Resolvers = {
  Query: {
    getUsers: (_, args, { req }) => {
      return [
        {
          id: 1,
          name: 'Jesse',
          username: 'Pinkman',
        },
      ];
    },
  },
};
