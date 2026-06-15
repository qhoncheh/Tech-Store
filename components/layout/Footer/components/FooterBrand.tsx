import { Space, Typography, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

export default function FooterBrand() {
  return (
    <Space direction="vertical" size="middle">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
          <span className="font-bold text-lg">ST</span>
        </div>

        <Title level={4} style={{ color: "white", margin: 0 }}>
          Tech Store
        </Title>
      </div>

      <Space size="middle">
        <Button shape="circle" icon={<FacebookOutlined />} />
        <Button shape="circle" icon={<TwitterOutlined />} />
        <Button shape="circle" icon={<InstagramOutlined />} />
        <Button shape="circle" icon={<LinkedinOutlined />} />
      </Space>
    </Space>
  );
}