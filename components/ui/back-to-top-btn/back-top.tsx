'use client';

import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

export default function BackToTop() {
  return (
    <FloatButton.BackTop
      icon={<ArrowUpOutlined className="text-black hover:text-white text-lg" />}
      className="fixed bottom-6 right-6 bg-[#001D3D] border-2 border-gray-600 shadow-lg hover:bg-[#06284d] hover:text-white"
      tooltip={<div> Go Top</div>}
    />
  );
}
