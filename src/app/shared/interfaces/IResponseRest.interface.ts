import { ICharacter } from "./ICharacter.interface";
import { IEpisode } from "./IEpisode.interface";
import { IInfo } from "./IInfo.interface";
import { ILocation } from "./ILocation.interface";

export interface IResponseRest {
  info: IInfo;
  results: Array<ICharacter | ILocation | IEpisode>
}
