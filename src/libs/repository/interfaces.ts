export interface FindOneById<Entity> {
  findOneById(id: string): Promise<Entity>;
}

export interface Insert<Entity> {
  insert(entity: Entity): Promise<void>;
}

export interface Update<Entity> {
  update(entity: Entity): Promise<Entity>;
}

export interface Delete<Entity> {
  delete(entity: Entity): Promise<void>;
}
