import { serve } from '@hono/node-server';
import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

// We must chain to be able to use the type-safe testing client
const app = new Hono()
  // 1. Chain the CORS middleware
  .use(
    '/api/*',
    cors({
      origin: process.env.WEB_BASE_URL ?? 'http://localhost:3000',
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      maxAge: 600,
    }),
  )
  // 2. Chain your GET route
  .get('/api/test', (c) => {
    console.log('Received a request at /api/test');
    return c.json({
      message: 'Hello from your Hono.js backend! 👋',
      timestamp: new Date().toISOString(),
    });
  });

if (process.env.NODE_ENV !== 'test') {
  const port = Number(process.env.PORT) || 8000;
  console.log(`✅ Hono server is running on http://localhost:${port}`);
  serve({
    fetch: app.fetch,
    port,
  });
}

// Export the app instance for testing
export default app;
