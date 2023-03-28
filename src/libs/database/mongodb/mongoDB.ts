import { Db, MongoClient, MongoClientOptions } from 'mongodb';
import { DatabaseError } from '../../errors';

export class MongoDB {
  private client: MongoClient;
  private db: Db | null;

  constructor(url: string, option?: MongoClientOptions) {
    this.client = new MongoClient(url, option);
    this.db = null;
  }

  public async connect(): Promise<Db> {
    if (!this.db) {
      try {
        this.client = await this.client.connect();
        this.db = this.client.db();
      } catch (error) {
        throw new DatabaseError('MongoDb connection failed', {}, error);
      }
    }

    return this.db;
  }
}
