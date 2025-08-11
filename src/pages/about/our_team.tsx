"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ourteams from "../../utils/jsons/ourteams/ourteams.json";
import { useRef } from "react";

const Our_Team = () => {
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen mx-auto flex flex-col items-center justify-center max-w-[1284px] mt-[50px] md:mt-[140px] lg:lg:mt-[80px] px-4"
    >
      <div className="text-center base-gold-text w-full md:w-[65%] mb-13">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center space-x-1 md:pb-4 pb-1 justify-center"
        >
          <span>&#9679;</span>
          <span className="t-1 text-left">Our Team</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="t-6"
        >
          Meet the Visionaries <br />
          Behind Troscán
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
        {ourteams.map((i, index) => (
          <motion.div
            key={i.alt}
            className="flex flex-col bg-white corner-round overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img
              src={i.img}
              className="w-full h-[300px] object-cover"
              alt={i.alt}
            />

            <div className="p-5 base-gold-text flex flex-col flex-1">
              <p className="t-3">{i.name}</p>
              <p className="t-1 pb-5 pt-0.5">{i.title}</p>
              <div className="mt-auto">
                <Link
                  href={i.email}
                  className="corner-round base-white-bg base-gold-text px-6 py-3 t-2 inline-block"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Our_Team;
