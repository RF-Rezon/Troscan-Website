"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ExpertiseSection = () => {
  const [activeImage, setActiveImage] = useState("/sec5/1.jpeg");
  const services = [
    { id: "01", title: "Custom Furniture Design", img: "/sec5/1.jpeg" },
    { id: "02", title: "Room Decoration & Styling", img: "/sec5/2.jpeg" },
    {
      id: "03",
      title: "Space Planning & Interior Layout",
      img: "/sec5/3.jpeg",
    },
    { id: "04", title: "Home Renovations & Remodeling", img: "/sec5/4.jpeg" },
    { id: "05", title: "Lighting Design", img: "/sec5/5.jpeg" },
    {
      id: "06",
      title: "Virtual Interior Design Consultations",
      img: "/sec5/6.jpeg",
    },
  ];
  return (
    <>
      <div className="mb-16 lg:mb- lg:min-h-screen mx-auto max-w-[1284px] my-[100px] md:my-[140px] lg:my-[186px] md:space-x-10 px-4 relative space-x-6">
        <div className="w-full pb-14 flex items-center justify-end">
          <div className="lg:w-[50%] w-full base-gold-text md:px-6 lg:px-0">
            <div className="lg:mr-10">
              <p className="flex items-center space-x-1 md:pb-4 pb-1">
                <span className="base-gold-text">&#9679;</span>
                <span className="t-1 text-left">Our Expertise</span>
              </p>
              <p className="t-6 text-left">
                Selecting the ideal elements to elevate your space
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-12">
          <div className="flex-1/2 hidden lg:block">
            <div className="relative lg:w-[600px] h-[572px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  initial={{ y: 180 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover rounded-[8px] absolute top-0 left-0"
                  src={activeImage}
                  alt="image"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="flex-1/2">
            <div className="w-full base-gold-text lg:space-y-[86px] space-y-[20px] md:px-6 lg:px-0">
              <ul className="t-4 base-gold-text">
                {services.map((i) => (
                  <motion.li
                    whileHover={{
                      backgroundColor: "#8D493A",
                      color: "#ffff",
                      paddingLeft: "16px",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    key={i.id}
                    className="py-[9px] border-b-[1.5px] flex cursor-pointer bg-fill-hover"
                    onMouseEnter={() => setActiveImage(i.img)}
                  >
                    <span className="t-1 mr-4.5">{i.id}</span>
                    <p>{i.title}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertiseSection;
