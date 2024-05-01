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
import { Button as GradientButton } from "./ui/moving-border";

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
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r to-[#1395D8] from-cyan-500 rounded-lg" />
                <div className="px-8 py-2  bg-[#333333] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  <Link href={"/leda"}>Join LEDA</Link>
                </div>
              </button>
              {/* <Button className="p-4 lg:text-lg text-sm bg-[#1395D8] text-white ">
                Login
              </Button>
              <Button className="p-4 bg-[#333333] lg:text-lg text-sm text-white">
                Register
              </Button> */}
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="lg:px-[80px] px-4 py-12 space-y-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem className="w-full space-y-4" key={index}>
              <button className="px-8 w-full py-2 rounded-md bg-[#1395D8] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#1395D8]">
                <Link className="w-full text-2xl" href="#">
                  {item.label}
                </Link>
              </button>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <button className="p-[3px] relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r to-[#1395D8] from-cyan-500 rounded-lg" />
              <div className="px-8 py-2  bg-[#333333] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <Link href={"/leda"}>Join LEDA</Link>
              </div>
            </button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </nav>
  );
};

export default Nav;
