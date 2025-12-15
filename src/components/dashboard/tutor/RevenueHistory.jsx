import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useAuth } from "../../hooks/useAuth";

export default function RevenueHistory() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure()

  // replace with tutor's email from auth
const {user} = useAuth()

  useEffect(() => {
    axiosSecure
      .get(`/payments?tutorEmail=${user.tutorEmail}`, {
        
      })
      .then((res) => {
        setPayments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user.tutorEmail, axiosSecure]);

  if (loading) return <p className="p-6">Loading revenue history...</p>;

  const totalRevenue = payments.reduce((sum, p) => sum + (p.amount || 0), 0) * 0.9;


  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-green-600">
        Tutor Revenue History
      </h2>

      <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
        <p className="text-gray-500 font-semibold">Total Revenue Earned:</p>
        <h3 className="text-2xl font-bold text-green-600">${totalRevenue}</h3>
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Student Email</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Paid Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p, index) => (
              <tr key={p._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{p.studentEmail}</td>
                <td className="px-4 py-3">{p.studentSubjects}</td>
                <td className="px-4 py-3 font-semibold">${p.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      p.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {p.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-3">{new Date(p.paidAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
