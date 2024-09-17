import {test} from "./getCredentials"
import {OPENAI_API_KEY} from "./getCredentials"
export default function getInfo(imageURL: string | undefined) {
    if (imageURL === undefined) return;
    const info = "{\"calories\": 1000, \"proteins\": 234, \"carbohydrates\": 200, \"fats\": 30}";
    const infoJSONObject = JSON.parse(info);
    console.log(infoJSONObject);
    return infoJSONObject;
}

/*
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

const instruction = "In this photo it's supposed to be food." +
    "Return a string JSON of the following format:" +
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