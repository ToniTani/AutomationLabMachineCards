export class Cardmodel {

  constructor(deviceCode: string, versio: string,
              deviceName: string, bootUp: string, article: string, mac: string, profinetIP: string,
              subnet: string, routerIP: string, profibus: string, asi: string, mpi: string,
              counterIn: string, counterOut: string, isActive: string, workplace: string) {

    // this.workplaceId = workplaceId;
    // this.id = id;
    this.deviceCode = deviceCode;
    this.versio = versio;
    this.deviceName = deviceName;
    this.bootUp = bootUp;
    this.article = article;
    this.mac = mac;
    this.profinetIP = profinetIP;
    this.subnet = subnet;
    this.routerIP = routerIP;
    this.profibus = profibus;
    this.asi = asi;
    this.mpi = mpi;
    this.counterIn = counterIn;
    this.counterOut = counterOut;
    this.isActive = isActive;
    this.workplace = workplace;
  }

 // public workplaceId: number;
 // public id: number;
  public deviceCode: string;
  public versio: string;
  public deviceName: string;
  public bootUp: string;
  public article: string;
  public mac: string;
  public profinetIP: string;
  public subnet: string;
  public routerIP: string;
  public profibus: string;
  public asi: string;
  public mpi: string;
  public counterIn: string;
  public counterOut: string;
  public isActive: string;
  public workplace: string;
}
