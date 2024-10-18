import {OPENAI_API_KEY} from "./getCredentials";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

const instruction = "In this photo it's supposed to be food." +
    "Return a string JSON (without the code block, pure string) of the following format:" +
    "{\"calories\": 'number of calories the food has', \"proteins\": 'how many proteins the food has'," +
    "\"carbohydrates\": 'how many carbohydrates the food has'" +
    "\"fats\": 'how many fats the food has'}" +
    "If the photo is not of a meal, or is it unclear, return null"
export async function getInfo(imageURL: string | undefined) {
    if (imageURL === undefined) return;

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
    const info = response.choices[0].message.content;
    if (info == null || info == "null") return null;

    const infoJSONObject = JSON.parse(info);

    return infoJSONObject;

}

