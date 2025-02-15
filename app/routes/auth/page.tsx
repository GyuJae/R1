import { useContext } from 'react';
import { LoginContext } from './contexts/login.context';

export default function AuthPage() {
  const LOGIN_CONTEXT = useContext(LoginContext);

  return (
    <main>
      <ul>
        <li>
          <button
            type='button'
            onClick={() => {
              LOGIN_CONTEXT.google.login();
            }}
          >
            구글 로그인
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => {
              LOGIN_CONTEXT.apple.login();
            }}
          >
            애플 로그인
          </button>
        </li>
        <li>
          <button
            type='button'
            onClick={() => {
              LOGIN_CONTEXT.kakao.login();
            }}
          >
            카카오 로그인
          </button>
        </li>
      </ul>
    </main>
  );
}
