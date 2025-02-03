import { Form } from 'react-router';
import type { Route } from '../+types/root';
import db from 'db';
import { usersTable } from 'db/schema';
import { eq } from 'drizzle-orm';

export function meta() {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

// export async function loader() {
//   const users = await db.select().from(usersTable).where(eq(usersTable.email, 'Alice@google.com')).limit(1).execute();
//   return users;
// }

export async function clientLoader() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { users: [{ id: 1, name: 'Alice', email: 'Alice@google.com' }] };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

// export default function Home() {
//   const users = useLoaderData<typeof loader>();

//   return (
//     <main className='flex items-center justify-center pt-16 pb-4'>
//       {users.map((user) => (
//         <div key={user.id}>
//           <h1>{user.name}</h1>
//           <p>{user.email}</p>
//         </div>
//       ))}
//       <Form method='post' className='flex flex-col'>
//         <input type='text' name='name' />
//         <button type='submit'>Submit</button>
//       </Form>
//     </main>
//   );
// }

export default function Home({ loaderData }: Route.ComponentProps) {
  const { users } = loaderData as unknown as { users: { id: number; name: string; email: string }[] };

  return (
    <main className='flex items-center justify-center pt-16 pb-4'>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
      <Form method='post' className='flex flex-col'>
        <input type='text' name='name' />
        <button type='submit'>Submit</button>
      </Form>
    </main>
  );
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  await db.update(usersTable).set({ name }).where(eq(usersTable.email, 'Alice@google.com'));
  const users = await db.select().from(usersTable).where(eq(usersTable.email, 'Alice@google.com')).limit(1).execute();
  return users;
}
