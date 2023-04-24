import { IGeo } from '../interfaces/IGeo.interface';
import { IEntity } from '../interfaces/IEntity.interface';

export class Location implements IEntity, IGeo {

  constructor(
    public id = 0,
    public name = '',
    public url = '',
    public created = '',
    public type = '',
    public dimension = '',
    public residents = []
  ) { }

}
