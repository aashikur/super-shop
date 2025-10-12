import Container from '@/app/components/Container';
import Button from '@/app/ui/Button';
import React from 'react';

const Newsletter = () => {
    return (
        <Container>
            <div className="my-16">
                <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 shadow-sm">
                    {/* Background Pattern - Optional decorative element */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-gray-600">
                                Join our subscribers list to get the latest news, updates, and special offers delivered directly to your inbox.
                            </p>
                        </div>

                        {/* Subscription Form */}
                        <form className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Button text={'Subscribe'}
                                    type='outline'

                                    className=" border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 items-center py-3"
                                >

                                </Button>
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Newsletter;