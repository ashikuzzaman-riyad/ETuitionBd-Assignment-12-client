import React from 'react';
import { BsBookHalf } from 'react-icons/bs';

import { Link } from 'react-router';

const Logo = () => {
    return (
       
         <div className='flex gap-5 text-green-600 items-center'>
            <BsBookHalf  size={40}/>
            <h1 className="  text-3xl font-extrabold   -ms-2.5">E-TuitionBD</h1>
        </div>
        
    );
};

export default Logo;