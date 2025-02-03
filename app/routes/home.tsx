import { Form, useLoaderData } from 'react-router';
import type { Route } from '../+types/root';
import { container } from 'tsyringe';
import { UserQueryRepository } from '~/domains/user/user-query-repository';
import { UserRepository } from '~/domains/user/user-repository';

const USER_QUERY_REPOSITORY = container.resolve(UserQueryRepository);
const USER_REPOSITORY = container.resolve(UserRepository);

export function meta() {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function loader() {
  return await USER_QUERY_REPOSITORY.findAll();
}

export default function Home() {
  const users = useLoaderData<typeof loader>();

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
  await USER_REPOSITORY.updateName("Alice@google.com", name);
}
