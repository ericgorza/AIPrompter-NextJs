import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET (read)

export const GET = async (request, {params}) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate('creator');

        if(!prompt) {
            return new Response('Promp not found.', {status:404})
        }

        return new Response(JSON.stringify(prompts), {status:200});
    } catch (error){
        return new Response("Failed to fetch the prompt.", {status:500});
    }
}

// PATCH (update it)

export const PATCH = async (request, {params}) => {

    const {prompt, tag} = await request.json();

    try {
        await connectToDB();

        const existingPrompt = await prompt.findById(params.id);
        if(!existingPrompt){
            return new Response('Prompt not found!', {status:404})
        }

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save()

        return new Response(JSON.stringify(existingPrompt), {status:200})

    } catch(error){
        return new Response('Failed to update the prompt.', {status:500})
    }
}

//DELETE (delete it)

export const DELETE = async (request, {params}) => {

    const {prompt, tag} = await request.json()

    try {
        await connectToDB();

        await Prompt.findByIdAndDelete(params.id)

        return new Response('Prompt deleted.', {status:200})

    } catch(error){
        return new Response('Failed to delete the prompt', {status:500})
    }
}