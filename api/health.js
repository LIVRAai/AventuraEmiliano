const MODEL = process.env.OPENAI_MODEL || 'gpt-5.6-luna';

export async function GET() {
  return new Response(JSON.stringify({
    ok: true,
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
    model: MODEL,
    version: '5.0.0'
  }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}
