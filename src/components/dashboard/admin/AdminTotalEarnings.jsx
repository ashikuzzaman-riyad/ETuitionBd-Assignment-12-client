import { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign, Users, CreditCard } from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdPayment } from "react-icons/md";
import EmptyState from "../../shared/EmptyState";
import Loading from "../../shared/Loading";

export default function AdminTotalEarnings() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    axiosSecure
      .get("/payments", {
        
      })
      .then((res) => {
        setPayments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosSecure]);

  if (loading) {
    return <Loading></Loading>
  }

  // calculations
  const totalEarning = payments.reduce(
    (sum, p) => sum + (p.amount || 0),
    0
  );

  const totalPayments = payments.length;

  const totalStudents = new Set(
    payments.map((p) => p.customerEmail)
  ).size;
  if(payments.length === 0) {
    return <>
    <EmptyState
  icon={MdPayment}
  title="No Earning Available"
  description="No earning available at the moment.
Please check back later or try adjusting your filters!"
  primaryAction={{
    label: "User Management",
    to: "/dashboard/user-management",
  }}
  
/>;
    </>
  }
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Admin – Total Earnings
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Earnings */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div className="p-4 bg-green-100 rounded-full">
            <DollarSign className="w-7 h-7 text-green-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Earnings</p>
            <h3 className="text-2xl font-bold">
              ${totalEarning}
            </h3>
          </div>
        </div>

        {/* Total Payments */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div className="p-4 bg-blue-100 rounded-full">
            <CreditCard className="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Payments</p>
            <h3 className="text-2xl font-bold">
              {totalPayments}
            </h3>
          </div>
        </div>

        {/* Total Students */}
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div className="p-4 bg-purple-100 rounded-full">
            <Users className="w-7 h-7 text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500">Total Students</p>
            <h3 className="text-2xl font-bold">
              {totalStudents}
            </h3>
          </div>
        </div>
      </div>

      {/* Payments Table */}
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
              <tr
                key={p._id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 text-gray-600">
                  {p.studentEmail}
                </td>
                <td className="px-4 py-3">
                  {p.studentSubjects}
                </td>
                <td className="px-4 py-3 font-semibold">
                  ${p.amount}
                </td>
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
                <td className="px-4 py-3 text-gray-500">
                  {new Date(p.paidAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
