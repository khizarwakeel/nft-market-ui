import React from "react";

const cards = [
  {
    bgImg: "/assets/auction-1.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 1",
  },
  {
    bgImg: "/assets/auction-2.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 1",
  },
  {
    bgImg: "/assets/auction-3.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 1",
  },
  {
    bgImg: "/assets/auction-4.jpg",
    title: "Walking On Air",
    owner: "Owned by Richard",
    coins: "1.5 ETH",
    rank: "1 of 1",
  },
];

function ExclusiveArtist() {
  return (
    <div>
      <div className="text-[#fff]">
        <div className="lg:flex justify-between w-[88%] mx-auto m-5 pt-20">
          <h1 className=" text-2xl md:text-4xl font-bold mb-5">Explore</h1>
          <a
            href="#"
            className="text-sm md:text-lg font-bold hover:text-blue-800"
          >
            View all <span>&rarr;</span>
          </a>
        </div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[90%] mx-auto p-2">
          {cards.map((list) => (
            <div className="p-6 bg-[#212529] h-[460px]">
              <div>
                <img
                  src={list.bgImg}
                  alt=""
                  className="rounded-lg h-52 mx-auto"
                />
              </div>
              <div className="pt-2">
                <h2 className="text-xl font-semibold mt-5 mb-5">
                  {list.title}
                </h2>
                <h3 className="text-slate-400 mb-5">{list.owner}</h3>
              </div>
              <div className="flex justify-between mb-5">
                <p>{list.coins}</p>
                <p>{list.rank}</p>
              </div>
              <div className="flex">
                <a
                  href="#"
                  class="flex items-center justify-center font-bold w-32 rounded-full py-2 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
                >
                  Place a Bid
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-10 text-white">
          <a
            href="#"
            class="flex items-center justify-center font-bold w-40 rounded-full py-3 border-2 border-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-none"
          >
            Load More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveArtist;