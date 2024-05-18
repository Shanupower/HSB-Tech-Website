import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import hsbLogo from "../../assets/hsb-logo.png";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useMediaQuery } from "@mui/material";
const items = [
  {
    key: "What We Do",
    label: "What We Do",
    icon: (
      <img
        style={{ width: "20px", height: "20px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
        alt=""
      />
    ),
    children: [
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/services">
            Services
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/web development"
          >
            Web Development
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/mobile development"
          >
            Mobile Development
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/quality assurance"
          >
            Quality Assurance & Software Testing
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/uiux development"
          >
            UI UX Design
          </Link>
        ),
      },
      {
        key: "6",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/fullstack development"
          >
            Full Stack Development
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/busines analysis services"
          >
            Business Analysis
          </Link>
        ),
      },
    ],
  },
  {
    key: "Industries",
    label: "Industries ",
    icon: (
      <img
        style={{ width: "20px", height: "20px" }}
        src="data:image/png;base64,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"
        alt=""
      />
    ),
    children: [
      {
        key: "1",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/industries/manufacturing"
          >
            Manufacturing
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/fintech">
            Fintech
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/healthcare">
            Health Care
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/education">
            Education
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/telecom">
            Telecom
          </Link>
        ),
      },
      {
        key: "6",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/realEstate">
            Real Estate
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/ecommerce">
            Ecommerce
          </Link>
        ),
      },
      {
        key: "8",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/industries/travel-hospitality"
          >
            Travel & Hospitality
          </Link>
        ),
      },
      {
        key: "9",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/bsfi">
            BSFI
          </Link>
        ),
      },
    ],
  },
  {
    key: "Technologies",
    label: "Technologies ",
    icon: (
      <img
        style={{ width: "20px", height: "20px" }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEX///8AAAClpaVNTU3a2tolJSUQEBBDQ0Py8vJ2dnb7+/vIyMgqKiqHh4fAwMD29vYvLy+enp7s7Oytra3T09Pl5eVkZGRcXFx+fn4aGhoJCQk9PT26urqVlZVVVVU3NzdtbW0RPfhKAAAJCUlEQVR4nM1c12KrMAxlJWxIGAkJ8/+/skWywQab0bL0cm8SCgdJlo9k2YryTwnd0ta9u3p7Rv+91WZiVCqV2jobDJFEZaQKz4YDEtYsKDU5Gw/Ik6C55Y/2n3h0QZimh7ua3kJ5G0YaATxt8HPk63WdN+6hmKxWPzWoQhOAKqhZ7SOdLfm07q1IQMW9s+kHggJVNBJQBjsEyuNAPfvnjUH5gMZ7fNt/HulhoOC5rhhUBOOxtEgoC47C5Lzbx6EORqMvBT11Px1mv7D1czWcAPVu/+e2/8uOAgXP1Z0JUGo7HdqiELaPJJrtMSoYgQphptYDt1R7z9tCIjfWXME0ERplfSeDXZOAQtdX1e/Gc/UTpttPObhhpPV0RVULGSgnZ67aSlHRi94xZ2f/JPuyUfEVykApaU8htvIoy+yf/H32kFhEdVZQYieakKMGL7tvpaeEZ0oVRCPj3X+TNzFr1lKoEGYe2kCMGz661IhDe4Fi+T0kOxjMG2JQEKLsjTC5EBbVh/Hrrw31ns6XdG08lvYHZSCm3IBPDAWBbwNRgrA7qAQxkVj9O4yYEFBJeLiQeW4IykIf13uFdN50LxzRXzhWKp5LNgMVYdDjyaLbEpH7c3RxmsRZHztG/GQzUK+hnhDqS30PLZeWDRu11buxFyjMmvLZ65LnTR3IWJEbgbLg3es59lq8PkNIIsq0ESgkryM7cGLFvJI8s7GzUvQ3UlBpEMfu4toDBKVp7hqzs+ItK5I0Eo5JOSgngwGuj+09AWrq4qCH5GXxTE4uBpV49A7vZcqC26hSShZ1LOFbDae/paAiZq5/LwIVgbu8JPZwqXvf/Wm3mwJls/44romIpJSM7la6wJ5xSgotIwmEbisChRlFnTXAP16LeLJjysZfRKfAhvkxLZ72A5EKXgSCns9/FwAmi+T1n2WpswFvUI1e3CCucOt5ZBRXnc/+ihZanITFXWChsvsOXnJhoQ2pytATqDv5HdqAcw4YjryQvxj4599AKUh6+dkVX1q9keRFCQtzCEkiQ6uC+R4WidMLzffrJ+AkHnt5gLSzpt4UsFmWWr/8lyoReziQ0dHz0gdFLnP0VjBYMTHERT29SKw0egieXrph6NDUcygff3x3n72gGP8uE3xo95HQY/pWcc/WY6o6APV58KKXIo+xmMHxWo4phKdW9CMJwcT1Q5pnfdjQQOpTDieS26c6xZStyOZBwffuLdF/SJQ3qIM3XCgTFWKlYpWg+nxZOEfBamVHFXzWdi413CC6rgJF7rmqusd7FMLAwrQSkNx0WPTYHVTCDYsINH1DxQQIKR/7L4AqU0MqPMlZDQrYSVdQQq6C1ieRwRSwKAD1vUvla3IvshYUehS9BerGZ35RM9GoksQpRj7/AQXX1/QTjLUPqCbEcScOLfOgvuwUvxKU9WWvx8kZeQHGJ0mZdx4U9zIrQQEM6jVYOWsYfKYkIgIoz5RLxjniOlAYr+nMDkAw8TVAg7ksUwBQy4PhOlDozNT8QNhxesHgJWU/u8apsrcXHXpAYXDtTp4Q7goKsnYaOEE7EA5CmEN1+fy5JyggKbSSgMUzsFgxbbx9QWms9SAXwTqVyX6/AaimjzTzkrGD6NOZEpzrM5V/rgOFUW1ZyhfiIgEZe0Cmb2BKe05R+JhHpS8SnBpma2BWEmj+G1mvR74ru3iAXH8yUZ+P6COZtl6o6TVTA6MTSdOZMu6daztQgpSCESPnryYulbZff8F6FfP1VqCma2DR4Oo3mUmAcd4AXpt+eNNlFsxmbgslb6bv5rBppGk/CzomwGbgUhCkZvodkHnKiScvc+MOye9Db0rXCFkKANEBAkI5r+61cWpG0IkFGT2M2zaG45LRTCFiA1BREBcEB9PwwAu4VHtRCFxhRuP/BmXAKtnXBCigBoHbOe33QJ9gJNQ7g3LpQjn4iSkBZbXfQwYKFEtWBd0IFM1xyV08aqWBABSo48BQmA51q5nnUHQG1C+ajyomuX0zCESEuTo80otY+5PEmFy+M1yFfSqte+kCUEEHSlsM6n/SKCT66DDIhutonX4AlHjRc3tQMKiAplwT1LXMR8julRzdp45+yZBwyeB5lWmmo77tNHOxCVkHNnIh6uJ21AVJXl3ZTze9DMnrun5aqTLtEnR4nDiQ8H5m4sCsIRAhNZdTUyxIRh+TySg8sZq4w/bJaCtWUjz9Cikpl7YDQrTwsWk7lYMLHOYiUMqgFARBEzwMxt85pSB6dUM+XKVoBuXF/GLlRSzE0qsvUohlKmXKdUrWBueCFynuy5dBANQ5yyCEypBQdZEFo2surV1yEfKay7VkYdthPxE6c97C9lQLANkcd0ILAIakL/3ENUsUhHcd3ixBfKdL1MVtJQNl7Q5K0oBDEFPybB/bgHPNViWkO0xT1421ILPpofpTU9ejjxMrmrrWtb8lh7S/obm4+hBpB+oaBQu2dvOXRsF6baPgS/AOwcktlZLmU9IYf07zKbbpjsuggjbdNK4Yp92xTddBbxE1NNNY0DAqbxuasUXyK+DK8obmcFVD81PoCCgTrd/Fytbv3LfBuu8ljo7bh9/XapLHECXdehB1QeZbBfOHDmy0nWC2aM5svHgctfECQM1sUWEC59fLAuOvW1TMpVtUlm3mYfv1YVV83808ZNvTnBsHh257uuQGMelWukZ9DdV33FY6JcLhNdh02HrmiZsOBdszwy6UB7LtmXDFrhtZ0Vv6jazMnmjZRtZ4b1BKikMLx6Az2PJrCoeyOHHYfXN0ry49HhvxAFC48qG228hJPLrx28iz4cR3BCgl4dvPcO0tYZzLbAqWdYhBbbvhnpZeiXSxwOV4R+53RxOIQNGjCT7bnXVhdQlKveAQBwGotFf2hseClHjchb/kuIsxqF2Ou2gf72qaaGdoaPjDg0HGoLiDQRax3v/L4AiVEajdjlCZkesdNvMrIZhw2bE880uOG4kDFrrYAUZso8UI1FlHPbE6GDdZnXUoFswitgTUWceHMQetCdrRTjpojTmSTtQj16GyDz2VEQ/vS4zUEp7rcsrhfdc85vCSB0Je8uhMLtOpr3P0qeM+7cq7q48Nj2P9AaYVlDYhGUAaAAAAAElFTkSuQmCC"
        alt=""
      />
    ),
    children: [
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/devOps">
            DevOps
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/flutter">
            Flutter
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/graphSQl">
            GraphSQL
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/laravel">
            Laravel
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/postgreSql">
            PostgreSQL
          </Link>
        ),
      },
      {
        key: "6",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/nextJs">
            NextJs
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/nodsJs">
            NodeJs
          </Link>
        ),
      },
      {
        key: "8",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/technology/react-native"
          >
            React Native
          </Link>
        ),
      },
    ],
  },
  {
    key: "about",
    label: "About",
  },
  {
    key: "blogs",
    label: "Blogs",
  },
  {
    key: "Lets Talk",
    label: (
      <Link style={{ textDecoration: "none" }} to="/lets_talk">
        Lets talk
      </Link>
    ),
  },
];
const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const isMd = useMediaQuery("(max-width:768px)");

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {!open && (
        <Space
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: "10000",
            backgroundColor: "#fff",
            borderRadius: "30px",
            boxShadow: "rgb(99, 97, 90) 0px 0px 1px 0px",
            padding: ".2rem",
          }}
          onClick={showDrawer}
        >
          <MenuIcon
            style={{
              fontSize: "30px",
              color: "#000",
              zIndex: "10000",
            }}
          />
        </Space>
      )}

      <Drawer
        style={{
          padding: 0,
          width: isMd && "80%",
        }}
        title={
          <a href="/">
            <img
              src={hsbLogo}
              alt="HSB Logo"
              style={{ width: "60%", height: "40px" }}
            />
          </a>
        }
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Menu
          style={{
            width: "100%",
            border: "none",
            background: "transparent",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MenuBar;
