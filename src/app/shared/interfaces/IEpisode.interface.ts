import { IEntity } from "./IEntity.interface";

export interface IEpisode extends IEntity {
  air_date: string;
  episode: string;
  characters: Array<string>;
}
