import React from "react";

const Form = ({ type, post, submitting, setPost, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post </span>
      </h1>
      <p className="desc text-left ">
        {type} and share amazing prompts with the world and let your imagination
        run wild with any AI-powered platform.
      </p>
      <form className="mt-5 glassmorphism flex max-w-full w-full flex-col">
        <label>
          <span className="text-gray-700 font-satoshi font-semibold text-base">
            Your AI Prompt
          </span>
        </label>
        <input
          className="mt-8 box-border w-full h-40 text-center"
          placeholder="Write Your Prompt....."
        ></input>
      </form>
    </section>
  );
};

export default Form;
