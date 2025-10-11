import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Super Shop</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your trusted destination for quality products and exceptional shopping experience since 2020.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-gray-600">
                        At Super Shop, we strive to provide our customers with the finest selection of products
                        while ensuring an seamless shopping experience. Our commitment to quality and customer
                        satisfaction drives everything we do.
                    </p>
                </div>

                {/* Values Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
                        <p className="text-gray-600">We ensure all our products meet the highest standards of quality.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Trust</h3>
                        <p className="text-gray-600">Building lasting relationships through transparency and reliability.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
                        <p className="text-gray-600">Constantly evolving to meet our customers' changing needs.</p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-4">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;