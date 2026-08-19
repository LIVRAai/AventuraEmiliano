const MODEL = process.env.OPENAI_MODEL || 'gpt-5.6-luna';

export async function GET() {
  return Response.json({
    ok: true,
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
    model: MODEL
  });
}
