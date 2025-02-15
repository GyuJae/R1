import { singleton } from 'tsyringe';

@singleton()
export class LoginWithApple {
  login(): boolean {
    // TODO: Implement
    console.log('Login with Apple');
    return true;
  }
}
