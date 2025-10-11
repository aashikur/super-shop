import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-blue-600 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center text-white mb-8">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Stay updated with our latest products, exclusive offers, and shopping tips. Join our community today!
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <form className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-sm text-white/80 text-center mt-4">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;