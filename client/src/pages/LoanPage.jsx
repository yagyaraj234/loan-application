import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const LoanPage = () => {
  const [loan, setLoan] = useState(null);
  const { id } = useParams();
  const baseURI = process.env.REACT_APP_URI;
  const url = `${baseURI}/loandetails`;

  const getLoanDetails = async () => {
    try {
      const res = await axios.post(url, { id });
      setLoan(res.data[0]);
      console.log(res.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getLoanDetails();
  }, [id, url]);

  const generateDueDates = () => {
    if (!loan) return [];

    const dateString = loan.date;
    const originalDate = new Date(dateString);
    const numberOfDates = loan.term;

    const dateSequence = [];
    for (let i = 0; i < numberOfDates; i++) {
      const newDate = new Date(originalDate);
      newDate.setDate(newDate.getDate() + i * 7);
      dateSequence.push(newDate.toISOString().split("T")[0]);
    }

    return dateSequence;
  };

  const payAmount = loan?.installment.toFixed(2) || 0;
  const payurl = `${baseURI}/payInstallment`;

  const payInstallment = async () => {
    toast.loading("Processing");
    setTimeout(async () => {
      toast.remove();
      try {
        const res = await axios.post(payurl, { payAmount, id });
        toast.success(res.data.message);
        getLoanDetails();
      } catch (error) {
        console.log("Error", error);
      }
    }, 1000);
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col md:px-8 px-5">
        <p className="md:text-xl font-bold">
          Loan ID:{" "}
          <span className="font-medium text-green-500">{loan?._id}</span>
        </p>

        <div className="flex md:flex-col justify-between text-lg">
          <p>
            Loan Amount : <span>₹ {loan?.amount.toFixed(2)}</span>
          </p>
          <p>
            Remaining amount to be paid :{" "}
            <span>₹ {loan?.Remaining.toFixed(2) || 0}</span>
          </p>
        </div>
      </div>

      <p className="text-lg my-10 px-5 font-medium">Remaining Installment</p>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead>
          <tr>
            <th className="py-2 font-medium text-gray-900">S No.</th>
            <th className="whitespace-nowrap py-2 font-medium text-gray-900">
              Due Date
            </th>
            <th className="whitespace-nowrap py-2 font-medium text-gray-900">
              Amount
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {generateDueDates().map((date, index) => (
            <tr key={index}>
              <td className="py-2 font-medium text-center text-gray-900">
                {index + 1}
              </td>
              <td className="whitespace-nowrap py-2 font-medium text-center text-gray-900">
                {date}
              </td>
              <td className="whitespace-nowrap text-center py-2 font-medium text-gray-900">
                ₹ {payAmount}
              </td>
              <td>
                <button
                  className={`inline-block rounded ${
                    index !== 0
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  } px-4 py-2 text-xs font-medium text-white my-2 text-center`}
                  onClick={index === 0 ? payInstallment : undefined}
                  disabled={index !== 0}
                >
                  Pay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LoanPage;
