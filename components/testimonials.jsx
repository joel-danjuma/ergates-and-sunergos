import SectionTitle from "./sectionTitle";
import { Card, CardBody, CardHeader, Avatar } from "@nextui-org/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: `John Doe`,
    company: `Alphabet Inc.`,
    // image: `/images/social-1.webp`,
    text: `Commodo Lorem consequat ea consectetur pariatur proident excepteur.
        Pariatur eiusmod minim minim ipsum tempor aute excepteur minim eu nisi laboris.
        Duis sunt labore eu eu cupidatat labore commodo id aliquip.`,
  },
  {
    name: `Jack Doe`,
    company: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    text: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    company: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    text: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    company: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    text: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    company: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    text: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    company: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    text: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    company: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    text: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full space-y-5 py-12">
      <SectionTitle title="Testimonials and Feedback">
        These testimonials and feedback provide valuable insight into the
        transformative power of our services, directly from those who have
        benefited
      </SectionTitle>
      <Marquee direction="left" pauseOnHover="true">
        {testimonials.map((item, i) => (
          <div key={i} className="w-full px-4">
            <Card className="w-[520px] lg:h-[200px] h-[240px]">
              <CardHeader className="flex flex-row gap-2">
                <Avatar src={item.name}></Avatar>
                <p>{item.name}</p>
              </CardHeader>
              <CardBody>{item.text}</CardBody>
            </Card>
          </div>
        ))}
      </Marquee>
      <Marquee direction="right" pauseOnHover="true">
        {testimonials.map((item, i) => (
          <div key={i} className="w-full px-4">
            <Card className="max-w-[520px] lg:h-[200px] h-[240px]">
              <CardHeader className="flex flex-row gap-2">
                <Avatar src={item.name}></Avatar>
                <p>{item.name}</p>
              </CardHeader>
              <CardBody>{item.text}</CardBody>
            </Card>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
