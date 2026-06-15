import { Row, Col, Typography } from "antd";

const { Text } = Typography;

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <Row justify="center" align="middle">
      <Col xs={24} md={8}>
        <Text
          style={{
            color: "#94a3b8",
            display: "block",
            textAlign: "center",
          }}
        >
          © {year} Tech Store. All rights reserved
        </Text>
      </Col>
    </Row>
  );
}