import Container from '@/app/components/Container';
import { FaShippingFast, FaHeadset, FaUndoAlt, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            title: "Free & Fast Shipping",
            description: "Enjoy free shipping on all orders with our reliable delivery service across the country",
            icon: <FaShippingFast className="w-10 h-10 text-blue-600" />
        },
        {
            title: "24/7 Customer Support",
            description: "Our dedicated support team is always here to help you with any questions or concerns",
            icon: <FaHeadset className="w-10 h-10 text-blue-600" />
        },
        {
            title: "Easy Returns Policy",
            description: "Shop with confidence with our hassle-free 30-day return and refund policy",
            icon: <FaUndoAlt className="w-10 h-10 text-blue-600" />
        },
        {
            title: "Secure Payments",
            description: "Your transactions are protected with industry-leading encryption and security measures",
            icon: <FaShieldAlt className="w-10 h-10 text-blue-600" />
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Why Choose Super Shop?
                    </h2>
                    <p className="text-gray-600">
                        We're committed to providing the best shopping experience with these amazing benefits
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center max-w-[300px] mx-auto">
                                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default WhyChooseUs;