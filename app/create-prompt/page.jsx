"use client";
import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Createprompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const createPrompt = async (e) => {};
  return (
    <Form
      type="Create"
      post={post}
      submitting={submitting}
      setPost={setPost}
      handleSubmit={createPrompt}
    />
  );
};

export default Createprompt;
