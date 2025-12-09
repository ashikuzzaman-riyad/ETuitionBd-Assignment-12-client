import React from 'react';

const Payments = () => {
    const payments = [
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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student Payment Table</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="table-auto w-full border-collapse text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Student Name</th>
              <th className="py-3 px-4">Class</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Amount (৳)</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{payment.id}</td>
                <td className="py-3 px-4">{payment.studentName}</td>
                <td className="py-3 px-4">{payment.class}</td>
                <td className="py-3 px-4">{payment.subject}</td>
                <td className="py-3 px-4">{payment.amount}</td>

                <td
                  className={`py-3 px-4 font-semibold ${
                    payment.status === "Paid" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {payment.status}
                </td>

                <td className="py-3 px-4">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;