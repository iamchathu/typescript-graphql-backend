import setupDatabase from '../config/mongoose';
import mongoose from '../config/mongoose';
import Books from '../graphql/types/book';

const books = [
  {
    isbn: '9789602744017',
    name: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    year: 1998,
  },
  {
    isbn: '9780345370778',
    name: 'Jurassic Park',
    author: 'Michael Crichton',
    year: 1990,
  },
  {
    isbn: '9781400079179',
    name: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
  },
];

const runSeeds = async () => {
  try {
    await mongoose();
    const documentCount = await Books.countDocuments();
    if (documentCount === 0) {
      for await (let book of books) {
        await Books.create(book);
      }
      console.log('Seed complete');
    } else {
      console.error(`Seed didn't run. Books collection is not empty!`);
    }
    process.exit(0);
  } catch (err) {
    console.error('Seeding error!');
  }
};

runSeeds();
