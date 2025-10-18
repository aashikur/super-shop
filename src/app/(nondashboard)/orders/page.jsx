'use client';

import Container from "@/app/components/Container";
import { orderDummyData } from "@/lib/assets";

export default function OrdersPage() {
    return (
        <Container className="mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

            <div className="flex gap-4 flex-col-reverse md:flex-row">
                {/* Left column */}
                <div className="space-y-6 flex-1">
                    {orderDummyData.map((order) => (
                        <div
                            key={order._id}
                            className="border border-gray-200 rounded-2xl p-5 shadow-sm "
                        >
                            {/* Header */}
                            <div className="flex flex-wrap justify-between items-center  border-gray-200  border-b pb-3 mb-3">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Order ID: <span className="font-medium">{order._id}</span>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Date: {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                                        {order.status}
                                    </span>
                                    <p className="text-sm font-semibold mt-1">
                                        Total: ${order.amount.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            {/* Items */}
                            <div className="space-y-4">
                                {order.items.map((item) => (
                                    <div key={item._id} className="flex gap-4 items-center">
                                        <img
                                            src={item.product.image[0]}
                                            alt={item.product.name}
                                            className="w-20 h-20 object-cover rounded-lg border  border-gray-200 "
                                        />
                                        <div className="flex-1">
                                            <h2 className="font-medium">{item.product.name}</h2>
                                            <p className="text-sm text-gray-500">{item.product.category}</p>
                                            <p className="text-sm mt-1">
                                                Qty: {item.quantity} × ${item.product.offerPrice}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Address */}
                            <div className="border-t  border-gray-200  mt-4 pt-3 text-sm text-gray-600">
                                <p className="font-medium mb-1">Delivery Address:</p>
                                <p>{order.address.fullName}</p>
                                <p>{order.address.area}, {order.address.city}, {order.address.state}</p>
                                <p>Pincode: {order.address.pincode}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Right Column  */}
                <div className="flex-1 mb-10 md:max-w-[450px]">
                    {/* Sidebar Summary */}
                    <div className="">
                        <div className="border border-gray-200 rounded-2xl p-6 shadow-sm bg-white  flex flex-col justify-between gap-4">
                            {/* Summary Header */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800  mb-2">
                                    Order Summary
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {orderDummyData.length} order{orderDummyData.length > 1 ? 's' : ''} found
                                </p>
                            </div>

                            {/* Total Price */}
                            <div className="flex justify-between items-center border-t border-gray-200  pt-4 mt-2">
                                <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                                    Total:
                                </p>
                                <p className="text-lg font-semibold text-gray-800 ">
                                    $
                                    {orderDummyData
                                        .reduce((sum, order) => sum + order.amount, 0)
                                        .toFixed(2)}
                                </p>
                            </div>

                            {/* Checkout Button */}
                            <button
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-sm font-medium py-2.5 rounded-xl shadow-sm transition-all duration-200"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    );
}
