import { SectionTitle } from "@/components/ui/SectionTitle/section-title";
import { Row, Col } from "antd";
import { CategoryCard } from "./categories-card";


const categories = [
  {
    title: "Laptops",
    image: "/categories/laptop.jpg",
  },
  {
    title: "Smartphones",
    image: "/categories/mobile.jpg",
  },
  {
    title: "Tablets",
    image: "/categories/tablet.jpg",
  },
  {
    title: "Accessories",
    image: "/categories/accessories.jpg",
  },
];

export const Categories = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Shop By Category"
          subtitle="Browse our collections"
        />

        <Row gutter={[24, 24]}>
          {categories.map((item) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              key={item.title}
            >
              <CategoryCard {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};