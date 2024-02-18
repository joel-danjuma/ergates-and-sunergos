import React from "react";

const SocialProof2 = () => {
  return (
    <section className="bg-[url('../public/BG.svg')] text-white py-[80px]">
      <div className="container-div lg:gap-[120px] gap-[40px]">
        <div className="flex-col w-full space-y-4">
          <p className="lg:text-5xl text-2xl font-bold">
            {" "}
            Promoting Excellence Through Training & Consulting
          </p>
          <p className="lg:text-xl text-lg">
            Increasing organisatoinal prroductivity, and driving sustainable
            growth. Our success stroies and client testimonials are a testament
            to the real improvements that can be achieved throgh our specialized
            services{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-full lg:gap-2 gap-4">
          <span className="col-span-1 row-span-1">
            <p className="lg:text-7xl text-4xl">160+</p> <br />
            Companies served by E&S
          </span>
          <span className="col-span-1 row-span-1">
            <p className="lg:text-7xl text-4xl">10+</p> <br />
            Years as a top leadership firm
          </span>
          <span className="col-span-1 row-span-1">
            <p className="lg:text-7xl text-4xl">50+</p> <br />
            Leadership connections made accross the 36 states
          </span>
          <span className="col-span-1 row-span-1">
            <p className="lg:text-7xl text-4xl">15k+</p> <br />
            Client engagements yearly
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof2;
