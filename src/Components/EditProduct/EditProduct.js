"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const EditProduct = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newTitle, newDescription }),
    });
    if (res.ok) {
      router.push("/");
    } else {
      throw new Error("Failed To Update");
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          placeholder="Enter Title"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="px-4 py-2 mb-5 border-2 w-full border-gray-200 rounded-lg"
        />
        <textarea
          placeholder="Enter Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="px-4 py-2 mb-5 border-2 w-full border-gray-200 rounded-lg"
        ></textarea>
        <button className="text-white text-xl px-4 py-2 mb-5 rounded-lg bg-slate-600 w-full">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
