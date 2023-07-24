import React from "react";

function Herosection() {
  return (
    <div>
      <section className="text-white bg-[url('/assets/bgimage.svg')] bg-no-repeat bg-cover">
        <div class="grid max-w-screen-xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-36">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h2 className=" relative font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NETSTORM <span className="border-t-4 border-indigo-500 absolute top-3 ml-4">--------</span>
            </h2>
            <h1 class="max-w-2xl mb-5 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-7xl text-white">
              Discover, collect, <br /> and sell<br /> extraordinary NFTs
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl :text-gray-400">
              Explore on the world's best & largest NFT marketplace
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center mr-10 text-white w-40 py-3 px-6 rounded-full lg:w-32 lg:py-2 lg:px-0 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
            >
              Explore
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center text-white w-40 py-3 px-6 rounded-full lg:w-32 lg:py-2 lg:px-0 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
            >
              Create
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;