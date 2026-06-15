import { SectionTitle } from "@/components/ui/SectionTitle/section-title";
import { Row, Col } from "antd";
import { CategoryCard } from "./categories-card";

const categories = [
  {
    title: "Laptops",
    image: "/lb.png",
  },
  {
    title: "Smartphones",
    image: "/phones.png",
  },
  {
    title: "Tablets",
    image: "/tablet.png",
  },
];

export const Categories = () => {
  return (
    <section className="py-20 bg-white"> 
      <div className="mx-auto max-w-7xl px-6 text-gray-800 text-end">
        <SectionTitle
          title="Shop By Category"
          subtitle="Browse our collections"

        />

        <Row gutter={[24, 24]} justify="center">
          {categories.map((item) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              key={item.title}
              style={{ display: 'flex', justifyContent: 'center' }} 
            >
              <CategoryCard {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
