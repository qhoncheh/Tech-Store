"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Drawer, Badge, Space } from "antd";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const navItems = [
    { label: " Home", href: "/" },
    { label: "Product", href: "/products" },
    { label: " About Us", href: "/about" },
    { label: " Contact  ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-gray-800">
              Tech Store
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/cart">
              <Badge count={cartCount} showZero>
                <Button
                  type="text"
                  size="large"
                  icon={<ShoppingCartOutlined className="text-xl" />}
                  className="hover:text-blue-600"
                />
              </Badge>
            </Link>

            {/* Login/User Menu */}
            {!isLoggedIn ? (
              <Button
                type="primary"
                icon={<LoginOutlined />}
                onClick={() => {
                  setIsLoggedIn(true);
                }}
                className="hidden sm:flex items-center gap-2"
              >
                login
              </Button>
            ) : (
              <Space>
                <Button
                  type="text"
                  icon={<UserOutlined />}
                  className="hover:text-blue-600"
                >
                  Profile
                </Button>
                <Button
                  type="text"
                  danger
                  icon={<LogoutOutlined />}
                  onClick={() => setIsLoggedIn(false)}
                >
                  logout
                </Button>
              </Space>
            )}

            <Button
              type="text"
              size="large"
              icon={<MenuOutlined className="text-xl" />}
              onClick={() => setMobileMenuOpen(true)}
              className=" block md:hidden!"
            />
          </div>
        </div>
      </div>

      <Drawer
        title="منو"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {!isLoggedIn ? (
            <Button
              type="primary"
              size="large"
              icon={<LoginOutlined />}
              block
              onClick={() => {
                setIsLoggedIn(true);
                setMobileMenuOpen(false);
              }}
              className="mt-4"
            >
              login
            </Button>
          ) : (
            <Button
              type="primary"
              danger
              size="large"
              icon={<LogoutOutlined />}
              block
              onClick={() => {
                setIsLoggedIn(false);
                setMobileMenuOpen(false);
              }}
              className="mt-4"
            >
              logout
            </Button>
          )}
        </div>
      </Drawer>
    </header>
  );
}
