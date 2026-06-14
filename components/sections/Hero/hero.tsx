import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Image from "next/image"; 

export const Hero = () => {
  return (
    <section className="bg-linear-to-r from-slate-900 to-slate-700 text-white py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" grid lg:grid-cols-2  gap-12 items-center ">
          <div>
            <Title level={1} style={{ color: "white" }}>
              Find Your Perfect Tech
            </Title>
            <Paragraph
              style={{ color: "#d1d5db", fontSize: 18, }}>
              Discover premium laptops,
              smartphones 
              at unbeatable prices.
            </Paragraph>
            <div className="mt-8 flex gap-4">
              <Button type="primary" size="large">
                Shop Now
              </Button>
              <Button size="large">
                Explore
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-xl mx-auto aspect-video">
            <Image
              src="/pic.jpg"
              alt="Laptop"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
