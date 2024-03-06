"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Ourservices() {
  
  const { ref } = useSectionInView("Services");

  return (
    <section
    id="Services"
    ref={ref}
    className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40  "
  >
    <SectionHeading>Our Services</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-8 ">
      {servicesData.map((service, index) => (
        <motion.div
          className="flex flex-col items-center bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-white/20"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >



          <h3 className="dark:text-white text-xl font-semibold mt-2">{service.name}</h3>
          <p className="text-gray-400 font-thin text-sm mt-4  ">{service.description}</p>
          <Image
          src={service.icon}
          alt="Project I worked on"
          quality={95}
          className="mt-4  hidden sm:block top-8 -right-40 w-[5.25rem] rounded-t-lg shadow-2xl s
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
        </motion.div>
      ))}
    </div>
  </section>
  );
}
