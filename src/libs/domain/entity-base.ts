export abstract class EntityBase<Props> {
  constructor(private _props: Props) {}

  get props(): Props {
    return Object.freeze(this._props);
  }
}
