import { ReactNode } from "react";

const SectionTitle = (props) => {
  return (
    <div
      className={`flex w-full flex-col lg:py-[80px] py-[40px] z-10 items-center justify-center text-center
      }`}
    >
      {props.title && (
        <h2 className="max-w-[800px] mt-3 text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <h3 className="max-w-[800px] py-4 text-lg leading-normal">
          {props.children}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
