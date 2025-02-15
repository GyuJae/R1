import { Link } from 'react-router';

export default function Home() {
  return (
    <main className='flex items-center justify-center pt-16 pb-4'>
      <Link to='/auth' className='text-blue-500'>
        로그인 하러 가기
      </Link>
    </main>
  );
}
