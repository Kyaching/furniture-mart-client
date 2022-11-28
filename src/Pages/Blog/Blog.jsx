import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-6">BLOG</h2>

      <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg">
        <div className="mt-3">
          <p className="text-2xl font-bold">
            Q.1: What are the different ways to manage a state in a React
            application?
          </p>
          <p className="mt-2">
            There are four main types of state you need to properly manage in
            your React apps: <br />
            1. Local state <br /> 2. Global state <br /> 3. Server state <br />{" "}
            4. URL state <br />
            <strong>Local (UI) state –</strong> Local state is data we manage in
            one or another component. <br />
            <strong>Global (UI) state –</strong> Global state is data we manage
            across multiple components. <br />
            <strong>Server state –</strong>Data that comes from an external
            server that must be integrated with our UI state. <br />
            <strong>URL state –</strong>Data that exists on our URLs, including
            the pathname and query parameters.
          </p>
        </div>
      </div>
      <div className="container max-w-4xl my-6 px-10 py-6 mx-auto rounded-lg shadow-lg">
        <div className="mt-3">
          <p className="text-2xl font-bold">
            Q.2: How does prototypical inheritance work?
          </p>
          <p className="mt-2">
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div className="container max-w-4xl my-6 px-10 py-6 mx-auto rounded-lg shadow-lg">
        <div className="mt-3">
          <p className="text-2xl font-bold">
            Q.3: What is a unit test? Why should we write unit tests?
          </p>
          <p className="mt-2">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended.
          </p>
          <p className="mt-2">
            <span>
              <strong>How unit tests work</strong>
            </span>{" "}
            <br />A unit test typically comprises of three stages: plan, cases
            and scripting and the unit test itself. In the first step, the unit
            test is prepared and reviewed. The next step is for the test cases
            and scripts to be made, then the code is tested.
          </p>
        </div>
      </div>

      <div className="container max-w-4xl my-6 px-10 py-6 mx-auto rounded-lg shadow-lg">
        <div className="mt-3">
          <p className="text-2xl font-bold">Q.4: React vs. Angular vs. Vue?</p>

          <p className="mt-2">
            <span>
              <strong>React</strong>
            </span>{" "}
            <br />
            React can be used as a UI library to render elements, without
            enforcing a specific project structure, and that’s why it’s not
            strictly a framework. React Elements are the smallest building
            blocks of React apps. They are more powerful than DOM elements
            because the React DOM makes sure to update them efficiently whenever
            something changes. Components are larger building blocks that define
            independent and reusable pieces to be used throughout the
            application. They accept inputs called props and produce elements
            that are then displayed to the user. React is based on JavaScript,
            but it’s mostly combined with JSX (JavaScript XML), a syntax
            extension that allows you to create elements that contain HTML and
            JavaScript at the same time. Anything you create with JSX could also
            be created with the React JavaScript API, but most developers prefer
            JSX because it’s more intuitive.
          </p>
          <p className="mt-2">
            <span>
              <strong>Vue</strong>
            </span>{" "}
            <br />
            The Vue.js core library focuses on the View layer only. It’s called
            a progressive framework because you can extend its functionality
            with official and third-party packages, such as Vue Router or Vuex,
            to turn it into an actual framework. Although Vue is not strictly
            associated with the MVVM (Model-View-ViewModel) pattern, its design
            was partly inspired by it. With Vue, you’ll be working mostly on the
            ViewModel layer, to make sure that the application data is processed
            in a way that allows the framework to render an up-to-date View.
          </p>
          <p className="mt-2">
            <span>
              <strong>Angular</strong>
            </span>{" "}
            <br />
            AngularJS, the original framework, is an MVC (Model-View-Controller)
            framework. But in Angular 2, there’s no strict association with
            MV*-patterns as it is also component-based. Projects in Angular are
            structured into Modules, Components, and Services. Each Angular
            application has at least one root component and one root module.
            Each component in Angular contains a Template, a Class that defines
            the application logic, and MetaData (Decorators). The metadata for a
            component tells Angular where to find the building blocks that it
            needs to create and present its view.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
