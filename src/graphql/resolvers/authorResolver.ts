import {
  Resolver,
  Query,
  Arg,
  Mutation,
  Field,
  Int,
  InputType,
  FieldResolver,
  Root,
} from 'type-graphql';
import Authors, { Author } from '../../models/author';

@InputType()
class NewAuthorInput implements Partial<Author> {
  @Field()
  name: string;

  @Field()
  country: string;

  @Field()
  bornYear: number;
}

@Resolver()
export class AuthorResolver {
  @Query(() => [Author], { nullable: true })
  async authors(): Promise<Author[]> {
    const authors = await Authors.find();
    return authors;
  }

  @Query(() => Author, { nullable: true })
  async bookById(@Arg('id') id: string): Promise<Author | null> {
    const author = await Authors.findById(id);
    return author;
  }

  @Mutation(() => Author, { nullable: true })
  async addBook(@Arg('input') input: NewAuthorInput): Promise<Author> {
    const author = await Authors.create(input);
    return author;
  }
}
