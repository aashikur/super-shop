import React from 'react';
import Container from '@/app/components/Container';
import { FaShoppingCart, FaTruck, FaCreditCard } from 'react-icons/fa';

const Checkout = () => {
    return (
        <Container>
            <div className="py-8">
                <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Shipping Information */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <FaTruck className="text-blue-600" />
                                Shipping Information
                            </h2>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>
                            </form>
                        </div>
<div>
    sss
</div>
                        {/* Payment Information */}
                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <FaCreditCard className="text-blue-600" />
                                Payment Method
                            </h2>
                            <div className="space-y-3">
                                <label className="flex items-center p-4 border border-gray-200 rounded-md cursor-pointer hover:border-blue-500">
                                    <input type="radio" name="payment" className="mr-3" />
                                    <span>Credit/Debit Card</span>
                                </label>
                                <label className="flex items-center p-4 border border-gray-200 rounded-md cursor-pointer hover:border-blue-500">
                                    <input type="radio" name="payment" className="mr-3" />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg border border-gray-100 h-fit">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <FaShoppingCart className="text-blue-600" />
                            Order Summary
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">$99.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium">$5.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-medium">$10.00</span>
                            </div>
                            <div className="border-t pt-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">$114.00</span>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Checkout;