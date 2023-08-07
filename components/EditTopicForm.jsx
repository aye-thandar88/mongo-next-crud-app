"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleEditTopic = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic.");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleEditTopic}>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        type="text"
        placeholder="Topic Title"
        className="w-full h-15 p-2 border-2 border-slate-300 rounded-md"
      />
      <input
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        type="text"
        placeholder="Topic Description"
        className="w-full h-15 p-2 border-2 border-slate-300 rounded-md "
      />
      <button
        type="submit"
        className="bg-green-800 p-2 rounded-md text-white w-1/4"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
