import React, { useEffect, useState } from "react";
import axios from "axios";

const RequestList = () => {
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
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              S No.
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Date Applied
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Amount
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 ">
          {resData.map((item, index) => (
            <tr className="odd:bg-gray-50" key={item._id}>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center ">
                {item?.date.slice(0, 10)}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {item.amount}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                {item.status === "active" ? (
                  <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Active</p>
                  </span>
                ) : (
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                    Pending
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestList;
