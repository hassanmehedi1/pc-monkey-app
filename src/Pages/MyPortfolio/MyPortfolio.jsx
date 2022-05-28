import React from "react";
import img from "../../assets/person/my-pp1.png";

const MyPortfolio = () => {
  return (
    <>
      <div className="px-12">
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 container">
          <div className="font-mono text-3xl font-semibold mt-20">
            <h1 className="text-6xl text-pink-500">Mehedi Hassan</h1>
            <h2>Junior Web Developer and Freelance Digital Marketer</h2>
            <br />
            <p className="text-base font-sans">
              My goal is to become a full stack web developer and get a full
              time job with good salary. I am focused for this and I will do
              whatever I have to become a successful web developer. I am willing
              to push myself to the edge because I love this field. It has
              become my passion and hobby. I am also looking forward to enhance
              my Digital marketing skills and earn more money from the fiverr
              marketplace which is a online freelance platform. Also I will be
              preparing for my masters degree at abroad.
            </p>
            <br />
            <h3 className="text-xl font-semibold">
              Mail Me: mehedihypernova@gmail.com
            </h3>
            <br />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/hassan-mehdi11/"
              className="bg-blue-500 hover:text-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl "
            >
              Explore More
            </a>
          </div>
          <div>
            <img className="w-96 mt-10 sm:ml-0 md:ml-32" src={img} alt="" />
          </div>
        </section>
        <section className="container mt-8">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                  <h3 className="text-3xl font-semibold">
                    Educational Background
                  </h3>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      American International University-Bangladesh
                    </h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                      2018-2022
                    </time>
                    <p className="mt-3">
                      Bachelor of Science in Computer Science and Engineering
                    </p>

                    <p>
                      <span className="font-semibold">CGPA</span>: 3.46 out of 4
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      Holy-flower Model College
                    </h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                      2015-2017
                    </time>
                    <p className="mt-3">Higher Secondary</p>
                    <p>
                      <span className="font-semibold">GPA</span>: 4.17 out of 5
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      Ispahani High School
                    </h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                      2015
                    </time>
                    <p className="mt-3">Secondary School Certificate</p>
                    <p>
                      <span className="font-semibold">GPA</span>: 4.72 out of 5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* // Skills  */}
        <section className="">
          <div className="max-w-6xl mx-auto px-5 py-24 ">
            <div className="text-center mb-20">
              <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                My Skills
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                As a learning web-developer I have gained some skills around
                this time. Below is the list of what I have learned till now.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-32 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded border-2 shadow-lg p-4 transform translate-x-6 -translate-y-6  ">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        ></path>
                      </svg>{" "}
                    </div>
                    <div className="flex-grow ">
                      <h2 className=" text-xl title-font font-medium mb-3">
                        Web-Design
                      </h2>
                      <p className="leading-relaxed text-sm text-justify">
                        For web designing I have learned HTML, CSS. I also have
                        some knowledge on Ui/Ux designing. I have tried to
                        learned some frameworks for CSS too. They are Bootstrap
                        and Tailwind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded border-2 shadow-lg p-4 transform translate-x-6 -translate-y-6 ">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className=" text-xl title-font font-medium mb-3">
                        Integration Web
                      </h2>
                      <p className="leading-relaxed text-sm text-justify">
                        I have learned and gained knowledge on Javascript which
                        is core part of web development. I have also learned one
                        of the most popular frameworks of js 'React'. I am still
                        learning and trying to master both the frameworks and
                        js.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                <div className="pattern-dots-md gray-light">
                  <div className="rounded border-2 shadow-lg p-4 transform translate-x-6 -translate-y-6 ">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className=" text-xl title-font font-medium mb-3">
                        Development Back-End
                      </h2>
                      <p className="leading-relaxed text-sm text-justify">
                        For Back-End I am learning Node.js, Which is also a
                        popular backend language. For Database management I have
                        learned Mongodb which is a NoSQL database management
                        system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Projects  */}
        <section className="">
          <div className="max-w-6xl mx-auto px-5 py-24 ">
            <div className="text-center mb-20">
              <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                My Web Projects
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                These are 3 of My Top Web Projects that I have done till now.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-32 h-1 rounded-full bg-purple-500 inline-flex"></div>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card min-w-fit bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">KhabarChai.com</h2>
                  <p>
                    KhabarChai.com is a Food Inventory web app. Technologies
                    used in this project are React, Tailwind, Firebase, Nodejs,
                    etc.
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://food-inventory-app.web.app/"
                      className="btn btn-primary"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="card min-w-fit  bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Dream Photography</h2>
                  <p>
                    This is a website based on my hobby which is photography.
                    This website specializes on independent service providing.
                    Technologies used in this project are React, Bootstrap,
                    Firebase, etc.
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://dream-photography-app.web.app/"
                      className="btn btn-primary"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="card min-w-fit  bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Review Loader</h2>
                  <p>
                    This is a site for product Reviews. This site was done in
                    early of my react learning. Thats why this site does not
                    have so many dynamic things on it. Technologies used in this
                    project are React, Bootstrap, etc.
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      target="_blank"
                      href="https://review-loader.netlify.app/reviews"
                      className="btn btn-primary"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyPortfolio;
