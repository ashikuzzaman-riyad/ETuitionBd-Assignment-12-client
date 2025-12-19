import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import EmptyState from "../../shared/EmptyState";
import { MdOutlineInbox, MdPayment } from "react-icons/md";

const Payments = () => {
  
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payment = [],  } = useQuery({
  queryKey: ["payment", user?.email],
  enabled: !!user?.email, // 🔥 important
  queryFn: async () => {
    const res = await axiosSecure.get(
      `/payments?email=${user.email}`
    );
    return res.data;
  },
});
if(payment.length === 0) {
  return<>
  <EmptyState
  icon={MdPayment}
  title="No Payment Yet"
  description="You haven't Any payment."
  primaryAction={{
    label: "MY Tuitions",
    to: "/dashboard/my-tuitions",
  }}
/>;
  </>
} 


  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student Payment Table</h2>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="table-auto w-full border-collapse text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Student Name</th>
              <th className="py-3 px-4">Student Email</th>
              <th className="py-3 px-4">payment status</th>
              <th className="py-3 px-4">Subject</th>

              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {payment.map((payment) => (
              <tr
                key={payment.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{payment.id}</td>
                <td className="py-3 px-4">{payment.studentName}</td>
                <td className="py-3 px-4">{payment.studentEmail}</td>
                <td className="py-3 px-4">{payment.paymentStatus}</td>
                <td className="py-3 px-4">{payment.studentSubjects}</td>
                <td className="py-3 px-4">{payment.paidAt}</td>

                <td
                  className={`py-3 px-4 font-semibold ${
                    payment.status === "Paid"
                      ? "text-green-600"
                      : "text-red-500"
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
