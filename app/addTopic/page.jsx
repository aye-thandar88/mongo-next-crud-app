"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title or description is required.");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        });

        if (!res.ok) {
          throw new Error("Failed to create a topic.");
        }
        router.push("/");
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Topic Title"
        className="w-full h-15 p-2 border-2 border-slate-300 rounded-md"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Topic Description"
        className="w-full h-15 p-2 border-2 border-slate-300 rounded-md "
      />
      <button
        type="submit"
        className="bg-green-800 p-2 rounded-md text-white w-1/4"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTopic;
