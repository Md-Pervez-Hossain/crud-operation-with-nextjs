"use client";
import EditProduct from "@/Components/EditProduct/EditProduct";
import React, { useState } from "react";
const page = async ({ params }) => {
  const id = params.id;
  console.log(id);
  const getSingleTopic = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    return res.json();
  };
  const { product } = await getSingleTopic();
  console.log(product);
  const { title, description } = product;

  return (
    <div className="my-16 w-1/2 mx-auto">
      <EditProduct id={id} title={title} description={description} />
    </div>
  );
};

export default page;
