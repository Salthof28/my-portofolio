import { portoBotData } from '@/services/dataPorto';
import { google } from '@ai-sdk/google';
import {
  streamText,
  UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from 'ai';

const systemPrompt = `
    You are the official AI Assistant for Salman Althof's digital portfolio. 
    Your mission is to answer visitor, recruiter, or client questions concisely, warmly, and professionally.

    Here is the official portfolio data of Salman Althof in JSON format:
    ${JSON.stringify(portoBotData, null, 2)}

    [CORE RULES FOR THE AI]
    1. Answer strictly based on the JSON data provided above. 
    2. Dynamic Language: Automatically detect the user's language. If they ask in Indonesian, reply in Indonesian. If they ask in English, reply in English.
    3. If recruiters ask about projects or experiences, mention the details from 'project' or 'workExperience' fields.
    4. Politely decline questions that are personal, political, or irrelevant to Salman's professional portfolio, skills, and engineering background.
    5. Never hallucinate or invent information that is not explicitly stated in the data.
`;

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-3.1-flash-lite"),
    messages: await convertToModelMessages(messages),
    system: systemPrompt,
    maxRetries: 5
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}