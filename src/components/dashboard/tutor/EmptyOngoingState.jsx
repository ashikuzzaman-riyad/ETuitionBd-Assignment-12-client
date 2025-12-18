import { Player } from "@lottiefiles/react-lottie-player"; // Optional: for animation
import { FaInbox } from "react-icons/fa";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { Link } from "react-router";

const EmptyOngoingState = () => {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-base-100 rounded-[2rem] border-2 border-dashed border-base-300 transition-all">
      {/* Icon Container with Glow */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />
        <div className="relative bg-green-50 p-6 rounded-full border border-green-100 shadow-inner">
          <MdOutlineHourglassEmpty className="size-16 text-green-600 animate-pulse" />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-sm space-y-2">
        <h3 className="text-2xl font-black text-base-content tracking-tight">
          No Ongoing Tuitions
        </h3>
        <p className="text-base-content/60 font-medium">
          It looks like you don't have any active sessions right now. 
          Check your applied list or start a new application!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-3">
        <Link to='/dashboard/apply-tuitions' className="btn btn-primary btn-md rounded-2xl px-8 shadow-lg shadow-green-500/20 normal-case">
          Find Tuitions
        </Link>
        <Link to="/dashboard/my-application" className="btn btn-ghost bg-base-200/50 hover:bg-base-200 rounded-2xl px-6 normal-case">
          View History
        </Link>
      </div>
    </div>
  );
};

export default EmptyOngoingState;