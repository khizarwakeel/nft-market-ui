import React from "react";

const cards = [
  {
    icon: "/assets/walleticon.png",
    title: "Set up your wallet",
    disc: `Once you’ve set up your wallet of choice, connect it to 
           OpenSea by clicking the NFT Marketplace in the top right corner. 
           Learn about the wallets we support.`,
  },
  {
    icon: "/assets/windowicon.png",
    title: "Create your collection",
    disc: `Click Create and set up your collection. Add social links, 
           a description, profile & banner images, and set a secondary sales fee.`,
  },
  {
    icon: "/assets/nfticon.png",
    title: "Add your NFTs",
    disc: `Upload your work (image, video, audio, or 3D art), add a title and description, 
           and customize your NFTs with properties, stats, and unlockable content.`,
  },
  {
    icon: "/assets/shopicon.png",
    title: "List them for sale",
    disc: `Choose between auctions, fixed-price listings, 
           and declining-price listings. You choose how
           you want to sell your NFTs!`,
  },
];

function CreateAndSell() {
  return (
    <div>
      <div className="text-[#fff]">
        <div className="lg:flex justify-between w-[90%] mx-auto  pt-20">
          <h1 className=" text-2xl md:text-4xl font-bold mb-5">
            Create and sell your NFTs
          </h1>
        </div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[90%] mx-auto p-2 pt-9">
          {cards.map((list) => (
            <div>
              <div>
                <img src={list.icon} alt="" className="w-16" />
              </div>
              <div className="pt-2">
                <h2 className="text-xl font-bold mt-5 mb-5">{list.title}</h2>
                <p className="text-slate-400 mb-5">{list.disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateAndSell;