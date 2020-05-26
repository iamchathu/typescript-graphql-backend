import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true } })
class Book {
  @prop({ index: true })
  isbn: string;

  @prop()
  name: string;

  @prop()
  author: string;

  @prop()
  year: number;
}

export default getModelForClass(Book);
