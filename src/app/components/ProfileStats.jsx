import React from 'react';
import { CiChat1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";


const ProfileStats = () => {
    return (
        <>

            <StarBox icon={<CiBookmark />
            } number={5} label='Orders' />
            <StarBox icon={<CiUser />} number={0} label='Reviews' />
            <StarBox icon={<CiChat1 />
            } number={0} label='Messages' />
        </>
    );
};

export default ProfileStats;



export const StarBox = ({ icon, number, label }) => {
    return (
        <>
            <div className='flex flex-col items-center py-4  justify-center md:mt-0 -mt-4'>

                <span className='text-gray-700 text-lg md:text-2xl'>
                    {icon}
                </span>
                <span className='text-2xl font-bold mt-2 hidden'> {number}</span>
                <span className='text-sm text-gray-500'>{label}</span>
            </div>

        </>
    );
};