import { TokenBucket } from '../services/rate-limiter';
import { Resolvers } from './types/graphql';

// 5 requests in 10 minutes, at a refill rate of 1
const rateLimiter = new TokenBucket(5, 1, 10 * 60 * 1000);

export const AppResolver: Resolvers = {
  Query: {
    getUsers: () => {
      rateLimiter.rateLimiter();
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
