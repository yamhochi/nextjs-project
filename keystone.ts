// keystone.ts

import { config, list } from '@keystone-6/core';
import { text, relationship } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';

// const Post: Lists.Post = list({
//   fields: {
//     title: text({ validation: { isRequired: true } }),
//     slug: text({ isIndexed: 'unique', isFilterable: true }),
//     content: text(),
//     author: relationship({ ref: 'User.posts' }),
//   },
// });


// const User: Lists.User= list({
//   fields: {
//     name: text({ validation: { isRequired: true } }),
//     email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
//     posts: relationship({ ref: 'Post.author', many: true }),
//   },
// });


const lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
  }),

  Post: list({
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ isIndexed: 'unique', isFilterable: true }),
      content: text(),
      author: relationship({ ref: 'User.posts' }),
    },
  }),
};

export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  // lists: { Post, User },
  lists
});