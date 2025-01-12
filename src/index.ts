import express, { Express, Request, Response, NextFunction } from 'express';
// import dotenv from 'dotenv';
import moviesRoutesV1 from './routes/v1/movieRoutes.js';

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware for parsing json
app.use(express.json());

// Connect route
app.use('/api/v1', moviesRoutesV1);


// Simple test
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

// Global handler error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Global Error Handler:', err.stack);

    res.status(500).json({
        message: 'Something went wrong',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error',
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
