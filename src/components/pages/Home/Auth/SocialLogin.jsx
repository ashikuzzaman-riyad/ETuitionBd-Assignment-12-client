import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
  const navigate = useNavigate()
  const {googleSignIn} = useAuth()
  const axiosSecure = useAxiosSecure()
  const handleGoogleLogin =() =>{
    googleSignIn()
    .then(result => {
      console.log(result.user)

        const userInfo = {
                    role: 'student',
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log('user data has been stored', res.data)
                        navigate(location.state || '/');
                    })

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