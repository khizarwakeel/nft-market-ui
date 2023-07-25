import React from "react";

const cards = [
  {
    bgImg: "/assets/card1.jpg",
    imgSrc: "/assets/avatar1.jpg",
    title: "Virtual Worlds",
    coins: "ERC-729",
  },
  {
    bgImg: "/assets/card2.jpg",
    imgSrc: "/assets/avatar2.jpg",
    title: "Digital Arts",
    coins: "ERC-522",
  },
  {
    bgImg: "/assets/card3.jpg",
    imgSrc: "/assets/avatar3.jpg",
    title: "Sports",
    coins: "ERC-495",
  },
  {
    bgImg: "/assets/card4.jpg",
    imgSrc: "/assets/avatar4.jpg",
    title: "Photography",
    coins: "ERC-873",
  },
  {
    bgImg: "/assets/card5.jpg",
    imgSrc: "/assets/avatar5.jpg",
    title: "Trading Cards",
    coins: "ERC-397",
  },
  {
    bgImg: "/assets/card6.jpg",
    imgSrc: "/assets/avatar6.jpg",
    title: "Walking on Air",
    coins: "ERC-403",
  },
  {
    bgImg: "/assets/card7.jpg",
    imgSrc: "/assets/avatar7.jpg",
    title: "Domain Names",
    coins: "ERC-687",
  },
  {
    bgImg: "/assets/card1.jpg",
    imgSrc: "/assets/avatar8.jpg",
    title: "Collectibles",
    coins: "ERC-972",
  },
];

function MostPopular() {
  return (
    <div>
      <div className="text-[#fff]">
        <div className="lg:flex justify-between w-[83%] mx-auto m-5">
          <h1 className=" text-2xl md:text-4xl font-bold mb-5">
            Popular Collections
          </h1>
          <a
            href="#"
            className="text-sm md:text-lg font-bold hover:text-blue-800"
          >
            Explore More <span>&rarr;</span>
          </a>
        </div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[85%] mx-auto text-center p-2">
          {cards.map((list) => (
            <div className="p-6 rounded-lg bg-[#212529] xl:h-80 lg:h-72 md:h-80">
              <div>
                <img src={list.bgImg} alt="" className="rounded-lg" />
              </div>
              <div>
                <img
                  src={list.imgSrc}
                  alt=""
                  className="rounded-full w-16 mx-auto -mt-10"
                />
              </div>
              <div className="pt-2">
                <h2 className="text-lg font-semibold">{list.title}</h2>
                <h3 className="text-slate-400">{list.coins}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostPopular;