import { createContext } from 'react';
import type { LoginWithApple } from '~/domains/auth/usecases/login-with-apple';
import type { LoginWithGoogle } from '~/domains/auth/usecases/login-with-google';
import type { LoginWithKaKao } from '~/domains/auth/usecases/login-with-kakao';

interface ILoginContext {
  google: LoginWithGoogle;
  apple: LoginWithApple;
  kakao: LoginWithKaKao;
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);
