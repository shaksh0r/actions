const request = require('supertest');
const app = require('../src/index');

describe('GET /health', () => {
  it('should return ok', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('POST /sum', () => {
  it('should return sum of two numbers', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 2, b: 3 });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  it('should reject invalid input', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 2, b: 'x' });

    expect(res.statusCode).toBe(400);
  });
});
