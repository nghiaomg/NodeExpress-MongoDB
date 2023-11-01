import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import requestIp from 'request-ip';
import dotenv from 'dotenv';

import { Request, Response, NextFunction } from 'express';
import indexRoute from './app/routes/index.route';

dotenv.config();
const port = parseInt(process.env.PORT || '3000', 10);
const base_url = process.env.BASE_URL || 'http://localhost';

const app = express();

app.use(express.json());
app.use(requestIp.mw());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));
app.set('trust proxy', true);

const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};

app.use(allowCrossDomain);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(indexRoute)

app.listen(port, () => {
  console.log(`Hi Bro! We are running in ${base_url}:${port}`);
});
