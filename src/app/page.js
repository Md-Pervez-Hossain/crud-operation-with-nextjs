import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
export default function Home() {
  return (
    <main className="my-16 grid grid-cols-2 gap-10">
      <div className="flex items-center justify-center gap-10">
        <div>
          <h2 className="text-2xl font-bold">Here is Your title</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex iste
            rem impedit dolorum. Culpa ea modi, dolorum labore incidunt quas.
          </p>
        </div>
        <div className="flex items-center gap-5 text-2xl cursor-pointer">
          <AiFillDelete></AiFillDelete>
          <Link href={"/edit-product/1"}>
            <FaEdit></FaEdit>
          </Link>
        </div>
      </div>
    </main>
  );
}
