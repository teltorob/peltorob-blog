import Head from "next/head";
import Image from "next/image";

import cherry from "../images/cherry-tree.png";
import Arrow from "../symbols/arrow.png";

import Tile from "../components/Tile";
import Sub from "../components/Sub";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <>
      <Nav />
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
      <main className="grid grid-cols-4 px-64  -mt-36">
        <section className=" col-span-3  w-full ">
          <h2 className=" mb-16 text-xl font-regular text-heading-green-500 tracking-wider">
            RECENTLY PUBLISHED
          </h2>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </section>

        <aside className="-ml-12">
          <div className="mb-16">
            <h2 className="mb-16 text-xl font-regular text-heading-green-500 tracking-wider">
              TOP POSTS
            </h2>
            <ul className="text-lg font-normal text-gray-600">
              <li className="py-1 flex">
                <div className="-ml-8 pt-1 pr-4">
                  <Image src={Arrow} />
                </div>
                a cool headline to catch your attention.
              </li>
              <li className="py-1 flex">
                <div className="-ml-8 pt-1 pr-4">
                  <Image src={Arrow} />
                </div>
                a cool headline to catch attention.
              </li>
              <li className="py-1 flex">
                <div className="-ml-8 pt-1 pr-4">
                  <Image src={Arrow} />
                </div>
                a cool headline to catch attention.
              </li>
              <li className="py-1 flex">
                <div className="-ml-8 pt-1 pr-4">
                  <Image src={Arrow} />
                </div>
                a cool headline to catch attention.
              </li>
            </ul>
          </div>
          <h2 className="mb-16 text-xl font-regular text-heading-green-500 tracking-wider">
            TOP CATEGORIES
          </h2>

          <div className="flex flex-row gap-2 flex-wrap">
            <div className="rounded-2xl hover:shadow-md hover:bg-mint-green-600 cursor-pointer font-medium text-gray-700 min-w-max p-3 text-sm h-auto bg-mint-green-500 ">
              <h4>Machine Learning</h4>
            </div>
            <div className="rounded-2xl hover:shadow-md hover:bg-mint-green-600 cursor-pointer font-medium text-gray-700 min-w-max p-3 text-center text-sm h-auto bg-mint-green-500 ">
              <h4>Skills</h4>
            </div>
            <div className="rounded-2xl hover:shadow-md hover:bg-mint-green-600 cursor-pointer font-medium text-gray-700 min-w-max p-3 text-center text-sm h-auto bg-mint-green-500 ">
              <h4>IoT</h4>
            </div>
            <div className="rounded-2xl hover:shadow-md hover:bg-mint-green-600 cursor-pointer font-medium text-gray-700 min-w-max p-3 text-center text-sm h-auto bg-mint-green-500 ">
              <h4>Robotics</h4>
            </div>
            <div className="rounded-2xl hover:shadow-md hover:bg-mint-green-600 cursor-pointer font-medium text-gray-700 min-w-max p-3 text-center text-sm h-auto bg-mint-green-500 ">
              <h4>Projects</h4>
            </div>
          </div>
        </aside>
      </main>
      <Sub />
      <Footer />
    </>
  );
}
