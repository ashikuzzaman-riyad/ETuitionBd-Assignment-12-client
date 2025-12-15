import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllPaymentHistory = () => {
  const paymentsss = [
    {
      id: 1,
      studentName: "Riyad Hossen",
      class: "8",
      subject: "Math",
      amount: 3000,
      status: "Paid",
      date: "2025-01-02",
    },
    {
      id: 2,
      studentName: "Samiul Islam",
      class: "6",
      subject: "English",
      amount: 3500,
      status: "Pending",
      date: "2025-01-05",
    },
    {
      id: 3,
      studentName: "Nusrat Jahan",
      class: "10",
      subject: "Physics",
      amount: 4500,
      status: "Paid",
      date: "2025-01-10",
    },
  ];
  const axiosSecure = useAxiosSecure();
  
  const { data: payments = [] } = useQuery({
    queryKey: ["payment", ],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      return res.data;
    },
  });

  return (
    <div className="p-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Student Payments
  </h2>

  <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
    <table className="min-w-full text-sm text-gray-700">
      <thead className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <tr>
          <th className="px-5 py-4 text-left">#</th>
          <th className="px-5 py-4 text-left">Student</th>
          <th className="px-5 py-4 text-left">Email</th>
          <th className="px-5 py-4 text-left">Subject</th>
          <th className="px-5 py-4 text-left">Amount</th>
          <th className="px-5 py-4 text-left">Status</th>
          <th className="px-5 py-4 text-left">Paid At</th>
        </tr>
      </thead>

      <tbody>
        {payments.map((payment, index) => (
          <tr
            key={payment._id}
            className="border-b last:border-none hover:bg-gray-50 transition"
          >
            <td className="px-5 py-4 font-medium">
              {index + 1}
            </td>

            <td className="px-5 py-4">
              {payment.studentName || "N/A"}
            </td>

            <td className="px-5 py-4 text-gray-500">
              {payment.studentEmail}
            </td>

            <td className="px-5 py-4">
              {payment.studentSubjects}
            </td>

            <td className="px-5 py-4 font-semibold">
              ${payment.amount}
            </td>

            <td className="px-5 py-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  payment.paymentStatus === "paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {payment.paymentStatus}
              </span>
            </td>

            <td className="px-5 py-4 text-gray-500">
              {new Date(payment.paidAt).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default AllPaymentHistory;
