import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[750px] bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mt-12 mb-6">
        About This Application
      </h1>
      <p className="text-lg text-gray-700 text-center">
        This application is designed using React for a responsive user
        interface, Redux for efficient state management, Ant Design for a
        polished and intuitive layout, and Tailwind CSS for customizable
        styling.
      </p>
      <p className="text-lg text-gray-700 text-center mt-4">
        Stay organized and productive with our sleek To-Do Task App!
      </p>
      <div className="mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
