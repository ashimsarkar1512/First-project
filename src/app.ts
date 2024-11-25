import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoute);

const getAController = (req: Request, res: Response) => {
  const a = 20;
  res.send(a);
};

app.get('/', getAController);

export default app;
