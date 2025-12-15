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
