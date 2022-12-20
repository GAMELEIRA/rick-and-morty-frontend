import { Character } from './Character';
import { Info } from "./Info";

export class Response {
  public info!: Info;
  public results!: Array<Character>
}
