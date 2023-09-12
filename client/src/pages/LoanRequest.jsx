import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import TermDropdown from "../components/TermDropdown";
import RequestList from "./RequestList";

const LoanRequest = () => {
  const [amount, setAmount] = useState(1000);
  const [term, setTerm] = useState(3);
  const userId = localStorage.getItem("userId");

  const getTerm = (term) => {
    setTerm(term);
  };
  const baseURI = process.env.REACT_APP_URI;
  const url = `${baseURI}/apply`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await axios.post(url, { term, amount, userId });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
  return (
    <>
      <Toaster />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[70%] md:w-[40%] mx-auto my-20"
      >
        <p className="text-lg font-semibold my-2">Amount</p>
        <input
          type="number"
          value={amount}
          placeholder="9999"
          onChange={(e) => setAmount(e.target.value)}
          className={`p-2 text-black font-semibold outline-none rounded-lg  border-2
        w-full mb-5 md:mb-3
        `}
        />
        <p className="text-lg font-semibold my-2">Term</p>
        <TermDropdown getTerm={getTerm} />

        <div className="flex flex-col my-5 mb-20">
          <button
            className={`bg-green-500 text-white font-semibold  shadow-sm rounded-lg p-2  transition `}
          >
            Request
          </button>
        </div>
      </form>
      <RequestList />
    </>
  );
};

export default LoanRequest;
