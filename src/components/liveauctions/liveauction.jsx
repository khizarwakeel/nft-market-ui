import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const LiveAuction = () => {
  return (
    <>
      <div>
        <Swiper
          breakpoints={{
            1024: {
              width: 1020,
              slidesPerView: 4,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            425: {
              width: 425,
              slidesPerView: 1,
            },
            375: {
              width: 375,
              slidesPerView: 1,
            },
            320: {
              width: 320,
              slidesPerView: 1,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mx-auto w-[76%]"
        >
          <SwiperSlide className="text-center bg-[#191919] rounded-md text-white  w-full px-10">
            <img src="/assets/auction-1.jpg" alt="" />
            <h1>Product Development</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img src="/assets/auction-1.jpg" alt="" className="p-6" />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img src="/assets/auction-1.jpg" alt="" className="p-6" />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img src="/assets/auction-1.jpg" alt="" className="p-6" />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-white rounded-md">
            <img src="/assets/auction-1.jpg" alt="" className="p-6" />
            <h1 className="mb-3 text-2xl font-bold">Product Development</h1>
            <p className="mx-4 text-slate-600 mb-14">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default LiveAuction;