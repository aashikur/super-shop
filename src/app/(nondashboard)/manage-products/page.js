"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Container from '@/app/components/Container';
const AddProductPage = () => {


    const { data: session } = useSession();
    const productAddedBy = session?.user?.email || "";


    return (
        <Container className='py-16'>
            manage products page - {productAddedBy}
        </Container>
    );
};
export default AddProductPage;