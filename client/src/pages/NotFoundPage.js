import React from "react";
import { useSelector } from "react-redux";

export const NotFoundPage = () => {
  const { dark_mode } = useSelector((state) => state.darkmode);

  return (
    <div className={`${dark_mode ? "text-white" : "text-black"}`}>
      <section class="relative z-10 bg-primary py-[120px]">
        <div class="container mx-auto">
          <div class="-mx-4 flex">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[400px] text-center">
                <h2 class="mb-2 text-[50px] font-bold leading-none  sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 class="mb-3 text-[22px] font-semibold leading-tight ">
                  Oops! That page can’t be found
                </h4>
                <p class="mb-8 text-lg text-white">
                  The page you are looking for it maybe deleted
                </p>
                <a
                  href="/"
                  class="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold  transition hover:bg-white hover:text-primary"
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div class="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div class="flex h-full w-1/3">
            <div class="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div class="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div class="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </div>
  );
};