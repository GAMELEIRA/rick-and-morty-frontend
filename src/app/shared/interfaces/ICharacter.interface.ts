import { IEntity } from "./IEntity.interface";
import { INameUrl } from "./INameUrl.interface";

export interface ICharacter extends IEntity {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: INameUrl;
  location: INameUrl;
  image: string;
  episode: Array<string>;
}
