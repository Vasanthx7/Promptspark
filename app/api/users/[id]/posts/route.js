import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (requests, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.findOne({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("failed to get the user profile", { status: 500 });
  }
};
