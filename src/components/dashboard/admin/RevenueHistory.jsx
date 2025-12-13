import React from 'react';

const RevenueHistory = () => {
    const revenueHistory = [
  {
    _id: "1",
    studentName: "Riyad Hossen",
    studentSubjects: "Chemistry",
    studentClass: "4",
    paymentAmount: 500,
    status: "paid",      // paid / pending / failed
    date: "2025-12-13T10:56:03.265Z",
  },
  {
    _id: "2",
    studentName: "Sarah Khan",
    studentSubjects: "Physics",
    studentClass: "10",
    paymentAmount: 800,
    status: "pending",
    date: "2025-12-12T14:23:10.123Z",
  },
  {
    _id: "3",
    studentName: "Arif Ahmed",
    studentSubjects: "Mathematics",
    studentClass: "7",
    paymentAmount: 600,
    status: "paid",
    date: "2025-12-11T09:15:00.000Z",
  },
  {
    _id: "4",
    studentName: "Fatima Noor",
    studentSubjects: "Biology",
    studentClass: "9",
    paymentAmount: 700,
    status: "failed",
    date: "2025-12-10T12:40:00.000Z",
  },
];

    return (
       <div className="container mx-auto p-6">
  <h1 className="text-3xl font-bold mb-6 text-gray-800">
    Revenue History
  </h1>

  <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Student
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Subject
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Class
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Payment (Tk)
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {revenueHistory.map((rev) => (
          <tr key={rev._id} className="hover:bg-gray-50 transition">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {rev.studentName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {rev.studentSubjects}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {rev.studentClass}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">
              {rev.paymentAmount} Tk
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  rev.status === "paid"
                    ? "bg-green-100 text-green-800"
                    : rev.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {rev.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(rev.date).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
};

export default RevenueHistory;