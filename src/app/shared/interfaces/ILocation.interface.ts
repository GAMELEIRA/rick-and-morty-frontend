import { IEntity } from "./IEntity.interface";

export interface ILocation extends IEntity {
  type: string;
  dimension: string;
  residents: Array<string>;
}
