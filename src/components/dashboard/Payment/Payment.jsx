import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading";

const Payment = () => {
  const { tuitionId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: tuition = [], isLoading } = useQuery({
    queryKey: ["tuition", tuitionId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tutor-apply/${tuitionId}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading></Loading>;
  const handlePayment = async () => {
    const paymentInfo = {
      cost: tuition.expectedSalary,
      studentEmail: tuition.studentEmail,
      tuitionId: tuition._id,
      studentSubjects: tuition.studentSubjects,
    };
    const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
    console.log(res.data)
    window.location.href = res.data.url
  };
  return (
    <div>
      pay for {tuition.studentSubjects}
      <br />
      <button onClick={handlePayment} className="bg-amber-400 p-2 px-5">
        pay
      </button>
    </div>
  );
};

export default Payment;
