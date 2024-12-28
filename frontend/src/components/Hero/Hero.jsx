const Hero = () => {
  return (
    <div className="flex  flex-col sm:flex-row items-center    border border-gray-400">
      {/* hero left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141] ">
          <div className="flex items-center gap-2 ">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
            <p className="uppercase font-medium text-sm  md:text-base">
              Our Bestsellers
            </p>
          </div>
          <h1 className="prata text-3xl sm:py-3 lg:text-5xl leading-relaxed uppercase">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2 ">
            <p className="font-semibold text-sm md:text-base uppercase">
              Shop Now
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
          </div>
        </div>
      </div>
      {/* hero image */}
      <div className="w-full sm:w-1/2">
        <img
          className=" "
          src="https://images.unsplash.com/photo-1464961968964-a80a9b51f3d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
