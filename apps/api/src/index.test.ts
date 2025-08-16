import app from '@/index.js';
import { testClient } from 'hono/testing';

describe('API Routes', () => {
  it('GET /api/test should return a welcome message', async () => {
    const client = testClient(app);

    const res = await client.api.test.$get();

    expect(res.status).toBe(200);

    const body = await res.json();
    expect(body.message).toBe('Hello from your Hono.js backend! 👋');
    expect(body).toHaveProperty('timestamp');
  });
});
