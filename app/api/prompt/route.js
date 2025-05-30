import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (requests) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("failed to get prompts", { status: 500 });
  }
};
