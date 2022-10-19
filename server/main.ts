import express, { Express, Request, Response } from 'express';
import pg from 'pg';
const connectionString = 'postgresql://local:local@localhost:5432/interview';

const client = new pg.Client({ connectionString });

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', async (req: Request, res: Response) => {
  const result = await client.query('SELECT $1::text as message', [
    'Hello world!',
  ]);
  res.send(`Express + TypeScript Server: ${result.rows[0].message}`);
});

app.listen(port, async () => {
  await client.connect();
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

process.on('SIGINT', async () => client.end());
process.on('SIGTERM', async () => client.end());
