import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: '50px', fontSize: '22px'}}>
      <div className="">
        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
        <Link  className="hover:text-green-500  hover:underline" href="/week-2">Week-2 Assignment</Link>
        <br />
        <Link className="hover:text-green-500  hover:underline" href="/week-3">Week-3 Assignment</Link>
        <br />
        <Link className="hover:text-green-500  hover:underline" href="/week-4">Week-4 Assignment</Link>
        <br />
        <Link className="hover:text-green-500  hover:underline" href="/week-5">Week-5 Assignment</Link>
      </div>
    </main>
  );
}
