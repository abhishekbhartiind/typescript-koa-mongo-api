import { sign } from 'jsonwebtoken';
require('dotenv').config();

const PW: string = process.env.TOKEN_PW || 'wYygGcBfpQdp3xEo2yW1Fh4820Ah67';

const generateToken = (data: Object) => {
  const token: string = sign({ data }, PW);
  return token;
};

export { generateToken };
