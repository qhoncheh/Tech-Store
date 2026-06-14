import { Button } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";



export const Hero = () => {
  return (
    <section
      className="
      bg-gradient-to-r
      from-slate-900
      to-slate-700
      text-white
      py-24
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        lg:px-8
        "
      >
        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
        >
          <div>
            <Title level={1} style={{ color: "white" }}>
              Find Your Perfect Tech
            </Title>

            <Paragraph
              style={{
                color: "#d1d5db",
                fontSize: 18,
              }}
            >
              Discover premium laptops,
              smartphones and accessories
              at unbeatable prices.
            </Paragraph>

            <div className="mt-8 flex gap-4">
              <Button
                type="primary"
                size="large"
              >
                Shop Now
              </Button>

              <Button
                size="large"
              >
                Explore
              </Button>
            </div>
          </div>

          <div>
            <img
              src="/hero-laptop.png"
              alt="Laptop"
              className="
              w-full
              max-w-xl
              mx-auto
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};