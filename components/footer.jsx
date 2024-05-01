import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div class="gap-8 px-8 py-12 mx-auto md:flex md:items-center md:justify-between md:px-12 lg:px-32 w-full">
          <div class="flex justify-center space-x-6 md:order-2">
            <span class="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
              <a class="size-6 transition fill-black hover:text-blue-500">
                <span class="sr-only"> github </span>
                <ion-icon
                  class="size-5 md hydrated"
                  name="logo-github"
                  role="img"
                  aria-label="logo github"
                ></ion-icon>
              </a>
              <a class="size-6 transition fill-black hover:text-blue-500">
                <span class="sr-only"> twitter </span>
                <ion-icon
                  class="size-5 md hydrated"
                  name="logo-twitter"
                  role="img"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
              <a class="size-6 transition fill-black hover:text-blue-500">
                <span class="sr-only"> Instagram </span>
                <ion-icon
                  class="size-5 md hydrated"
                  name="logo-instagram"
                  role="img"
                  aria-label="logo instagram"
                ></ion-icon>
              </a>
              <a class="size-6 transition fill-black hover:text-blue-500">
                <span class="sr-only"> Linkedin </span>
                <ion-icon
                  class="size-5 md hydrated"
                  name="logo-linkedin"
                  role="img"
                  aria-label="logo linkedin"
                ></ion-icon>
              </a>
            </span>
          </div>
          <div class="md:order-1" x-data="{ year: new Date().getFullYear() }">
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
