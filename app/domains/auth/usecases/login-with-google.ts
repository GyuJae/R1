import { singleton } from 'tsyringe';

@singleton()
export class LoginWithGoogle {
  login(): boolean {
    // TODO: Implement
    console.log('Login with Google');
    return true;
  }
}
