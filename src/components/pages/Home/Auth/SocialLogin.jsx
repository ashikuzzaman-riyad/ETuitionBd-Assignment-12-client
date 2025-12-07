import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className="btn hover:bg-green-500 flex justify-center items-center">
          <button className="flex  gap-3 justify-center items-center">
            {" "}
            <FcGoogle size={30} />
            Google Login
          </button>
        </div>
    );
};

export default SocialLogin;