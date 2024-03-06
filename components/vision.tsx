"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Vision() {
  const { ref } = useSectionInView("Vision");

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="Vision" 
  >
    <SectionHeading>Our Vision</SectionHeading>
    <p className="mb-3">
      <span className="font-bold">Transforming Ideas into Reality, <span className="text-blue-500">Together</span> </span>
    </p>
    <p>
    <span>At Protopia, we're dedicated to bringing your</span>  <span className="italic"> <span className="text-blue-500 font-bold">creative visions</span></span> into digital <span className="font-bold">masterpieces</span> through <span className="font-bold"><span className="text-blue-500">collaborative effort</span></span>. With a <span className="font-bold">wide range of services</span> and a focus on <span className="italic">innovation</span>, we pave the way for your <span className="font-bold">success</span>.
    
    </p>

  </motion.section>
  );
}
