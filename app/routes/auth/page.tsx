import { useContext } from 'react';
import { LoginContext } from './contexts/login.context';
import { AuthNavigateContext } from './contexts/auth-navigate.context';

export default function AuthPage() {
  const LOGIN_CONTEXT = useContext(LoginContext);
  const AUTH_NAVIGATE_CONTEXT = useContext(AuthNavigateContext);

  // TODO react query 추가
  const onSuccessLogin = () => AUTH_NAVIGATE_CONTEXT.goAlbum();

  return (
    <main>
      <ul>
        <li>
          <button
            type='button'
            onClick={() => {
              LOGIN_CONTEXT.google.login();
              onSuccessLogin();
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
              onSuccessLogin();
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
              onSuccessLogin();
            }}
          >
            카카오 로그인
          </button>
        </li>
      </ul>
    </main>
  );
}
