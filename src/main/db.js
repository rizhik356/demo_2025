import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: '5432',
    database: 'demo_2025',
  });

  await client.connect();
  return client;
};
