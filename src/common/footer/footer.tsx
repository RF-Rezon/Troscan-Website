const Footer = () => {
  return (
    <>
      <div className="min-h-[82vh] base-gold-bg flex flex-col">
        <div className="flex-[0.7] flex justify-center items-end">
          <p className="t-logo text-white pt-16 cursor-pointer">Troscán</p>
        </div>
        <div className="flex-[0.6] flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[47%] md:mx-auto gap-8 md:py-[67px] py-[40px]">
            <div>
              <ul className="text-center space-y-1.5 text-white">
                <li className="mb-4 t-1 text-[#ffffffbe]">Sitemap</li>
                <li className="t-4 cursor-pointer">About</li>
                <li className="t-4 cursor-pointer">Projects</li>
                <li className="t-4 cursor-pointer">News</li>
                <li className="t-4 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <ul className="text-center space-y-1.5 text-white">
                <li className="mb-4 t-1 text-[#ffffffbe]">Socials</li>
                <li className="t-4 cursor-pointer">Facebook</li>
                <li className="t-4 cursor-pointer">Instagram</li>
                <li className="t-4 cursor-pointer">LinkedIn</li>
                <li className="t-4 cursor-pointer">Twitter</li>
              </ul>
            </div>
            <div>
              <ul className="text-center space-y-1.5 text-white">
                <li className="mb-4 t-1 text-[#ffffffbe]">More</li>
                <li className="t-4 cursor-pointer">License</li>
                <li className="t-4 cursor-pointer">Grainient</li>
                <li className="t-4 cursor-pointer">Inspirux</li>
                <li className="t-4 cursor-pointer">Store</li>
              </ul>
            </div>
          </div>
          <div>
            <hr className="text-[#ffffffbe] h-[0.5px] w-[93%] mx-auto" />
            <div className="flex items-center justify-center h-[70px] w-full">
              <p className="t-1 text-center text-[#ffffffbe]">
                © 2025, All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
