#! /usr/bin/env node

import ConsoleUi from './ui/console-ui';
import ConsoleUserCreatePresenter from './interface-adapters/presenters/user/console-user-create-presenter';
import { PackageData } from './ui/package-data';
import SQLiteUserRepository from './db/sqlite-user-repository';
import UserCreateInteractor from './use-cases/user/create/user-create-interactor';
import UserController from './interface-adapters/controllers/user-controller';
import { UserRepository } from './use-cases/user/user-repository';

const packageData: PackageData = require('../package.json');

function initInstances() {
  // Inject dependencies
  const userRepository: UserRepository = new SQLiteUserRepository;
  const userAddInteractor = new UserCreateInteractor(userRepository, new ConsoleUserCreatePresenter);
  const userController = new UserController(userAddInteractor);
  const consoleUi = new ConsoleUi(packageData, userController);
  return { consoleUi, userRepository };
}

async function main() {
  const { consoleUi, userRepository } = initInstances();
  await consoleUi.handle();

  userRepository.close();
}

main();
