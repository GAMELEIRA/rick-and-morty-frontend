import { Location } from "./Location";
import { Origin } from "./Origin";

export class Character {
  public id!: number;
  public name!: string;
  public status!: string;
  public species!: string;
  public type!: string;
  public gender!: string;
  public origin!: Origin;
  public location!: Location;
  public image!: string;
  public episode!: Array<string>;
  public url!: string;
  public created!: string;
}
