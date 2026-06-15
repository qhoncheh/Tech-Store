import Link from "next/link";
import { Space, Typography } from "antd";

const { Title } = Typography;

export default function FooterCategories() {
  return (
    <>
      <Title level={5} style={{ color: "white" }}>
        Categories
      </Title>

      <Space direction="vertical">
        <Link href="/products?category=phones">Smartphones</Link>
        <Link href="/products?category=tablets">Tablets</Link>
        <Link href="/products?category=laptops">Laptops</Link>
        <Link href="/products?category=accessories">Accessories</Link>
      </Space>
    </>
  );
}