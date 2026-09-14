import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const body = JSON.stringify({
    "m.homeserver": {
      "base_url": "https://matrix.sasso.dev"
    }
  });

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};