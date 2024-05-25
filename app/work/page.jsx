"use client";
import { motion } from "framer-motion";

import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { SiLoom } from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    num: "01",
    category: "Web App Full Stack",
    title: "Movies Review App",
    description:
      "A Movies/ Series Review Application using React and Nodejs and MongoDB as database. Admin can create and upload actors as well as movies.",
    stack: [
      {
        name: "React",
      },
      {
        name: "NodeJs",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Javascript",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/work/review/thumb1.png",
    live: "https://roblox-frontend.onrender.com/",
    loom: "https://www.loom.com/share/3f8ee019fd31407e8c7287e6eb0358d5",
    github: "https://github.com/shubham23mamgain/roblox-frontend",
  },

  {
    num: "02",
    category: "Mobile App Full Stack",
    title: "Regamer React Native App",
    description:
      "A Mobile App made using React Native, Nodejs and MongoDB and Socket IO for live chatting. The app focuses on the buying and selling of games for different platforms PS3,PS4 , PS5, XBox and PC.",
    stack: [
      {
        name: "React Native",
      },
      {
        name: "Typescript",
      },
      {
        name: "NodeJs",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Javascript",
      },
      {
        name: "Socket.io",
      },
      {
        name: "CSS 3",
      },
    ],
    image: "/assets/work/regamer/regame.png",

    live: "",
    loom: "https://www.loom.com/share/a8a078b43c50430cb6e1658c22584fcf",
    github: "https://github.com/shubham23mamgain/regamer_server",
  },
  {
    num: "03",
    category: "Web App Full Stack",
    title: "X Clone using MERN Stack with Tan Stack Query for State Management",
    stack: [
      { name: "React" },
      { name: "NodeJs" },
      { name: "TanStack Query" },
      { name: "MongoDB" },
      { name: "Javascript" },
      { name: "Socket.io" },
      { name: "CSS 3" },
    ],
    image: "/assets/work/xclone/t1.png",
    live: "https://x-clone-yl63.onrender.com/",
    loom: "https://www.loom.com/share/07845ecd93ef4bd1be2f0dc06c1b1254",
    github: "https://github.com/shubham23mamgain/x-clone",
    description:
      "Signup , Login , Crud with Posts and Comments, Follow/Unfollow users, See thier posts and also the posts they like, Update Profile and other features available.",
  },
];
const Work = () => {
  const [myIndex, setMyIndex] = useState(0);
  const [project, setProject] = useState(projects[myIndex]);

  const handleSlideChange = (index) => {
    if (index <= 2 || index >= 0) {
      setMyIndex(index);
      setProject(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects[myIndex].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {projects[myIndex].category} Project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4 flex-wrap">
                {projects[myIndex].stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== projects[myIndex].stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className=" border-white/20">
                <div className="flex  items-center justify-center gap-4 xl:flex-row xl:justify-between">
                  <Link href={projects[myIndex].live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaLink className="text-white text-3xl group-hover:text-accent " />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={projects[myIndex].github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent " />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Github Link</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={projects[myIndex].loom}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <SiLoom className="text-white text-3xl group-hover:text-accent " />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Loom Link</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center gap-[30px] p-6 xl:p-4 ">
                {myIndex === 0 ? (
                  <Button
                    disabled
                    onClick={() => handleSlideChange(myIndex - 1)}
                  >
                    Previous
                  </Button>
                ) : (
                  <Button onClick={() => handleSlideChange(myIndex - 1)}>
                    Previous
                  </Button>
                )}

                {myIndex === 2 ? (
                  <Button
                    disabled
                    onClick={() => handleSlideChange(myIndex + 1)}
                  >
                    Next
                  </Button>
                ) : (
                  <Button onClick={() => handleSlideChange(myIndex + 1)}>
                    Next
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Image
              src={projects[myIndex].image}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
