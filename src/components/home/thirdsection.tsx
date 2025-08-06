"use client";

import { useEffect, useState } from "react";
import thirdsectionImgs from "../../utils/jsons/thirdsection/thirdsectionImgs.json";

const ThirdSection = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen max-w-[1250px] mx-auto my-[100px] md:my-[140px] lg:my-[186px] relative px-4 md:px-0">
      <div className="absolute flex items-center justify-center h-full">
        <p className="t-5 base-gold-text text-center md:w-[45%] pb-12 -mt-12">
          Transforming spaces with style, through Troscán's exquisite design
          expertise.
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 md:gap-12 gap-y-40 md:gap-y-0">
        {thirdsectionImgs.map((i: any, index: number) => {
          const width =
            windowWidth && windowWidth < 768 ? "70px" : `${i.height}px`;
          const height =
            windowWidth && windowWidth < 768 ? "100px" : `${i.width}px`;
          const marginTop = isMobile
            ? index === 0 || index === 2 || index === 4 || index === 6
              ? "40px"
              : "0px"
            : index === 4
            ? "80px"
            : "0px";

          return (
            <div className="relative" key={index}>
              <div className="mx-auto" style={{ width, height, marginTop }}>
                <img
                  src={i.img}
                  alt={i.alt}
                  className="corner-round h-full w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdSection;

// "use client";
// import { useEffect, useState } from "react";
// import thirdsectionImgs from "../../utils/jsons/thirdsection/thirdsectionImgs.json";
// const ThirdSection = () => {
//   const screenWidth = window.innerWidth;

//   const [isMobile, setIsMobile] = useState(screenWidth < 640);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(screenWidth < 640);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen max-w-[1250px] mx-auto my-[100px] md:my-[140px] lg:my-[186px] relative px-4 md:px-0 ">
//         <div className="absolute flex items-center justify-center h-full">
//           <p className="t-5 base-gold-text text-center md:w-[45%] pb-12 -mt-12">
//             Transforming spaces with style, through Troscán's exquisite design
//             expertise.
//           </p>
//         </div>
//         <div className="grid grid-cols-3 grid-rows-2 md:gap-12 gap-y-40 md:gap-y-0">
//           {thirdsectionImgs.map((i: any, index: number) => (
//             <div className="relative" key={index}>
//               <div
//                 className={"mx-auto"}
//                 style={{
//                   width: screenWidth < 768 ? "70px" : `${i.height}px`,
//                   height: screenWidth < 768 ? "100px" : `${i.width}px`,
//                   marginTop: isMobile
//                     ? index === 0 || index === 2 || index === 4 || index === 6
//                       ? "40px"
//                       : "0px"
//                     : index === 4
//                     ? "80px"
//                     : "0px",
//                 }}
//               >
//                 <img
//                   src={i.img}
//                   alt={i.alt}
//                   className="corner-round h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ThirdSection;
