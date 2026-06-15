import { Space, Typography } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function FooterContact() {
  return (
    <>
      <Title level={5} style={{ color: "white" }}>
        Contact
      </Title>

      <Space direction="vertical">
        <Text style={{ color: "#94a3b8" }}>
          <PhoneOutlined /> +49 (555) 123-4567
        </Text>

        <Text style={{ color: "#94a3b8" }}>
          <MailOutlined /> info@techstore.com
        </Text>

        <Text style={{ color: "#94a3b8" }}>
          <EnvironmentOutlined /> Silicon Valley, CA
        </Text>
      </Space>
    </>
  );
}