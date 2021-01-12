import {HeaderAction} from './header-action';

export class HeaderOptions {
  isBackEnabled: boolean;
  actions: HeaderAction[];

  constructor(isBackEnabled: boolean, actions: HeaderAction[]) {
    this.isBackEnabled = isBackEnabled;
    this.actions = actions;
  }
}
