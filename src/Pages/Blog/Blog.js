import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <h1 className='text-6xl font-bold text-primary text-center my-10'>Blog</h1>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: What are the different ways to manage a state in a React application?</h4>
                <p>Managing state in your React apps isn’t as simple as using useState or useReducer.
                    Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?
                    In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way. <br />
                    There are four main types of state you need to properly manage in your React apps: <br />

                    1.Local state <br />
                    2.Global state <br />
                    3.Server state <br />
                    4.URL state <br />
                    Let's cover each of these in detail: <br />

                    <span className='font-semibold'>Local (UI) state –</span> Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />
                    <span className='font-semibold'>Global (UI) state –</span> Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    Sometimes state we think should be local might become global. <br />
                    <span className='font-semibold'>Server state –</span> Data that comes from an external server that must be integrated with our UI state.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                    Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />
                    <span className='font-semibold'>URL state –</span> Data that exists on our URLs, including the pathname and query parameters.
                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: How does prototypical inheritance work?

                </h4>
                <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. <br /> <br />
                    Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.)
                    JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance.
                    In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.
                    All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).
                </p>
            </div>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: What is a unit test? Why should we write unit tests?

                </h4>
                <p>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br /> <br />

                    Why should we use unit testing: <br />

                    * The earlier a problem is identified, the fewer compound errors occur. <br />
                    * Costs of fixing a problem early can quickly outweigh the cost of fixing it later. <br />
                    * Debugging processes are made easier. <br />
                    * Developers can quickly make changes to the code base. <br />
                    * Developers can also re-use code, migrating it to new projects. <br />
                </p>
            </div>
            <div className='my-10'>
                <h4 className='text-2xl font-semibold'>Q: React vs. Angular vs. Vue?

                </h4>
                <p>

                    <span className='font-semibold'>React</span> is just old enough to be mature and has a huge number of contributions from the community. It has gained widespread acceptance. The job market for React is really good, and the future for this framework looks bright.
                    React looks like a good choice for someone getting started with front-end JavaScript frameworks, startups, and developers who like some flexibility. The ability to integrate with other frameworks seamlessly gives it a great advantage for those who would like some flexibility in their code. <br />

                    <span className='font-semibold'>Angular</span> is the most mature of the frameworks, has good backing in terms of contributors and is a complete package.
                    However, the learning curve is steep and concepts of development in Angular may put off new developers.
                    Angular is a good choice for companies with large teams and developers who already use TypeScript. <br /> <br />

                    <span className='font-semibold'>Vue</span> is newest to the arena, without the backing of a major company.
                    However, it has done really well in the last few years to come out as a strong competitor for Angular and React, and especially so with the release of Vue 3.0. This is perhaps playing a role with a lot of Chinese giants like Alibaba and Baidu picking Vue as their primary front-end JavaScript framework. Vue should be your choice if you prefer simplicity, but also like flexibility.
                </p>
            </div>





        </div>
    );
};

export default Blog;