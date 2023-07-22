import React from "react";

function Herosection() {
  return (
    <div>
      <section className="text-white">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h2 className=" font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NETSTORM
            </h2>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl :text-gray-400">
              Explore on the world's best & largest NFT marketplace
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 :focus:ring-primary-900 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
            >
              Explore
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 :border-gray-700 :hover:bg-gray-700 :focus:ring-gray-800 text-white border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
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