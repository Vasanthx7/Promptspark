import Link from "next/link";
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
      <form
        onSubmit={handleSubmit}
        className="mt-5 glassmorphism flex max-w-2xl w-full flex-col"
      >
        <label>
          <span className="text-gray-700 font-satoshi font-semibold text-base">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            className="form_textarea"
          />
        </label>
        <label>
          <span className="text-gray-700 font-satoshi font-semibold text-base">
            Tag{" "}
            <span className="font-normal">
              (#Product,#webdevelopment,#idea)
            </span>
          </span>
          <textarea
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            disabled={submitting}
            type="submit"
            className="text-white bg-primary-orange rounded-full px-5 py-1.5 text-sm"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
