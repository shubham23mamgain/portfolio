"use client";
import React from "react";

import {
  FaHtml5,
  FaNodeJs,
  FaJs,
  FaReact,
  FaCss3,
  FaAws,
} from "react-icons/fa";
import { BiLogoFlutter, BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs, SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "My Name is Shubham Mamgain. I completed by B.Tech in 2019 in Computer Science and Engineering from THDC College, Tehri",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Shubham Mamgain",
    },
    {
      fieldName: "Github",
      fieldValue: "github.com/shubham23mamgain",
    },
    {
      fieldName: "Email",
      fieldValue: "shubhammamgain614@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Dehradun",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9027288483",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English, Garhwali",
    },
    { fieldName: "Hobbies", fieldValue: "Watching Animes, Playing Guitar" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.png",
  title: "My experience",
  description:
    "I have working with various technologies in Web development, Mobile app development and Cloud Deployment for over 3 years",
  items: [
    {
      company: "Hexamart Technologies",
      position: "Mobile App Developer Intern",
      duration: "2024 - Present",
    },
    {
      company: "Lucky Numbers",
      position: "Full Stack Developer Intern",
      duration: "Summer 2023",
    },
    {
      company: "Vue Technologies",
      position: "Full Stack Developer Intern",
      duration: "Winter 2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.jpg",
  title: "My education",
  description:
    "I have completed schooling and college both in the state of Uttarakhand only.",
  items: [
    {
      institution: "St.Jude's School, Majra, Dehradun",
      degree: "10th",
      marks: "90.4%",
      year: "2011-2012",
    },
    {
      institution: "St.Jude's School, Majra, Dehradun",
      degree: "12th",
      marks: "84.2%",
      year: "2013-2014",
    },
    {
      institution: "THDC IHET, Tehri",
      degree: "B.Tech",
      marks: "69.4%",
      year: "2015-2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "These are the skills/technologies that I have developed over the years during school, college and internships",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <BiLogoFlutter />,
      name: "Flutter",
    },

    {
      icon: <BiLogoMongodb />,
      name: "Mongo DB",
    },
    {
      icon: <BiLogoFirebase />,
      name: "Firebase",
    },
    {
      icon: <TbBrandReactNative />,
      name: "React Native",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col xl:flex-row gap-[60px]"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] gap-3 mx-auto xl:mx-0 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills </TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl justify-center items-center flex flex-col lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl justify-center items-center flex flex-col lg:items-start gap-1"
                        >
                          <h3 className="text-xl text-accent font-bold">
                            {item.year}
                          </h3>
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.marks}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex  flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        {/* {skill.name} */}
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div>{skill.name}</div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-12 max-w-[720px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start  gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-bold">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
