import Link from "next/link";
import { siteConfig } from "../config/site";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarItem,
  Button,
} from "@nextui-org/react";

const Nav = () => {
  return (
    <nav>
      <Navbar
        maxWidth="full"
        position="sticky"
        className="lg:px-[70px] px-0 py-4 bg-[#F8D046] text-[#111757]"
        isBordered
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <p className="font-bold text-xl text-inherit lg:flex hidden ">
              Ergates & Sunergos
            </p>
            <p className="font-bold text-xl text-inherit lg:hidden flex ">
              E & S
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="lg:flex hidden" justify="center">
          {siteConfig.navItems.map((item, i) => (
            <NavbarItem key={i}>
              <Link
                href={item.href}
                className="font-bold text-lg hover:text-[#333333]"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:hidden flex">
            <NavbarMenuToggle />
          </NavbarItem>
          <NavbarItem className="lg:flex hidden">
            <div className="w-full flex lg:space-x-4 space-x-2">
              <Button className="p-4 lg:text-lg text-sm bg-[#1395D8] text-white ">
                Login
              </Button>
              <Button className="p-4 bg-[#333333] lg:text-lg text-sm text-white">
                Register
              </Button>
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="lg:px-[80px] px-4 py-12">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link className="w-full" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
};

export default Nav;
