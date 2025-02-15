import { Outlet, useNavigate } from 'react-router';
import { LoginContext } from './contexts/login.context';
import { container } from 'tsyringe';
import { LoginWithGoogle } from '~/domains/auth/usecases/login-with-google';
import { LoginWithApple } from '~/domains/auth/usecases/login-with-apple';
import { LoginWithKaKao } from '~/domains/auth/usecases/login-with-kakao';
import { AuthNavigateContext } from './contexts/auth-navigate.context';

const LOGIN_WITH_GOOGLE = container.resolve(LoginWithGoogle);
const LOGIN_WITH_APPLE = container.resolve(LoginWithApple);
const LOGIN_WITH_KAKAO = container.resolve(LoginWithKaKao);

export default function AuthLayout() {
  // TODO: 웹뷰 지원
  // TODO: pathname 매직넘버 제거
  const navigate = useNavigate();

  return (
    <LoginContext
      value={{
        google: LOGIN_WITH_GOOGLE,
        apple: LOGIN_WITH_APPLE,
        kakao: LOGIN_WITH_KAKAO,
      }}
    >
      <AuthNavigateContext value={{ goAlbum: () => navigate('/albums') }}>
        <Outlet />
      </AuthNavigateContext>
    </LoginContext>
  );
}
