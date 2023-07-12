"use client";

import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to face Topics");
    }
    return res.json();
  } catch (error) {
    console.log(error.message);
  }
};

export async function Topics() {
  const router = useRouter();
  const { product } = await getTopics();
  const handleRemove = async (id) => {
    const agree = confirm("Are You Sure, You Want To delete");
    if (agree) {
      const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div className=" my-16 grid grid-cols-3 gap-10">
      {product?.map((t) => {
        return (
          <>
            <div className="flex items-center  gap-5">
              <div>
                <h2 className="text-2xl font-bold">{t.title}</h2>
                <p>{t.description}</p>
                <Link href={`/single-topic/${t._id}`}>
                  <button>Details</button>
                </Link>
              </div>
              <div className="flex items-center gap-5 text-2xl cursor-pointer">
                <AiFillDelete
                  onClick={() => handleRemove(t._id)}
                ></AiFillDelete>
                <Link href={`/edit-product/${t._id}`}>
                  <FaEdit></FaEdit>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Topics;
