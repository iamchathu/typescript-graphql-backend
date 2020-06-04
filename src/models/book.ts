import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { ObjectType, Field, Int, ID } from 'type-graphql';

@modelOptions({ schemaOptions: { timestamps: true } })
@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  @prop({ index: true })
  isbn: string;

  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  author: string;

  @Field(() => Int)
  @prop()
  year: number;

  @Field()
  createdAt: Date;
}

export default getModelForClass(Book);
