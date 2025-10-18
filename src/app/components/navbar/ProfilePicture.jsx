"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const ProfilePicture = () => {
    const { data: session, status } = useSession();

    return (
        <Image
            src={session?.user.image}
            alt={session?.user.name[0]}
            width={100}
            height={100}
            className="rounded-full " />
    );
};

export default ProfilePicture;