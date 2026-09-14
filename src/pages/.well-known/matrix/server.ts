import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const body = JSON.stringify({
    "m.server": "matrix.sasso.dev:443"
  });

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};