import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export class DynamoDB {
  constructor(public client: DynamoDBClient) {}
}
