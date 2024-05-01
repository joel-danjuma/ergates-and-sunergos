import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div class="gap-8  py-12  w-full">
          <div
            className="flex w-full justify-center items-center"
            x-data="{ year: new Date().getFullYear() }"
          >
            <span class="text-sm font-medium text-gray-500">
              Copyright © <span x-text="year">2024</span>
              <a
                aria-label="Ergates & Sunergos"
                href="/"
                class="mx-2 text-blue-500 hover:text-gray-500"
              >
                Ergates & Sunergos
              </a>
              Since 2014
            </span>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
