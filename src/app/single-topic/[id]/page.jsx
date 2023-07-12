"use client";
import React from "react";
async function page({ params }) {
  const id = params.id;
  const getSingleTopic = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    return res.json();
  };
  const { product } = await getSingleTopic();
  console.log(product);
  const { title, description } = product;
  return (
    <div>
      <h2>Title : {title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default page;
