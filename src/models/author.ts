import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { ObjectType, Field, Int, ID } from 'type-graphql';

@modelOptions({ schemaOptions: { timestamps: true } })
@ObjectType()
export class Author {
  @Field(() => ID)
  id: string;

  @Field()
  @prop()
  name: string;

  @Field()
  @prop()
  country: string;

  @Field(() => Int)
  @prop()
  birthYear: number;

  @Field()
  createdAt: Date;
}

const Authors = getModelForClass(Author);

export default Authors;
