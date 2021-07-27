import Head from "next/head";
import Image from "next/image";
import cherry from "../images/cherry-tree.png";
import Tile from "../components/Tile";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full bg-sky-blue-500 h-96 "></div>
        <div className="w-full h-auto relative">
          <div className=" h-80 w-full bg-sky-blue-500 convex"></div>
          <div className="relative tree -top-64 z-0">
            <Image src={cherry} width={1000} height={700} />
          </div>
          <div className="absolute left-1/2 top-44 circle rounded-full bg-mint-green-500 z-10"></div>
        </div>
      </div>
      <main className="grid grid-cols-4 -mt-36">
        <section className=" col-span-3  w-full px-64 ">
          <h2 className=" mb-16 text-xl font-regular text-heading-green-500 tracking-wider">
            RECENTLY PUBLISHED
          </h2>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </section>

        <aside className="-ml-16">
          <h2 className=" text-xl font-regular text-heading-green-500 tracking-wider">
            TOP POSTS
          </h2>
        </aside>
      </main>
    </>
  );
}
