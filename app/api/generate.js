import { NextRequest, NextResponse } from "next/server";

const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

require('dotenv').config()
  
const systemPrompt = `
  You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
    Both front and back should be one sentence long.
    You should return in the following JSON format:
    {
        "flashcards": [
            {
            "front": "Front of the card",
            "back": "Back of the card"
            }
        ]
    }`;
  
// const result = await model.generateContent(prompt)
//console.log(result.response.text());

async function runChat(userInput) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const generationConfig = {
        responseMimeType: "application/json",
        maxOutputTokens: 5000,
    }

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ]

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        messages: [
            {
                role: 'system', content: systemPrompt
            },
            {
                role: 'user', content: userInput
            },
        ],
    })

    const result = await model.generateContent(prompt)
    const data = result.response.text()

    return data
}

export async function POST(req) {
    try {
        const {userInput} = await req.json()

        if(!userInput) {
            return NextResponse.json({error: 'Invalid Request Body'}, {status: 400})
        }

        const response = await runChat(userInput)
        const flashcards = JSON.parse(response.choices[0].message.content)
        return NextResponse.json(flashcards.flashcards)

    } catch (error) {
        console.error('Error in chat endpoint:', error)
        return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
    }

}