import React from "react";

const cards = [
  {
    imgSrc: "/assets/avatar1.jpg",
    title: "@Richard",
    coins: "1.5 BNB",
  },
  {
    imgSrc: "/assets/avatar2.jpg",
    title: "@JohnDeo",
    coins: "2.3 BNB",
  },
  {
    imgSrc: "/assets/avatar3.jpg",
    title: "@Sara",
    coins: "2.5 BNB",
  },
  {
    imgSrc: "/assets/avatar4.jpg",
    title: "@ArhamH",
    coins: "1.9 BNB",
  },
  {
    imgSrc: "/assets/avatar5.jpg",
    title: "@Yasmin",
    coins: "3.2 BNB",
  },
  {
    imgSrc: "/assets/avatar6.jpg",
    title: "@Junaid",
    coins: "4.7 BNB",
  },
];

function CreativeArtist() {
  return (
    <div>
      <div className=" lg:py-16 text-[#fff]">
        <h1 className="text-white md:pl-16 pl-10 xl:pl-28 lg:pl-24 mt-10 text-4xl font-semibold mb-8">
          Top Sellers
        </h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[85%] mx-auto text-center p-2">
          {cards.map((list) => (
            <div className="p-6 rounded-xl bg-[#212529] flex">
              <div className="flex items-center">
                <div>
                  <img src={list.imgSrc} className="rounded-full w-16 mr-2" />
                </div>
                <div>
                  <h1 className="mb-2">{list.title}</h1>
                  <h1>{list.coins}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreativeArtist;