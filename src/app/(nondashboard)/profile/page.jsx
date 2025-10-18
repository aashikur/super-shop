import ProfileStats from '@/app/components/ProfileStats';
import Container from '@/app/components/Container';
import RoundedBox from '@/app/components/RoundedBox';
import Link from 'next/link';
import React from 'react';
import { BiHome } from 'react-icons/bi';
import { IoDocumentAttach } from 'react-icons/io5';
import { FaBehance, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { assets } from '@/lib/assets';
import Image from 'next/image';
import ProfilePicture from '@/app/components/navbar/ProfilePicture';

const Profile = () => {
    return (
        <Container className='mt-5'>
            {/* box 1 */}
            <RoundedBox className=''>
                <h1 className=' font-bold'>Profile</h1>
                <div className='flex gap-2 items-center'>
                    <Link href="/"><BiHome size={20} /> </Link>/ <span className='px-4 py-1 rounded-2xl bg-blue-200 text-sm text-blue-900'>User Profile</span>
                </div>
            </RoundedBox>

            {/* box 2  */}
            <div className={'relative pt-0 pb-4 pl-0 pr-0 overflow-hidden rounded-2xl '}>
                <div className='min-h-[150px] md:min-h-[300px] border-b border-gray-200 w-full bg-gradient-to-tr from-pink-100 to bg-blue-200'>
                    {/* Bg-Image  */}
                    <img src={`${assets.cover}`} alt="" />
                </div>

                {/* profile raw  */}
                <div className='min-h-[120px] border border-gray-200 '>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='flex justify-center items-center flex-1 gap-4 md:gap-10 px-4'>
                            <ProfileStats />
                        </div>

                        <div className='flex-1 order-first md:order-0 self-stretch flex flex-col justify-center items-center  relative min-h-[130px] '>
                            <div className='bg-amber-50 rounded-full absolute 
                        top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-25 h-25'>
                         <ProfilePicture/>

                            </div>
                            <p className='mt-12 '> Ashikur Rahaman</p>
                            <p className='text-sm text-gray-400'>5B6hD@example.com</p>
                        </div>
                        <div className='flex-1  flex justify-end px-4'>
                            <ul className=' flex gap-4 items-center text-2xl pb-5'>

                                <li className='text-blue-600'>   <FaFacebook /> </li>
                                <li className='text-sky-600'>   <FaTwitter /></li>
                                <li className='text-pink-600'>  <FaBehance /></li>
                                <li className='text-red-600'>   <FaYoutube /></li>
                                <li className='-mt-3  w-[160px]'> <Link className='text-sm px-8 py-2 rounded-lg bg-blue-400 text-white ' href="/add-product"> Add a Product</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex gap-4'>
                <RoundedBox className='flex-1 max-w-[320px] p-5'>
                    <div>
                        <h1 className='text-lg font-bold mb-2'>About the Merchant</h1>
                        <p className='text-sm text-gray-500 mb-4'>
                            A trusted merchant in Dhaka with over 15 years of experience in electronics and home goods. Started the business in 2008, focusing on quality products and customer satisfaction. Known for fast shipping and responsive service.
                        </p>

                        <ul className='flex flex-col gap-1 text-sm text-gray-600'>
                            <li>Shop Name: <span className='font-medium'>TechHub Electronics</span></li>
                            <li>Merchant Level: <span className='font-medium'>Level 3</span></li>
                            <li>Years of Experience: <span className='font-medium'>15+</span></li>
                            <li>Total Products: <span className='font-medium'>3,200+</span></li>
                            <li>Location: <span className='font-medium'>Dhaka, Bangladesh</span></li>
                            <li>Customer Rating: <span className='font-medium'>4.8 / 5 ⭐</span></li>
                        </ul>
                    </div>
                </RoundedBox>

                {/* Search / Filter Products */}
                <RoundedBox className='flex-1 p-5'>
                    <div className='w-full'>
                        <input
                            type="text"
                            placeholder='Search products in TechHub...'
                            className='w-full border border-gray-200 rounded-2xl px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        <div className='flex flex-col gap-3 text-sm text-gray-600'>
                            <p className='font-medium'>Popular Categories:</p>
                            <ul className='flex flex-wrap gap-2'>
                                <li className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>Headphones</li>
                                <li className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>Smartphones</li>
                                <li className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>Laptops</li>
                                <li className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>Accessories</li>
                            </ul>
                        </div>
                    </div>
                </RoundedBox>
            </div>
        </Container>
    );
};

export default Profile;