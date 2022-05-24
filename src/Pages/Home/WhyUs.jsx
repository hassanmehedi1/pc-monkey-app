import React from "react";
import bg from "../../assets/bg/bg-pc-2.jpg";

const WhyUs = () => {
  return (
    <section className="p-6 ">
      <div className="container mx-auto">
        <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">
          PC Monkey
        </span>
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-purple-200">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-500 dark:text-gray-900 w-50 mx-auto">
              <p className="text-center ">1</p>
            </div>
            <p className="text-2xl font-semibold">
              <b className="text-center">Big Collection: </b>We have a Big
              collection of Pc parts!
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-purple-200">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-500 dark:text-gray-900 w-50 mx-auto">
              2
            </div>
            <p className="text-2xl font-semibold">
              <b>Fair Price: </b>We always ask fair price for our customer!
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md bg-purple-200">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-500 dark:text-gray-900 w-50 mx-auto">
              3
            </div>
            <p className="text-2xl font-semibold">
              <b>After Sell Service: </b>We have the best after sell service for any faulty parts!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
