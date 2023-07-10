import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between font-bold py-8 px-8 text-white text-xl bg-slate-600">
      <Link href="/">Logo</Link>
      <Link href="/add-product">Add Product</Link>
    </div>
  );
};

export default Navbar;
