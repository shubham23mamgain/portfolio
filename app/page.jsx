import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-around xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mr-20 ml-10">
            <span className="text-xl">Software Developer </span>
            <h1 className="h1 mb-6">
              Hi I'm <br /> <span className="text-accent">Shubham Mamgain</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I am from Dehradun, India . I excel at creating elegant and
              beautiful web apps and mobile apps. I am proficient in various
              technologies and programming languages.
            </p>

            {/* button and socials */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  contsinerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <Photo className="order-1 ml-20 xl:order-none mb-8 xl:mb-0" />
        </div>
      </div>

      {/* Stats*/}
      <Stats />
    </section>
  );
};
export default Home;
