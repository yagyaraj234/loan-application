import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ActiveLoans = () => {
  const [resData, setResData] = useState([]);
  const baseURI = process.env.REACT_APP_URI;
  const url = `${baseURI}/loan-requests`;
  const user = localStorage.getItem("userId");

  const getRequestList = async () => {
    const res = await axios.post(url, { user });
    setResData(res.data);
  };

  useEffect(() => {
    getRequestList();
  }, []);
  return (
    <>
      <div className="flex justify-between md:px-10 px-2">
        <p className="md:text-3xl text-lg font-semibold  my-5 ">Active Loans</p>

        <button className="bg-green-500 hover:bg-green-600 rounded-md text-white font-medium px-2 py- h-10 my-5">
          <Link to="/request-loans" className="">
            New Loan
          </Link>
        </button>
      </div>
      <div className="overflow-hidden flex justify-between items-center w-[100vw] min-h-[20vh]">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
          <thead className="">
            <tr>
              <th className=" py-2 font-medium text-gray-900">S No.</th>
              <th className="whitespace-nowrap  py-2 font-medium text-gray-900">
                Loan Id
              </th>
              <th className="whitespace-nowrap  py-2 font-medium text-gray-900">
                Applied Date
              </th>
              <th className="whitespace-nowrap  py-2 font-medium text-gray-900">
                Amount
              </th>

              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {resData.map((item, index) => {
              if (item.status === "active") {
                return (
                  <tr key={index} className="">
                    <td className=" py-2 font-medium text-center text-gray-900">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap  py-2 font-medium text-center text-gray-900">
                      {item._id.slice(0, 8)}
                    </td>
                    <td className="whitespace-nowrap text-center py-2 font-medium text-gray-900">
                      {item.date.slice(0, 10)}
                    </td>
                    <td className="whitespace-nowrap text-center py-2 font-medium text-gray-900">
                      ₹ {item.amount}
                    </td>

                    <Link
                      to={`/loans/${item._id}`}
                      className={`inline-block rounded  px-4 py-2 text-xs font-medium text-white my-2 text-center ${
                        item.Remaining <= 1 ?
                        "bg-gray-500 hover:bg-red-500 cursor-not-allowed":"bg-green-600 hover:bg-green-700 "
                      }`}
                    >
                      {item.Remaining <= 1 ? "Closed" : "View"}
                    </Link>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ActiveLoans;
