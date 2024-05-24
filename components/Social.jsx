import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/shubham23mamgain",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UCjew-uqu_Da90GU4JUibYNg",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

const Social = ({ contsinerStyles, iconStyles }) => {
  return (
    <div className={contsinerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
