import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from "openai";

export const revalidate = 15
// export const runtime = 'edge'

const configuration = new Configuration({
    organization: "org-dBZwMc0HWJ81GHimawWZctig",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const animal = searchParams.get('animal') || '';

    if (!configuration.apiKey) {
      return NextResponse.json({
        error: {
          message: "OpenAI API key not configured, please follow instructions in README.md",
        }
      })
    }
  
    if (animal.trim().length === 0) {
        return NextResponse.json({
            error: {
            message: "Please enter a valid animal",
            }
        });
    }
  
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(animal),
        temperature: 0.6,
      });

      return NextResponse.json({ result: completion.data.choices[0].text });
    } catch (e) {
        console.log('e', e)
        return NextResponse.json({ err: e.message });
    }
  }

function generatePrompt(animal: string) {
    const capitalizedAnimal =
      animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `Suggest three names for an animal that is a superhero.
  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${capitalizedAnimal}
  Names:`;
}