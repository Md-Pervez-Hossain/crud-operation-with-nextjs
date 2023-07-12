"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const page = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title And Description Are Required");
    }
    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (res.ok) {
      router.push("/");
    } else {
      throw new Error("Failed To Post");
    }
  };
  return (
    <div className="my-16 w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-4 py-2 mb-5 border-2 w-full border-gray-200 rounded-lg"
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-2 mb-5 border-2 w-full border-gray-200 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="text-white text-xl px-4 py-2 mb-5 rounded-lg bg-slate-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
