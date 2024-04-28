import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import react-icons
import { FaStar } from "react-icons/fa6";

//import Avatar from flowbite-react
import { Avatar } from "flowbite-react";

import profileImg from "../assets/profile.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./BookCard.css";

// import required modules
import { Pagination } from "swiper/modules";

export const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-3 rounded-lg border">
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="mt-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit ut fuga esse nihil aut tempore, magni nam est
                    molestiae corporis?
                  </p>
                  {/* Avatar component */}
                  <Avatar
                    img={profileImg}
                    alt="avatar of Jessica White"
                    className="w-10 my-4"
                    rounded
                  />
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-base">CEO, ABC Company</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-3 rounded-lg border">
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="mt-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit ut fuga esse nihil aut tempore, magni nam est
                    molestiae corporis?
                  </p>
                  {/* Avatar component */}
                  <Avatar
                    img={profileImg}
                    alt="avatar of Jessica White"
                    className="w-10 my-4"
                    rounded
                  />
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-base">CEO, ABC Company</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-3 rounded-lg border">
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="mt-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit ut fuga esse nihil aut tempore, magni nam est
                    molestiae corporis?
                  </p>
                  {/* Avatar component */}
                  <Avatar
                    img={profileImg}
                    alt="avatar of Jessica White"
                    className="w-10 my-4"
                    rounded
                  />
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-base">CEO, ABC Company</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-3 rounded-lg border">
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="mt-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit ut fuga esse nihil aut tempore, magni nam est
                    molestiae corporis?
                  </p>
                  {/* Avatar component */}
                  <Avatar
                    img={profileImg}
                    alt="avatar of Jessica White"
                    className="w-10 my-4"
                    rounded
                  />
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-base">CEO, ABC Company</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-3 rounded-lg border">
              <div className="space-y-6">
                <div className="text-amber-500 flex gap-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="mt-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit ut fuga esse nihil aut tempore, magni nam est
                    molestiae corporis?
                  </p>
                  {/* Avatar component */}
                  <Avatar
                    img={profileImg}
                    alt="avatar of Jessica White"
                    className="w-10 my-4"
                    rounded
                  />
                  <h5 className="text-lg font-medium">Mark Ping</h5>
                  <p className="text-base">CEO, ABC Company</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
