
export class Cardmodel {

  constructor(workplaceId: number, name: string, deviceCode: string, versio: string) {
    this.workplaceId = workplaceId;
    this.name = name;
    this.deviceCode = deviceCode;
    this.versio = versio;
  }

  public workplaceId: number;
  public name: string;
  public deviceCode: string;
  public versio: string;


}
