"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
  BentoGrid,
  BentoGridItem,
  Globe,
  Heading,
  IconCloud,
} from "@/components/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import VortexWrapper from "../VortexWrapper";
import { FaGlobeAfrica, FaSuitcase } from "react-icons/fa";
import { FaCode, FaUser } from "react-icons/fa6";
import { techStacks } from "@/data";
import GitHubCalendar from "react-github-calendar";
import { IconPoint } from "@tabler/icons-react";

const currentProjects = [
  "Websockets enabled drawing canvas",
  "AI platform 🤫 (can't talk about it)",
  "A cross platform gallery app for rangolis"
];

export function About() {
  return (
    <VortexWrapper otherClasses=" w-screen px-8 py-8">
      <section id="about" className="flex flex-col gap-16">
        <Heading text={"About Me"} />
        <BentoGrid className="  mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </section>
    </VortexWrapper>
  );
}

const SkeletonOne = () => {
  return (
    <div className="relative flex justify-center size-full items-center overflow-hidden">
      <Image
        src="/me.jpg"
        alt="My profile pic"
        height="150"
        width="200"
        className="rounded-xl "
      />
    </div>
  );
};
const SkeletonTwo = () => {
  return (
    <div className="relative flex justify-center size-full items-center overflow-hidden">
      <IconCloud iconSlugs={techStacks} />
    </div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="p-4 space-y-2">
        {currentProjects.map((project, i) => (
          <div
            key={i}
            className="flex items-center text-sm font-semibold text-white"
          >
            <IconPoint />
            <p>{project}</p>
          </div>
        ))}
      </div>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <div className="hidden md:flex justify-center items-center pt-8">
        <GitHubCalendar
          username="Akkilesh-A"
          colorScheme="dark"
          blockSize={10}
          errorMessage="Refresh the page to see the calendar"
          hideColorLegend
        />
      </div>
      <div className="hidden sm:flex sm:justify-center md:hidden">
        <GitHubCalendar
          username="Akkilesh-A"
          colorScheme="dark"
          blockSize={6}
          errorMessage="Refresh the page to see the calendar"
          hideColorLegend
        />
      </div>
      <div className="flex justify-center sm:hidden">
        <GitHubCalendar
          username="Akkilesh-A"
          colorScheme="dark"
          blockSize={3.5}
          errorMessage="Refresh the page to see the calendar"
          hideColorLegend
          hideMonthLabels
          hideTotalCount
        />
      </div>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div className="relative flex justify-center size-full items-center overflow-hidden">
      <Globe />
    </div>
  );
};
const SkeletonSeven = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocLfPHEAtbV2DdWn-G31G1FdkDUUKCqkwo8b4vWSUsdJ3-iVWyPQBA=s432-c-no"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocLfPHEAtbV2DdWn-G31G1FdkDUUKCqkwo8b4vWSUsdJ3-iVWyPQBA=s432-c-no"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocLfPHEAtbV2DdWn-G31G1FdkDUUKCqkwo8b4vWSUsdJ3-iVWyPQBA=s432-c-no"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonSix = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Yes! this is me",
    description: (
      <span className="text-sm">
        It&apos;s me Akkilesh, the creator of this website.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <FaUser className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What I code with",
    description: (
      <span className="text-sm">
        I code with a lot of stuff, but here are some of the things i use
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <FaCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Currently working on",
    description: (
      <span className="text-sm">
        Personal and professional projects that are in progress.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <FaSuitcase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "GitHub Contributions",
    description: <span className="text-sm">The greenery i like 🌲</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },
  {
    title: "Globe? Why not?",
    description: (
      <span className="text-sm">
        Liked the component, Couldnt find a better place to put it 🤗
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <FaGlobeAfrica className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonSix />,
  //   className: "md:col-span-1",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonSeven />,
  //   className: "md:col-span-2",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
