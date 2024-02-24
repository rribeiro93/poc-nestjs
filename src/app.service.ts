import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Collection, Connection, Types } from 'mongoose';

@Injectable()
export class AppService {

  private readonly COLLECTION = 'investimentos';

  constructor(@InjectConnection('investimentos') private connection: Connection) { }

  getHello(): string {
    return 'Hello World!';
  }

  getConnection(): Collection {
    return this.connection.collection(this.COLLECTION);
  }

  async insertDocument(document: any) {
    return await this.getConnection().insertOne(document);
  }

  async findAllDocuments() {
    return await this.getConnection().find({}).toArray();
  }

  async removeDocument(id: string) {

    if (!Types.ObjectId.isValid(id)) {
      return { message: 'Invalid id' }
    }

    const result = await this.getConnection().deleteOne({ _id: Types.ObjectId.createFromHexString(id) });

    if (result.deletedCount === 0) {
      return { message: 'Document not found' }
    }
  }
}
