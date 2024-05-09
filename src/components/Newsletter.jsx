import React, { useState } from "react";

const Newsletter = () => {
  return (
    <section className="px-4 pb-20 pt-5 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-5xl">
            Get offers straight <br /> to your inbox
          </h1>
          <p className="text-center md:text-lg text-color-100/90">
            Sign up for the SwiftMart newsletter
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex min-w-full sm:min-w-[24rem] justify-center gap-2 border border-color-100/70 rounded-[2.5rem] p-2">
          <input type="email" name="email" className="w-full bg-transparent outline-none pl-4 pr-2 py-3 placeholder:text-color-100/80" placeholder="Enter email address" />
          <button type="submit" className="py-2.5 px-5 font-medium bg-color-50 border border-color-50 hover:bg-color-50/90 text-white rounded-[2.5rem] transition-colors duration-300">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
