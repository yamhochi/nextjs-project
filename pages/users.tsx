// pages/users.tsx

import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

// Import the generated Lists API and types from Keystone
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

type User = {
  name: string;
  email: string;
//   slug: string;
};

// Home receives a `posts` prop from `getStaticProps` below
export default function Members({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <main style={{ margin: '3rem' }}>
        <h1>Members 👋🏻 </h1>
        <ul>
          {/* Render each post with a link to the content page */}
          {users.map(user => (
            <li key={user.email}>
              {/* <Link href={`/post/${post.slug}`}> */}
                <p>{user.name}</p>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

// Here we use the Lists API to load all the users we want to display
// The return of this function is provided to the `Members` component
export async function getStaticProps() {
  const users = await query.User.findMany({ query: 'name email' }) as User[];
  return {
    props: {
      users
    }
  };
}