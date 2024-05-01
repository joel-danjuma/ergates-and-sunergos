import SectionTitle from "./sectionTitle";
// import { Card, CardBody, CardHeader, Avatar } from "@nextui-org/react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: `John Doe`,
    title: `Alphabet Inc.`,
    // image: `/images/social-1.webp`,
    quote: `Commodo Lorem consequat ea consectetur pariatur proident excepteur.
        Pariatur eiusmod minim minim ipsum tempor aute excepteur minim eu nisi laboris.
        Duis sunt labore eu eu cupidatat labore commodo id aliquip.`,
  },
  {
    name: `Jack Doe`,
    title: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    quote: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    title: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    quote: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    title: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    quote: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    title: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    quote: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    title: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    quote: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
        Fugiat eiusmod dolore aliquip aute duis esse excepteur amet.
        Sit cupidatat ipsum culpa nisi esse ipsum culpa in consectetur.
        Enim incididunt do sunt ex do. Proident duis nulla minim sunt irure est
        magna nostrud Lorem consectetur irure.`,
  },
  {
    name: `Jack Doe`,
    title: `Amazon.com, Inc.`,
    // image: `/images/social-2.webp`,
    quote: `Anim labore ut amet cupidatat pariatur pariatur labore ad est.
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
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
};

export default Testimonials;
