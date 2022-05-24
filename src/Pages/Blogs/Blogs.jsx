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
              How will you improve the performance of a React Application?
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
            </p>
            <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
              What are the different ways to manage a state in a React
              application?
            </p>
            <p className="text-gray-800 grid">
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
              main types of state you need to properly manage in your React
              apps:
              <ol>
                <li>1. Local state</li>
                <li>2. Global state</li>
                <li>3. Server state</li>
                <li>4. URL state</li>
              </ol>
              Let's cover each of these in detail:
              <ol>
                <li>
                  1. Local (UI) state – Local state is data we manage in one or
                  another component. Local state is most often managed in React
                  using the useState hook. For example, local state would be
                  needed to show or hide a modal component or to track values
                  for a form component, such as form submission, when the form
                  is disabled and the values of a form’s inputs.
                </li>
                <li>
                  2. Global (UI) state – Global state is data we manage across
                  multiple components. Global state is necessary when we want to
                  get and update data anywhere in our app, or in multiple
                  components at least. A common example of global state is
                  authenticated user state. If a user is logged into our app, it
                  is necessary to get and change their data throughout our
                  application. Sometimes state we think should be local might
                  become global.
                </li>
                <li>
                  3. Server state – Data that comes from an external server that
                  must be integrated with our UI state. Server state is a simple
                  concept, but can be hard to manage alongside all of our local
                  and global UI state. There are several pieces of state that
                  must be managed every time you fetch or update data from an
                  external server, including loading and error state.
                  Fortunately there are tools such as SWR and React Query that
                  make managing server state much easier.
                </li>
              </ol>
              4. URL state – Data that exists on our URLs, including the
              pathname and query parameters. URL state is often missing as a
              category of state, but it is an important one. In many cases, a
              lot of major parts of our application rely upon accessing URL
              state. Try to imagine building a blog without being able to fetch
              a post based off of its slug or id that is located in the URL!
              There are undoubtedly more pieces of state that we could identify,
              but these are the major categories worth focusing on for most
              applications you build.
            </p>
            <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
              How does prototypical inheritance work?
            </p>
            <p className="text-gray-700">
              n a class-based model, you have Classes, which are represented by
              the triple 'Parents, Variables, Methods'. Where: Parents is the
              list of classes you’re extending. Classes may only extend other
              classes; Variables is the number of variable slots that instances
              will have. For example, a “class Point2d(int x, int y)” has 2
              instance variables; Methods is a table of “name → function” that
              describes which services each instance of the class will support;
              Instances (or Objects) in a class-based model are represented with
              the tuple “Class, Values”. Where: Class is a pointer to the class
              triple that defines how many variables this instance supports, and
              what methods you can call on it; Values is a list of the values
              for each variable the instance has.
              <p>
                Turns out that if we change things slightly, we can combine
                Classes and Instances into a single concept: an Object. So
                instead of the model above, we can have a single triple
                “Parents, Variables, Methods”. Which happens to look exactly
                like our Classes triple in the names alone, but there are some
                semantic differences: Parents is a list of Objects that we
                inherit from. Objects here are the same triple, so this doesn’t
                change much our concept of inheritance established above in the
                class-model. Objects are just a “more powerful” class of sorts;
                Variables is a mapping “name → value”. This is because we now
                have to store the values as well. You could have a simple list,
                but inheritance then becomes a problem—how do you conciliate
                methods expecting “variable 0” meaning different things for
                different objects? Names at least reduce this problem; Methods
                is a mapping “name → function”. Same as in the class-model. We
                can even simplify this further and merge “Variables” and
                “Methods”, as they’re both mappings from some kind of name to
                some kind of value. We’d just need to make “function” a
                value—which is exactly what JavaScript does. So, JavaScript’s
                model is something like: “Parent, Slots”. Where “Parent” is a
                single object (or null), because JavaScript does not support
                multiple inheritance; and “Slots” is a mapping “name → value”
                that combines Variables and Methods. Functions are just a
                regular value, after all. (Python uses this model too, because
                it’s the right thing to do. You really don’t want to have to
                deal with all of the headaches that come from separating classes
                from objects and making classes objects at the same time)
              </p>
            </p>
            <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </p>
            <p className="text-gray-700">
              One should never update the state directly because of the
              following reasons:
              <ol className="list-disc ml-5">
                <li>
                  If you update it directly, calling the setState() afterward
                  may just replace the update you made.
                </li>
                <li>
                  When you directly update the state, it does not change
                  this.state immediately. Instead, it creates a pending state
                  transition, and accessing it after calling this method will
                  only return the present value.
                </li>
                <li>
                  You will lose control of the state across all components.
                </li>
              </ol>
            </p>
            <p className="mt-10 mb-3 text-2xl font-semibold text-gray-900">
              What is a unit test? Why should write unit tests?
            </p>
            <p className="text-gray-700">
              Unit testing is a type of software testing where individual units
              or software components are tested. Its purpose is to validate that
              each unit of code performs as expected. A unit can be anything you
              want it to be — a line of code, a method, or a class. Generally,
              smaller tests are better as they give a more granular view of your
              code’s performance. Also, when you test very small units, your
              tests can run fast, like a thousand tests in a second fast. There
              are two types of unit testing:
              <ol>
                <li>
                  Manual: As the name implies, unit tests are run manually to
                  verify the correctness of your code. This is done before
                  writing automated tests. Its drawback is that you have to
                  manually test your functions/classes whenever you make changes
                  to them.{" "}
                </li>
                <li>
                  Automated: This is the preferred unit testing method as it can
                  be carried out by simply running a script. Automated tests
                  also make it easier to run tests when your application scales.
                </li>
              </ol>
              <p>Why should we write unit testing:</p>
              <p>
                To justify any effort in business, there must be a positive
                impact on the bottom line. Here are a few benefits to writing
                unit tests:
                <ol>
                  <li>
                    1. Unit tests save time and money. Usually, we tend to test the
                    happy path more than the unhappy path. If you release such
                    an app without thorough testing, you would have to keep
                    fixing issues raised by your potential users. The time to
                    fix these issues could’ve been used to build new features or
                    optimize the existing system. Bear in mind that fixing bugs
                    without running tests could also introduce new bugs into the
                    system.
                  </li>
                  <li>
                    2. Well-written unit tests act as documentation for your code.
                    Any developer can quickly look at your tests and know the
                    purpose of your functions. It simplifies the debugging
                    process.
                  </li>
                  <li>3. It simplifies the debugging process.</li>
                  <li>
                    4. Unit testing is an integral part of extreme programming.
                    Extreme programming is basically a
                    “test-everything-that-can-possibly-break” programming
                    strategy.
                  </li>
                  <li>
                    5. Unit tests make code reuse easier. If you want to reuse
                    existing code in a new project, you can simply migrate both
                    the code and tests to your new project, then run your tests
                    to make sure you have the desired results.
                  </li>
                  <li>
                    6. Unit testing improves code coverage. A debatable topic is to
                    have 100% code coverage across your application.
                  </li>
                </ol>
              </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
