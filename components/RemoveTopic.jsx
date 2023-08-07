"use client";

import React from "react";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveTopic = ({ id }) => {
  const router = useRouter();

  const handleRemoveTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Topic cannot be removed.");
      }
      router.refresh();
    }
  };

  return (
    <button onClick={handleRemoveTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveTopic;
