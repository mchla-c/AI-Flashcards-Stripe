import { NextRequest, NextResponse } from "next/server";
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
//require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemPrompt = `
  You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
  The front should be a question and the back should be the answer to the question. Both front and back should be one sentence long.
  You should return in the following JSON format:
  {
      "flashcards": [
          {
          "front": "Front of the card",
          "back": "Back of the card"
          }
      ]
  }`;

async function runChat(userInput) {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });
    const data = await req.text()

    const generationConfig = {
        responseMimeType: "application/json",
        maxOutputTokens: 5000,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = await model.generateContent({
        generationConfig,
        safetySettings,
        contents: [
            { role: 'system', parts: [{text: systemPrompt}] },
            { role: 'user', parts: [{text: data}]},
        ],
    });

    // Parse the response to extract flashcards
    const flashcards = JSON.parse(chat.response.text());
    return flashcards.flashcards;
}

export async function POST(req) {
    // try {
    //     const { userInput } = await req.json();

    //     if (!userInput) {
    //         return NextResponse.json({ error: 'Invalid Request Body' }, { status: 400 });
    //     }

    //     const flashcards = await runChat(userInput);
    //     return NextResponse.json(flashcards);

    // } catch (error) {
    //     console.error('Error in chat endpoint:', error);
    //     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    // }

    const data = await req.text()

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        responseMimeType: "application/json",
    });

    const result = await model.generateContent({
        contents: [
            { role: 'model', parts: [{text: systemPrompt}] },
            { role: 'user', parts: [{text: data}]},
        ],
    });

    const flashcards = JSON.parse(result.response.text())
    return NextResponse.json(flashcards.flashcards)
}
