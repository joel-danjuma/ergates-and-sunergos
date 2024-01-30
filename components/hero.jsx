import Image from "next/image";
import logo from "../public/heroImg4.svg";
import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className=" bg-[#F8D046] ">
      <div className="container-div lg:gap-[100px] gap-[60px] ">
        <div className="w-full flex flex-col space-y-[32px] lg:p-0 px-4 lg:py-14 py-0 ">
          <h1 className="lg:text-7xl text-4xl w-full ">
            Empowering Excellence <br /> Through Training and Consulting
          </h1>
          <h2>
            Our Expert Training and Consultation Services pave the way for your
            organisations success by driving continuous improvement innovation
            and exceptional performance
          </h2>
          <div className="w-full flex lg:space-x-4 space-x-2">
            <Button color="primary" className="p-4 lg:text-lg text-sm ">
              Start Now
            </Button>
            <Button className="p-4 bg-[#5B57EB] text-white">Contact Us </Button>
          </div>
          <div className="w-full p-4 lg:text-xl text-sm lg:flex lg:flex-row flex-col justify-between border border-black rounded-lg">
            <p>Individuals</p>
            <p>Companies</p>
            <p>Goverment Institutions</p>
          </div>
        </div>
        <div className="w-full relative lg:-mt-[15px] lg:-ml-4 ml-0 mt-0">
          <Image src={logo} alt="img" width={614} height={614} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
