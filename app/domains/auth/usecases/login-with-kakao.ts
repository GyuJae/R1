import { singleton } from 'tsyringe';

@singleton()
export class LoginWithKaKao {
  login(): boolean {
    // TODO: Implement
    console.log('Login with KaKao');
    return true;
  }
}
