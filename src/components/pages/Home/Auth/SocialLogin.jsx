import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../../hooks/useAuth';

const SocialLogin = () => {
  const {googleSignIn} = useAuth()
  const handleGoogleLogin =() =>{
    googleSignIn()
    .then(res => {
      console.log(res.user)
    }).catch(error => {
      console.log(error.message)
    })
  }
    return (
        <div className="btn hover:bg-green-500 flex justify-center items-center">
          <button onClick={handleGoogleLogin} className="flex  gap-3 justify-center items-center">
            {" "}
            <FcGoogle size={30} />
            Google Login
          </button>
        </div>
    );
};

export default SocialLogin;