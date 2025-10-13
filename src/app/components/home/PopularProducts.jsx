"use client"

import Container from '@/app/components/Container';
import { productsDummyData } from '@/lib/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdStar } from "react-icons/io";
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';


const PopularProducts = ({ text = 'Popular Products', viewAll = true , limits = "" }) => {
    const [isBooked, setIsBooked] = React.useState(false)
    // console.log(productsDummyData);
    
    const display = limits ? productsDummyData.slice(0, limits) : productsDummyData;
    return (
        <Container className=' py-14'>
            <h1 className='text-2xl font-bold'>
                {text}
            </h1>
            <div className='mt-8'>
                <div className='grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 '>
                    {
                        display.map(product => <div
                            // onClick={() => {alert('clicked', product.name)}}
                            className='flex flex-col max-w-[200px] w-full  relative cursor-pointer'
                            key={product._id}>

                            <span onClick={() => { setIsBooked(isBooked) }} className='absolute top-2 right-2 text-sm text-blue-500 z-10 border border-blue-300 p-1 rounded-full'>
                                {isBooked ? <IoBookmark /> : <IoBookmarkOutline />}


                            </span>

                            <Link href={`/products/${product._id}`} className='flex flex-col gap-2'>
                                <Image
                                    className='bg-gray-100 rounded-md hover:scale-105 duration-300'
                                    src={product.image[0]} alt={product.name} width={300} height={300} />

                                <h2 className='font-bold text-base truncate'>{product.name}</h2>
                                <p className='text-sm text-gray-500 truncate'>{product.description}</p>
                                <div className='flex justify-between items-center'>
                                    <p>4.5</p>
                                    <p className='flex text-blue-600'>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar className='opacity-50' />

                                    </p>
                                </div>

                                <div className='flex justify-between items-center w-full'>
                                    <p className='font-bold'>${product.price}</p>
                                    <button className='border border-gray-300 px-4 py-1 text-xs rounded-full text-gray-500 cursor-pointer'>Buy Now</button>
                                </div>
                            </Link>

                        </div>)
                    }
                </div>
            </div>

            {viewAll && <div className='flex justify-center mt-8'>
                <Link href="/products"  className='border border-gray-300 px-4 py-1  rounded-full text-gray-500'>
                    View All
                </Link>
            </div>}
        </Container>
    );
};

export default PopularProducts;