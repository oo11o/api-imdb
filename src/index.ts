import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
import moviesRoutesV1 from './routes/v1/moviesRoutes.js';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', moviesRoutesV1);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
