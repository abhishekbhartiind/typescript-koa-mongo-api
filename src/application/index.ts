import { connect } from 'mongoose';
require('dotenv').config();

export const dbConnection = () => {
  const URI: string =
    process.env.MONGO_URI || `mongodb://localhost/koa_default`;

  const options = {
    autoIndex: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  };

  return connect(URI, options);
};
