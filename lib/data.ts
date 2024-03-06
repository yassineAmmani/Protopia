import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GiNewShoot } from "react-icons/gi";
import { FaStudiovinari   } from "react-icons/fa6";
import { FaHandsHelping  } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
import daGuideImg from "@/public/corpcomment.png";
import mobileImd from "@/public/mobile.jpg";
import bidingImg from "@/public/biding.png";

import landingPageImg from "@/src/image/landingPage.png";
import tailoredWebsiteImg from "@/src/image/Website.png";
import mobileAppImg from "@/src/image/mobileApp.png";
import revampImg from "@/src/image/Revamp.png";
import hostingImg from "@/src/image/hosting.png";
import chatBotImg from "@/src/image/chatBot.png";
import windowsImg from "@/src/image/Windows.png";
import ecommerceImg from "@/src/image/Ecommerce.png";
import qaImg from "@/src/image/qa.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Vision",
    hash: "#Vision",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Services",
    hash: "#Services",
  },
  {
    name: "Why Us",
    hash: "#why",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const whyUsData = [
  {
    title: "Fast Delivery",
    description:
      "With our agile methodology, we guarantee swift delivery without compromising on quality.",
    icon: React.createElement(FaStudiovinari  ),
  
  },
  {
    title: "Innovation at Heart",
    description:
      "Innovation fuels our passion, and we constantly push boundaries to bring fresh ideas to the table.",
    icon: React.createElement(GiNewShoot),
    
  },
  {
    title: "Scalable Solutions for Every Stage",
    description:
      "From startups to enterprises, we offer scalable solutions tailored to your growth journey.",
    icon: React.createElement(GiGrowth),
    
  },
  {

    title: "Market Insights for Optimal Solutions",
    description : "Our deep understanding of market trends allows us to deliver optimized solutions tailored to your specific needs."
    , icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Solid Communication and Client Collaboration",
    description:
      "We prioritize transparent communication and regular updates, ensuring a collaborative approach throughout the project lifecycle.",
    icon: React.createElement(FaHandsHelping),
  },

] as const;

export const projectsData = [
  {
    title: "Lucary Marks Bidding Website",
    description:
      "A bidding website built for Lucary Marks, a French company. The website was developed using Laravel, PHP, JavaScript, and MySQL.",
    tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Bidding"],
    imageUrl: bidingImg,
  },
  {
    title: "Ecommerce Mobile App",
    description:
      "An ecommerce mobile app built for Android using native development. The app was developed using Java and Kotlin.",
    tags: ["Android", "Java", "Kotlin", "Ecommerce", "Mobile"],
    imageUrl: mobileImd,
  },
  {
    title: "daGuide",
    description:
      "daGuide is a platform that helps small and medium businesses reach out to more clients. It was developed using React and Next.js.",
    tags: ["React", "Next.js", "dsBusiness", "Client Outreach", "Web", "Mobile"],
    imageUrl: daGuideImg,
  },
] as const;

export const servicesData = [
  {
    name: "Responsive Landing Page Design",
    description: "Crafting engaging pages optimized for seamless viewing and interaction on all devices.",
    icon: landingPageImg,
  },
  {
    name: "Tailored Website Development",
    description: "Building custom websites that reflect your unique vision and goals.",
    icon: tailoredWebsiteImg,
  },

  {
    name: "Website Revamp and Enhancement",
    description: "Revitalize your online presence with captivating website redesigns.",
    icon: revampImg,
  },
  {
    name: "Website Hosting and Maintenance",
    description: "Ensure smooth website operation with reliable hosting and proactive maintenance..",
    icon: hostingImg,
  },

  {
    name: "Custom Windows Software",
    description: "Tailoring Windows applications to meet your exact needs for optimal performance.",
    icon: windowsImg,
  },
 
  {
    name : "Quality Assurance and Testing",
    description: "Ensure your software is reliable and bug-free with comprehensive QA and testing.",
    icon: qaImg,
  },
  {
    name: "Mobile App Creation",
    description: "Extend your reach with personalized mobile apps for iOS and Android.",
    icon: mobileAppImg,
  },
  {
    name: "AI Chatbot Integration",
    description: "Automate customer interactions and enhance user experience with AI chatbots.",
    icon: chatBotImg,
  },
  {
    name: "E-commerce Solutions",
    description: "Empower your business with secure online stores and efficient payment systems.",
    icon: ecommerceImg,
  },

] as const;