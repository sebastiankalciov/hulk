import {test} from "./getCredentials"
import {OPENAI_API_KEY} from "./getCredentials"
export default function getInfo() {
    console.log(test);

}

/*
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

const instruction = "In this photo it's supposed to be food." +
    "Return a string JSON on the following format:" +
    "{'calories': 'number of calories the food has', 'proteins': 'how many proteins the food has'," +
    "'carbohydrates': 'how many carbohydrates the food has" +
    "'fats': 'how many fats the food has}"
export async function getInfo(imageURL: string) {
    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: instruction },
                    {
                        type: "image_url",
                        image_url: {
                            "url": imageURL
                        },
                    }
                ],
            },
        ],
    });
    console.log(response.choices[0]);
    return response.choices[0];
}

 */