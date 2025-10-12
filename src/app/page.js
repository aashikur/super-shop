import Banner from "@/app/components/Banner";
import Newsletter from "@/app/components/home/Newsletter";
import PopularProducts from "@/app/components/home/PopularProducts";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import OurValues from "@/app/components/shared/OurValues";
import ContactPage from "@/app/contact/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner />

      {/* Services Section */}


      {/* Featured Products Section */}
      <PopularProducts />

      {/* Why Choose us  */}
      <WhyChooseUs />


      {/* Our Values at  */}
      <div className="pt-16"></div>
      <OurValues />

      <ContactPage />
      {/* CTA Newsletter */}
      <Newsletter />


    </div>
  );
}
