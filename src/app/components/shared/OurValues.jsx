import Container from '@/app/components/Container';
import { assets } from '@/lib/assets';
import Image from 'next/image';
import React from 'react';

const OurValues = () => {
    return (
        <Container>
           <div className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {([
                        {
                            title: "Quality First",
                            description: "We ensure every product meets our high standards of quality and authenticity.",
                            image:  assets.boy_with_laptop_image
                        },
                        {
                            title: "Customer Centric",
                            description: "Your satisfaction is our top priority. We're here to serve you 24/7.",
                            image: assets.girl_with_earphone_image
                        },
                        {
                            title: "Innovation",
                            description: "Constantly evolving and improving to provide the best shopping experience.",
                            image:  assets.girl_with_headphone_image
                        }
                    ]).map((value, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                            <div className="relative  aspect-[4/3] min-h-48">
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    fill
                                    className="object-cover "
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>        </Container>
    );
};

export default OurValues;