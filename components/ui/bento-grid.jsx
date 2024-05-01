import { cn } from "@/lib/utils";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "@nextui-org/react";

export const BentoGrid = ({ className, children }) =>
  // : {
  //   className?: string;
  //   children?: React.ReactNode;
  // }
  {
    return (
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </div>
    );
  };

export const BentoGridItem = ({
  className,
  title,
  description,
  feeStatus,
  header,
  icon,
}) =>
  // : {
  //   className?: string;
  //   title?: string | React.ReactNode;
  //   description?: string | React.ReactNode;
  //   header?: React.ReactNode;
  //   icon?: React.ReactNode;
  // }
  {
    return (
      <Card
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
      >
        {/* <CardHeader className="">{header}</CardHeader> */}
        {/* {header} */}
        <CardBody className="group-hover/bento:translate-x-2 transition duration-200 h-[540px]">
          <div className="relative">
            <div className="absolute top-4 right-4">{feeStatus}</div>
            <p className="font-sans font-bold text-[#111757] text-xl mb-2 mt-2">
              {title}
            </p>
            <p className="font-sans font-normal text-[#111757] text-lg  ">
              {description}
            </p>
          </div>
        </CardBody>
      </Card>
    );
  };
