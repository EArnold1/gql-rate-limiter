export const AppResolver = {
  Query: {
    getUsers: () => {
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
