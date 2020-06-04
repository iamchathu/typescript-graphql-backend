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
import Books, { Book } from '../../models/book';
import Authors, { Author } from '../../models/author';

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

@Resolver(() => Book)
export class BookResolver {
  @FieldResolver(() => Author)
  async author(@Root() book: any) {
    const author = await Authors.findById(book.authorId);
    return author;
  }

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
