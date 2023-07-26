import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const LiveAuction = () => {
  return (
    <>
      <div className="bg-[url('/assets/technologysols.png')]">
        <Swiper
          breakpoints={{
            1024: {
              width: 1160,
              slidesPerView: 4,
            },
            768: {
              width: 900,
              slidesPerView: 3,
            },
            425: {
              width: 300,
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
          className="mySwiper xl:mx-20 xl:py-20 lg:py-20 lg:mx-24 mx-1 md:px-5 md:pt-5 px-4 pt-5 text-white"
        >
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-1.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar1.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-2.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar2.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-3.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar3.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-4.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar4.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-1.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar5.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-2.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar6.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-3.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar7.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-4.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar8.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-1.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar1.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-2.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar2.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-3.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar3.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#212529] rounded-xl p-7">
            <img
              src="/assets/auction-4.jpg"
              alt=""
              className="mx-auto mb-5 rounded-md"
            />
            <h1 className="mb-3 text-2xl font-semibold">Virtual Worlds</h1>
            <div className="flex items-center">
              <div>
                <img
                  src="/assets/avatar4.jpg"
                  className="rounded-full w-16 h-16"
                />
              </div>
              <div className="ml-2 font-semibold">
                <h1>@Richard</h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 font-semibold">
              <h3>1.5 BNB</h3>
              <h3>1 of 1</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default LiveAuction;