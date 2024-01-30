import React from "react";
import SectionTitle from "./sectionTitle";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "@nextui-org/react";

const courses = [
  {
    feeStatus: "Paid",
    title: "Leading with Emotional Intelligence",
    description:
      "Explore the critical role of emotional intelligence in effective leadership. Develop skills to navigate and influence emotions, fostering a positive and productive work environment.",
  },
  {
    feeStatus: "Paid",
    title: "Personal Effectiveness and Time Management",
    description:
      " Enhance your personal productivity and time management skills. Learn strategies to prioritize tasks, set achievable goals, and optimize your efficiency for greater professional success.",
  },
  {
    feeStatus: "Paid",
    title: "Becoming a Person of Influence",
    description:
      "Uncover the art of influential leadership. Acquire techniques to build trust, inspire others, and become a person of impact within your organization and beyond.",
  },
  {
    feeStatus: "Paid",
    title: "Stress Management",
    description:
      "Master the skills to identify and manage stress effectively. Discover coping mechanisms and strategies to maintain a healthy work-life balance, promoting both personal well-being and professional success",
  },
  {
    feeStatus: "Paid",
    title: "Change and Conflict Management",
    description:
      "Embrace change as an opportunity for growth and learn effective conflict resolution strategies. Develop the skills to navigate and manage transitions while fostering a positive workplace culture",
  },
  {
    feeStatus: "Paid",
    title: "Service Excellence and Client Relationship Management",
    description:
      "Elevate your customer service skills and learn the principles of client relationship management. Build strong, lasting connections with clients while delivering exceptional service",
  },
  // {
  //   feeStatus: "Paid",
  //   title: "Building High-Performance Teams",
  //   description:
  //     "Explore the dynamics of team building and leadership. Develop strategies to create a high-performance team culture, fostering collaboration, innovation, and success.",
  // },
  // {
  //   feeStatus: "Paid",
  //   title: "Goal Setting and Workforce Performance Management",
  //   description:
  //     "Set and achieve strategic goals for yourself and your team. Learn effective workforce performance management techniques to drive continuous improvement and achieve organizational objectives.",
  // },
  // {
  //   feeStatus: "Paid",
  //   title: "Effective Communication",
  //   description:
  //     "Hone your communication skills for greater impact. Explore various communication styles, techniques, and tools to convey messages clearly, build rapport, and foster effective collaboration.",
  // },
];

const Services = () => {
  return (
    <section className="p-4 bg-[#FBF4DF]">
      <SectionTitle title="Programs To Elevate Your Workforce">
        Experiential and Transformational Leadership Training
      </SectionTitle>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 grid-rows-4 mx-auto container p-4 lg:gap-4 gap-2">
        {courses.map((item, i) => (
          <Card
            key={i}
            className="lg:col-span-1 lg:row-span-1 h-[420px] p-4 bg-white/80"
          >
            {/* <CardHeader className="flex-col text-start space-y-2">
              
            </CardHeader> */}

            <CardBody className="space-y-4">
              <p className="text-blue-500 text-start text-bold items-start">
                {item.feeStatus}
              </p>
              <p className="text-2xl">{item.title}</p>
              <p className="xl">{item.description}</p>
            </CardBody>
            <CardFooter>
              <Button color="primary" className="p-4">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
