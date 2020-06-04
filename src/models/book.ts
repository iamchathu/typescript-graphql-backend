import {
  prop,
  getModelForClass,
  modelOptions,
  Ref,
} from '@typegoose/typegoose';
import { ObjectType, Field, Int, ID, FieldResolver } from 'type-graphql';
import { Author } from './author';

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

  @prop({ ref: Author })
  authorId: Ref<Author>;

  @Field(() => Int)
  @prop()
  year: number;

  @Field()
  createdAt: Date;
}

const Books = getModelForClass(Book);

export default Books;
