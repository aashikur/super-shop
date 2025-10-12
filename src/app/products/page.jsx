import React from 'react';
import PopularProducts from '../components/home/PopularProducts';
import Container from '../components/Container';

const page = () => {
    return (
            <PopularProducts text="All Products" viewAll={false}/>
    );
};

export default page;