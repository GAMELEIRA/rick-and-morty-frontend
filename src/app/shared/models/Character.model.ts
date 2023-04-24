import { IEntity } from "../interfaces/IEntity.interface";
import { INameUrl } from "../interfaces/INameUrl.interface";

export class Character implements IEntity {

  constructor (
  public id = 0,
  public name = '',
  public url = '',
  public created = '',
  public status = '',
  public species = '',
  public type = '',
  public gender = '',
  public origin: INameUrl = {
    name: '',
    url: ''
  },
  public location: INameUrl = {
    name: '',
    url: ''
  },
  public image = '',
  public episode = []) {}

}
