import { Resolver, Query, Arg } from 'type-graphql';
import Books, { Book } from '../types/book';

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books(): Promise<Book[]> {
    const books = await Books.find();
    return books;
  }

  @Query(() => Book, { nullable: true })
  async bookById(@Arg('id') id: string): Promise<Book | null> {
    const book = await Books.findById(id);
    return book;
  }
}
