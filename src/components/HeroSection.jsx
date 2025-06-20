import womanImage from "../assets/eaf98c86e767898b5d5bf09e2afbcbba14d30f51.png";
import plumProduct from "../assets/bfa6cb471def1625f335564f2d78bc0748f6b64c.jpg";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-[#EFF5E1] text-[#2D3B36]">
        {/* FIRST ROW */}
        <div className="flex flex-col md:flex-row 2xl:flex-row 2xl:items-center 2xl:justify-center overflow-hidden">
          {/* box1: Paragraph */}
          <p
            className="order-2 text-[16px] font-[400] leading-[22px] tracking-[-0.05em] w-[342px] mx-[30px] mt-[30px] mb-[50px]
                  md:order-1 md:indent-[74px] md:text-[14px] md:leading-[100%] md:mt-[242px] md:w-[234px] md:ml-[40px] md:mr-[93px]
                  2xl:mr-none 2xl:indent-[105px] 2xl:text-[20px] 2xl:w-[335px] 2xl:ml-[100px] 2xl:mr-[326px] 2xl:mt-[229px]"
          >
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>

          {/* box2: Heading */}
          <h1
            className="order-1 relative text-[75px] font-[900] leading-[60px] tracking-[-0.05em] uppercase ml-[-12px] mr-[-47px] mt-[98px]
                   md:order-2 md:absolute md:mt-[376px] md:z-20 md:text-[135px] md:leading-[110px] md:tracking-[-0.03em] md:font-[800] md:ml-[-35px] md:mr-[-51px]
                   2xl:top-0 2xl:relative 2xl:font-[700] 2xl:leading-[90px] 2xl:text-[100px] 2xl:mr-[438px] 2xl:mt-[146px] 2xl:w-[398px]"
          >
            GLOW
            <span className="inline-block sm:inline-block md:inline-block 2xl:hidden">
              WWW
            </span>
            <br />
            NATUR<span className="hidden 2xl:inline-block">-</span>
            <br className="hidden 2xl:inline-block" />
            ALLY
          </h1>

          {/* box3: Product Image */}
          <div
            className="hidden md:flex relative  md:order-3 md:mt-[142px]
                     2xl:mt-[162px] 2xl:mr-[100px] z-10 p-0"
          >
            <img
              src={plumProduct}
              alt="Plum Product"
              className="w-[402px] md:w-[335.93px] md:h-[332px] 2xl:w-[222px] 2xl:h-[220px] 2xl:rounded-3xl p-0"
            />
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="flex flex-col md:flex-row items-center justify-center z-0">
          {/* Woman Image and Background Text */}
          <div className="order-1 relative flex justify-center items-center">
            {/* SKINCARE Text */}
            <div className="absolute bottom-[-78px] md:pb-0 2xl:-bottom-8 z-0">
              <div
                className="text-[#2D3B36] text-[85px] font-[800] uppercase mx-[-19px]
                        md:text-[170px] md:mx-[-38px] md:tracking-[-0.05em] md:mb-[20px]
                        2xl:text-[378px] 2xl:ml-[-18px] 2xl:mr-[-17px] 2xl:tracking-[0%] 2xl:leading-[100%]"
              >
                SKINCARE
              </div>
            </div>

            {/* Woman Image */}
            <img
              src={womanImage}
              alt="Avocado woman"
              className="w-[402px] relative z-10 object-cover 
                   md:mt-[150px] md:w-[360px] 
                   2xl:w-[610px] 2xl:mt-[100px] 2xl:rounded-3xl"
            />

            {/* Speech Bubble */}
            <div
              className="absolute  left-1/2 -translate-x-1/2 z-10 flex items-center bg-[#EFF5E1]  rounded-full border border-[#2D3B36] 
                      w-[332px] bottom-[30px]  h-[80px]
                      md:w-[318px] md:h-[67px] md:bottom-[20px] 
                      2xl:w-[476px] 2xl:h-[100px] 2xl:bottom-[30px]"
            >
              <img
                src={plumProduct}
                alt="icon"
                className="w-[60px] h-[60px] rounded-full border-dashed border p-0.5 m-[6px]
                     md:w-[51px] md:h-[50px] md:m-[8px]
                     2xl:w-[80px] 2xl:h-[80px] 2xl:m-[10px]"
              />
              <span className="text-[14px] ml-[20px] mr-[28px] my-[26px] md:my-[20px] md:ml-[15px] md:mr-[30px] 2xl:ml-[42px] 2xl:mr-[40px] 2xl:mt-[31px] 2xl:text-[20px] 2xl:w-[304px]">
                While giving you an invigorating cleansing experience.
              </span>
            </div>
          </div>

          {/* Mobile Only Product Image */}
          <div className="order-2 flex w-[402px] md:hidden z-10">
            <img
              src={plumProduct}
              alt="Plum Product"
              className="w-full h-auto object-contain 2xl:rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Shop Now Button */}

      <button className="bg-[#2D3B36] text-[#EFF5E1] px-[50px] py-[19px] rounded-full w-[178px] h-[50px] hover:bg-black transition z-20 ml-[111px] mr-[113px] mt-[40px] relative flex items-center  md:absolute">
        Shop Now
      </button>
    </>
  );
};

export default HeroSection;
