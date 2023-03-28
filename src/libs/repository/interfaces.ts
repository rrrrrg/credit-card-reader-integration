import { EntityBase } from '../domain/entity-base';

export interface FindOneById<Entity extends EntityBase<any>> {
  findOneById(id: string): Promise<Entity>;
}

export interface Insert<Entity extends EntityBase<any>> {
  insert(entity: Entity): Promise<void>;
}

export interface Update<Entity extends EntityBase<any>> {
  update(entity: Entity): Promise<Entity>;
}

export interface Delete<Entity extends EntityBase<any>> {
  delete(entity: Entity): Promise<void>;
}
