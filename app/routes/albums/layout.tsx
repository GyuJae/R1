import { Outlet } from 'react-router';

export default function AlbumsLayout() {
  return (
    <div>
      <header className='flex justify-between items-center p-4'>
        <h1>R1</h1>
        <nav>
          <ul>
            <li>로그아웃</li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
