import ConsoleView from '../../../external/views/console-view';
import { ConsoleViewModel } from '../../view-models/console-view-model';
import { UserCreateOutputBoundary } from '../../../use-cases/user/create/user-create-output-boundary';
import { UserCreateOutputData } from '../../../use-cases/user/create/user-create-output-data';

export default class ConsoleUserCreatePresenter
  implements UserCreateOutputBoundary
{
  // eslint-disable-next-line class-methods-use-this
  present(outputData: UserCreateOutputData) {
    const viewModel: ConsoleViewModel = {
      message: `User “${outputData.name}” has been created with ID ${outputData.id} successfully!`,
    };
    ConsoleView.print(viewModel);
  }
}
