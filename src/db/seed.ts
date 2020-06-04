import setupDatabase from '../config/mongoose';
import mongoose from '../config/mongoose';
import Books from '../models/book';
import Authors from '../models/author';

const authors = [
  {
    name: 'J.K. Rowling',
    country: 'Great Britain',
    birthYear: '1965',
  },
  {
    name: 'Dan Brown',
    country: 'United States of America',
    birthYear: '1964',
  },
];

const books = {
  'J.K. Rowling': [
    {
      isbn: '9789602744017',
      name: 'Harry Potter and the Chamber of Secrets',
      year: 1998,
    },
    {
      isbn: '9780345370778',
      name: `Harry Potter and the Philosopher's Stone`,
      year: 1997,
    },
    {
      isbn: '9788475968421',
      name: 'Fantastic Beasts and Where to Find Them',
      year: 2001,
    },
  ],
  'Dan Brown': [
    {
      isbn: '9780671027360',
      name: 'Angles and demons',
      year: 2000,
    },
    {
      isbn: '9781400079179',
      name: 'The Da Vinci Code',
      year: 2003,
    },
  ],
};

const runSeeds = async () => {
  try {
    await mongoose();
    const documentCount = await Authors.countDocuments();
    if (documentCount === 0) {
      for await (let author of authors) {
        const newAuthor = await Authors.create(author);
        for await (let book of books[
          `${author.name}` as 'J.K. Rowling' | 'Dan Brown'
        ]) {
          await Books.create({
            ...book,
            authorId: newAuthor.id,
          });
        }
      }
      console.log('Seed complete');
    } else {
      console.error(`Seed didn't run. Author collection is not empty!`);
    }
  } catch (err) {
    console.error('Seeding error!', err);
  }
  process.exit(0);
};

runSeeds();
