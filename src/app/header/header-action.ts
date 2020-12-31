export class HeaderAction {
  action: any;
  icon: string;

  constructor(action: any, icon: string) {
    this.action = action;
    this.icon = icon;
  }

  runAction(): void {
    this.action();
  }
}
