import React from "react";

const page = () => {
  return (
    <div className="my-16 w-1/2 mx-auto">
      <form>
        <input
          placeholder="Enter Title"
          className="px-4 py-2 mb-5 border-2 w-full border-gray-200 rounded-lg"
        />
        <textarea
          placeholder="Enter Description"
          className="px-4 py-2 mb-5 border-2 w-full border-gray-200 rounded-lg"
        ></textarea>
        <button className="text-white text-xl px-4 py-2 mb-5 rounded-lg bg-slate-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
