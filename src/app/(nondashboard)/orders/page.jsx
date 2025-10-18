'use client';

import { orderDummyData } from "@/lib/assets";

export default function OrdersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      <div className="space-y-6">
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
    </div>
  );
}
