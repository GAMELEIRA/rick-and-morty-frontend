import { IEntity } from "./IEntity.interface";

export interface IEpidose extends IEntity {
  air_date: string;
  episode: string;
  characters: Array<string>;
}
