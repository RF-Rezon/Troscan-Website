"use client";
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
      <div className="min-h-screen mx-auto max-w-[1284px] my-[100px] md:my-[140px] lg:my-[186px] md:space-x-10 px-4 relative space-x-6">
        <div className="w-full flex items-center justify-between gap-x-4 pb-10">
          <div className="flex-1/2"></div>
          {/* ............................ */}
          <div className="flex-1/2">
            <div className="w-full base-gold-text flex flex-col lg:space-y-[86px] space-y-[20px] md:px-6 lg:px-0">
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
        </div>
        <div className="flex items-center justify-between space-x-10">
          <div className="flex-1/2">
            <div className="lg:w-[600px] h-[572px] hidden lg:block">
              <img
                className="w-full h-full object-cover rounded-[8px]"
                src={activeImage}
                alt="image"
              />
            </div>
          </div>
          <div className="flex-1/2">
            <div className="w-full base-gold-text lg:space-y-[86px] space-y-[20px] md:px-6 lg:px-0">
              <ul className="t-4 base-gold-text">
                {services.map((i) => (
                  <li
                    key={i.id}
                    className="py-2.5 border-b-[1px] flex cursor-pointer"
                    onMouseEnter={() => setActiveImage(i.img)}
                  >
                    <span className="t-1 mr-4.5">{i.id}</span>
                    <p>{i.title}</p>
                  </li>
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
