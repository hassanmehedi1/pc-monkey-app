import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
        <div>
          <h2 className="text-center font-mono text-4xl font-semibold">
            My Blogs
          </h2>
          <div>
            <p className="mt-10 mb-3 font-semibold text-2xl text-gray-900">
              How will someone improve the performance of a React Application?
            </p>
            <p className="text-gray-800 grid">
              The operations involved in keeping the DOM updates are costly but
              react uses several techniques to minimize the no. of operations
              which leads to natively faster UI for many cases. Still, we can
              use several techniques to speed up the application:
              <ol>
                <li>
                  1. Use binding functions in constructors: By adding an arrow
                  function in a class, we add it as an object and not as the
                  prototype property of the class. And if we use the component
                  multiple time, there will be various instances of these
                  functions within each object of the component. The most
                  reliable way to use functions is to bind them with the
                  constructor.
                </li>
                <li>
                  2. Avoid inline style attributes: The browser often invests a
                  lot of time rendering, when styles are implied inline.
                  Scripting and rendering take time because the browser has to
                  plan all the React style rules to the CSS properties. Creating
                  a separate style.js file and importing it into the component
                  is a faster method.
                </li>
                <li>
                  3. Avoid extra tags by using React fragments: Using react
                  fragments decreases the no. of additional tags and satisfies
                  the necessity of having a single parent element in the
                  component.
                </li>
                <li>
                  4. Avoid inline function in the render method: If we use the
                  inline function, the function will generate a new instance of
                  the object in every render and there will be multiple
                  instances of these functions which will lead to consuming more
                  time in garbage collection. To optimize that we can define
                  functions outside the render method and call them wherever
                  required.
                </li>
                <li>
                  5. Avoid bundling all of the front end code in a single file:
                  By splitting the files into resource and on-demand code files
                  we can reduce the time consumed in presenting bundled files to
                  the browser transformers.
                </li>
              </ol>
              <span className="font-semibold">Courtesy:</span> Geeks for geeks
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
