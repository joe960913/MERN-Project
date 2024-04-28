import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

export const FavoriteBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="" className="rounded md:w-5/6" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="md-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          impedit quaerat porro iste excepturi? Accusamus exercitationem totam
          autem molestias alias ullam, suscipit delectus veniam, ipsam possimus
          impedit sint natus deserunt!
        </p>
        {/* stats */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Books Listening</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="py-2 px-5 bg-blue-700 text-white font-semibold rounded hover:bg-black transition-all ease-in duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};
