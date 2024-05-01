"use client";
import {
  Modal,
  ModalContent,
  // ModalHeader,
  ModalBody,
  // ModalFooter,
  Button,
  // Input,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import logo from "../public/heroImg4.svg";

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  return (
    <section className=" bg-[#F8D046] py-4 ">
      <div className="container-div lg:gap-[100px] gap-[60px] ">
        <div className="w-full flex flex-col space-y-[32px] lg:p-0 lg:py-14 py-0 ">
          <h1 className="lg:text-7xl  text-4xl w-full ">
            Empowering Excellence <br />
            Through Training and Consulting
          </h1>
          <h2>
            Our Expert Training and Consultation Services pave the way for your
            organisations success by driving continuous improvement innovation
            and exceptional performance
          </h2>
          <div className="w-full flex lg:space-x-4 space-x-2">
            <Button className="p-4 lg:text-lg text-sm text-white bg-[#1395D8] ">
              <Link href="https://t.me/LEADERSHIP_EMPLOYABILITY_ACADEMY">
                Join our Telegram
              </Link>
            </Button>
            {/* <Button className="p-4 bg-[#333333] lg:text-lg text-sm text-white">
              Contact Us{" "}
            </Button> */}
            <Button
              onPress={() => handleOpen()}
              className="p-4 bg-[#333333] lg:text-lg text-sm text-white"
            >
              Contact Us
            </Button>
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                <ModalBody
                  className="p-0"
                  data-tf-live="01HWN4M5S6TJ66ENPJ3HRX41AT"
                />
                <Script src="//embed.typeform.com/next/embed.js" />
              </ModalContent>
            </Modal>
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
