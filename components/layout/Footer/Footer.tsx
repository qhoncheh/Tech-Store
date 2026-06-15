"use client";

import { Row, Col, Divider } from "antd";
import FooterBrand from "./components/FooterBrand";
import FooterLinks from "./components/FooterLinks";
import FooterCategories from "./components/FooterCategories";
import FooterContact from "./components/FooterContact";
import FooterBottom from "./components/FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-14">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={8}>
            <FooterBrand />
          </Col>
          <Col xs={24} sm={12} md={5}>
            <FooterLinks />
          </Col>
          <Col xs={24} sm={12} md={5}>
            <FooterCategories />
          </Col>
          <Col xs={24} md={6}>
            <FooterContact />
          </Col>
        </Row>
        <Divider style={{ borderColor: "#1e293b" }} />
        <FooterBottom />
      </div>
    </footer>
  );
}
