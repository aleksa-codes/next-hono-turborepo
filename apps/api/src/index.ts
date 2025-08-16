import { serve } from '@hono/node-server';
import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// IMPORTANT: Add CORS middleware to allow requests from your Next.js frontend
app.use(
  '/api/*',
  cors({
    origin: process.env.WEB_BASE_URL ?? 'http://localhost:3000',
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    maxAge: 600,
  }),
);

// Define a simple test route
app.get('/api/test', (c) => {
  console.log('Received a request at /api/test');
  return c.json({
    message: 'Hello from your Hono.js backend! 👋',
    timestamp: new Date().toISOString(),
  });
});

const port = Number(process.env.PORT) || 8000;
console.log(`✅ Hono server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
