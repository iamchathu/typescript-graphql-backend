import {
  Resolver,
  Query,
  Arg,
  Mutation,
  Field,
  Int,
  InputType,
} from 'type-graphql';
import Books, { Book } from '../types/book';

@InputType()
class NewBookInput implements Partial<Book> {
  @Field()
  isbn: string;

  @Field()
  name: string;

  @Field(() => Int)
  year: number;

  @Field()
  author: string;
}

@Resolver()
export class BookResolver {
  @Query(() => [Book], { nullable: true })
  async books(): Promise<Book[]> {
    const books = await Books.find();
    return books;
  }

  @Query(() => Book, { nullable: true })
  async bookById(@Arg('id') id: string): Promise<Book | null> {
    const book = await Books.findById(id);
    return book;
  }

  @Mutation(() => Book, { nullable: true })
  async addBook(@Arg('input') input: NewBookInput): Promise<Book> {
    const book = await Books.create(input);
    return book;
  }
}
