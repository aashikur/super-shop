import Banner from "@/app/components/Banner";
import Newsletter from "@/app/components/home/Newsletter";
import PopularProducts from "@/app/components/home/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner/>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Free Shipping", icon: "🚚" },
              { title: "24/7 Support", icon: "💬" },
              { title: "Easy Returns", icon: "↩️" },
              { title: "Secure Payment", icon: "🔒" },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
            <PopularProducts/>

      {/* CTA Newsletter */}
        <Newsletter/>


    </div>
  );
}
