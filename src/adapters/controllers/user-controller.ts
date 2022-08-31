import { inject, injectable } from 'tsyringe';
import { UserRegisterInputData } from '../../use-cases/user/register/user-register-input-data';
import { UserRegisterInputPort } from '../../use-cases/user/register/user-register-input-port';

@injectable()
export default class UserController {
  readonly #registerInputPort;

  constructor(
    @inject('UserRegisterInputPort') registerInputPort: UserRegisterInputPort
  ) {
    this.#registerInputPort = registerInputPort;
  }

  register(name: string) {
    const inputData: UserRegisterInputData = { name };
    return this.#registerInputPort.handle(inputData);
  }
}
