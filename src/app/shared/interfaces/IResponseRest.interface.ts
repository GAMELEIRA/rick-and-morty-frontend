import { Character } from "../models/Character.model";
import { IEpisode } from "./IEpisode.interface";
import { IInfo } from "./IInfo.interface";

export interface IResponseRest {
  info: IInfo;
  results: Array<Character | Location | IEpisode>
}
