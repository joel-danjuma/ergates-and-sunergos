import Image from "next/image";
import img2 from "@/public/pic1.jpeg";
import img from "@/public/pic2.jpeg";
import img3 from "@/public/pic3.jpeg";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
const LEDA = () => {
  const words = [
    {
      text: " Unlock",
    },
    {
      text: "Your",
    },
    {
      text: "Full",
    },
    {
      text: "Potential",
    },
    {
      text: "with",
    },
    {
      text: "LEDA.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section>
      <div className="px-8 py-24 w-full lg:px-20">
        <div className="max-w-2xl px-0 flex flex-col justify-center items-center mx-auto">
          <TypewriterEffect words={words} />
          {/* <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-6xl text-balance">
            Building one pagers together,

            <span className="text-gray-600">wherever and anywhere</span>
          </h1> */}
          <p className="mt-4 text-base font-medium text-gray-500 text-balance">
            Develop the leadership skills and employability strategies to
            achieve your career aspirations and stay ahead in the rapidly
            changing job market.
          </p>
        </div>
        <div className="space-y-2">
          <div className="grid gap-2 mt-12 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
            <div className="max-w-lg min-w-full mx-auto">
              <div className="flex h-full">
                <div className="flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none">
                  <h2 className="font-medium text-gray-900">
                    Leadership Essentials
                  </h2>
                  <p className="mt-4 text-sm font-medium text-gray-500 text-pretty">
                    This comprehensive course provides the foundation of
                    leadership skills, covering topics such as effective
                    communication, team building, and decision-making. Through
                    interactive exercises and case studies, you&apos;ll learn
                    how to lead effectively and inspire your team to achieve
                    their best.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 h-[400px]">
              <div className="h-full">
                <div className="relative h-full p-2 overflow-hidden border rounded-3xl">
                  <Image
                    alt="img"
                    src={img}
                    fill
                    className="object-cover min-h-[40px] border shadow-2xl rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
            <div className="max-w-lg min-w-full mx-auto lg:col-start-3">
              <div className="flex h-full">
                <div className="flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none">
                  <h2 className="font-medium text-gray-900">
                    Employability Masterclass
                  </h2>
                  <p className="mt-4 text-sm font-medium text-gray-500 text-pretty">
                    In today&apos;s competitive job market, it&apos;s essential
                    to develop skills that make you stand out from the crowd.
                    This masterclass focuses on building a personal brand,
                    creating a professional online presence, and learning
                    strategies to stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-start-1 lg:col-span-2 h-[400px]">
              <div className="relative h-full p-2 overflow-hidden border rounded-3xl">
                <Image
                  alt="img"
                  src={img2}
                  fill
                  className="object-cover min-h-[40px] border shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-3">
            <div className="max-w-lg min-w-full mx-auto">
              <div className="flex h-full">
                <div className="flex flex-col justify-center p-8 border bg-gray-50 rounded-3xl max-w-none">
                  <h2 className="font-medium text-gray-900">
                    Strategic Communication
                  </h2>
                  <p className="mt-4 text-sm font-medium text-gray-500 text-pretty">
                    Effective communication is the cornerstone of successful
                    leadership. In this course, you&apos;ll learn how to craft
                    compelling messages, handle difficult conversations, and
                    build strong relationships with your team and stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 h-[400px]">
              <div className="relative h-full p-2 overflow-hidden border rounded-3xl">
                <Image
                  alt="img"
                  src={img3}
                  fill
                  className="object-cover min-h-[40px] border shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-2 mt-2 text-center md:grid-cols-3">
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                {/* <Image
                  alt="img"
                  fill
                  src="../images/placeholders/rectangle1.svg"
                  className="w-full h-full mx-auto rounded-2xl"
                /> */}
              </div>
              <div className="mt-4">
                <p className="font-medium text-gray-900">
                  Emotional Intelligence and Resilience
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Emotions play a significant role in leadership, but managing
                  yours and understanding those of your team is crucial for
                  success. This course explores the importance of emotional
                  intelligence, coping mechanisms for stress, and strategies for
                  building resilience.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                {/* <Image
                  alt="img"
                  fill
                  src="../images/placeholders/rectangle1.svg"
                  className="w-full h-full mx-auto rounded-2xl"
                /> */}
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Networking and Branding
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Networking is a vital skill for leaders, but it&apos;s not
                  just about making contacts it&apos;s about building meaningful
                  relationships. This course covers the art of building
                  networks, creating a personal brand, and leveraging social
                  media to increase your visibility.
                </p>
              </div>
            </div>
            <div>
              <div className="p-2 overflow-hidden border rounded-3xl">
                {/* <Image
                  alt="img"
                  src="../images/placeholders/rectangle1.svg"
                  className="w-full h-full mx-auto rounded-2xl"
                /> */}
              </div>
              <div className="px-8 mt-4">
                <p className="font-medium text-gray-900">
                  Data-Driven Decision Making
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Y In today&apos;s data-driven business world, making informed
                  decisions is crucial for success. This course focuses on
                  understanding and analyzing data to make informed decisions,
                  communicating insights, and developing predictive skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LEDA;
