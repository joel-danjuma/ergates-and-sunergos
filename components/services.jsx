import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./sectionTitle";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import {
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

export default function Services() {
  return (
    <>
      <SectionTitle title="Comprehensive Training and Consulting Solutions Tailored to Your Needs">
        With a focus on individual attention we are commited to delivering
        customized strategies, empowering your workforce , and guiding your
        business to sustainable growth and excellence
      </SectionTitle>
      <BentoGrid className="p-4 h-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            // icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Training and Development",
    description:
      "Our Training and Development program is designed to enhance leadership and management skills, focusing on topics such as communication, team building, and problem-solving. Our expert trainers will work with you to develop a customized training plan tailored to your organization's specific needs, ensuring your leadership team is equipped to drive success. Whether you're looking to upskill existing staff or onboard new leaders, our training programs will empower your team to achieve their full potential.",
    header: <Skeleton />,
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Recruitment services",
    description:
      "Our Recruitment services are designed to help you find the best talent to fuel your organization's growth. Our expert recruiters will work closely with you to understand your company culture and requirements, utilizing our extensive network to identify and attract top contenders. From initial screening to final interviews, we'll manage the entire recruitment process, ensuring you find the perfect fit for your team. Trust us to find the talent that drives your business forward.",
    header: <Skeleton />,
    className: "md:col-span-1",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "HR Setup and Consultation",
    description:
      "Establishing a HR setup from scratch or optimizing your existing HR function can be daunting. Our HR Setup and Consultation services are designed to help you build a robust HR infrastructure tailored to your organization's unique needs. Our team of experts will work with you to develop a customized HR strategy, ensuring compliance with local regulations, implementing effective policies, and providing guidance on employee engagement and retention strategies.",
    header: <Skeleton />,
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Talent Management and Retention",
    description:
      "In today's competitive job market, retaining top talent is crucial for long-term business success. Our Talent Management and Retention course is designed to equip your HR team with strategies to attract, engage, and retain top performers. Learn how to develop a culture of recognition, create effective loyalty programs, and design retention strategies that drive employee satisfaction and productivity.",
    header: <Skeleton />,
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
