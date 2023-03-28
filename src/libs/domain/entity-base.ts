export interface BaseEntityProps {
  createdAt: Date;
  updatedAt: Date;
}

export abstract class EntityBase<Props> {
  private _props: Props;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(props: Props, baseProps?: BaseEntityProps) {
    this._props = this.getValidatedProps(props);

    const now = new Date();

    this._createdAt = baseProps?.createdAt ?? now;
    this._updatedAt = baseProps?.updatedAt ?? now;
  }

  abstract getValidatedProps(props: Props): Props;

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  protected set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt;
  }

  get props(): Props {
    return Object.freeze(this._props);
  }

  get object(): Props & BaseEntityProps {
    return Object.freeze({
      ...this._props,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    });
  }
}
