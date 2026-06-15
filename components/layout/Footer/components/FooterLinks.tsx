import Link from "next/link";
import { Space, Typography } from "antd";

const { Title } = Typography;

export default function FooterLinks() {
  return (
    <>
      <Title level={5} style={{ color: "white" }}>
        Quick Links
      </Title>

      <Space direction="vertical">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </Space>
    </>
  );
}