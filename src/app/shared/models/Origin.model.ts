import { IEntity } from "../interfaces/IEntity.interface";
import { IGeo } from "../interfaces/IGeo.interface";

export class Origin implements IEntity, IGeo {

  constructor(
    public id = 0,
    public name = '',
    public url = '',
    public created = '',
    public type = '',
    public dimension = '',
    public residents = []) { }

}
