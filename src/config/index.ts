import dotenv from 'dotenv';

dotenv.config();

const config = {
  database: {
    uri:
      process.env.MONGO_LAB_URL ||
      process.env.MONGODB_URI ||
      `mongodb://${process.env.DB_PORT_TCP_ADDR || 'localhost'}/sync-db`,
    options: {
      useNewUrlParser: true,
      keepAlive: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false,
  },
};

export default config;
