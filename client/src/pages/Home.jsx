import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[80vh] lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Unlock Your
            <strong className="font-extrabold text-green-700 sm:block">
              Financial Potential.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Secure the Future You Deserve with Our Hassle-Free Loans
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
              to="/login"
            >
              Get Started
            </Link>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
