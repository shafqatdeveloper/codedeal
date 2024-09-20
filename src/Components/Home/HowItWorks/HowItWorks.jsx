import React from "react";
import trmpPng from "../../../assets/trump.png";
import "./HowItWorks.css";
import { BsFillTriangleFill } from "react-icons/bs";

const HowItWorks = () => {
  return (
    <div className="w-[1024px]">
      <div className="w-full">
        <h1 className="text-start pl-20 text-2xl tracking-wide font-mono">
          How It Works
        </h1>
        {/* 4 Sections */}
        <div className="flex flex-col gap-8">
          {/* Section 1 */}
          <div className="flex items-center mt-10">
            <section className="pt-8 pb-11 px-14 w-3/5 rounded-l-full rounded-br-full bg-gradient-to-b from-[#252525] to-[#141414]">
              <h1 className="text-brightCyan text-lg">Test Test</h1>
              <p className="text-justify pt-2 text-gray-500 text-sm pr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex
                amet hic quis dicta, autem vel laudantium rerum saepe, sunt
                voluptate eos delectus eaque animi itaque. Placeat est eum ab
                nesciunt incidunt, nostrum non, possimus quibusdam, natus sint
                neque minima.
              </p>
            </section>
            <section className="w-2/5 py-10 flex items-center justify-center relative px-20 bg-gradient-to-b bg-opacity-30 from-[#022f2fa8] via-[#062121a8] to-[#0c1111a8] mt-[-120px] ml-[-80px] z-10 rounded-r-full rounded-tl-full ">
              <div className="bg-yellow-500 p-1 flex items-center justify-center w-max rounded-full z-30 mr-10">
                <img src={trmpPng} className="w-32 h-32 rounded-full" alt="" />
              </div>
              <div className="absolute right-28 top-[50px] bg-brightCyan rounded-full w-28 h-28 bg-opacity-90 z-20"></div>
              <div className="absolute right-[70px] top-[35px] bg-[#035455] rounded-full w-20 h-20 bg-opacity-90 z-10"></div>
            </section>
          </div>
          {/* Section 2 */}
          <div className="flex items-center mt-10">
            <section className="w-2/5 pt-3 px-20 bg-gradient-to-b from-[#2F2101CC] via-[#201806CC] to-[#14110ACC] mt-32 mr-[-80px] z-10 rounded-tl-[100px] rounded-br-[100px]">
              <h1 className="text-center text-[#f28e24]">Testtest</h1>
              <div className="flex items-end justify-center gap-0 pt-3 pb-2">
                <div>
                  <BsFillTriangleFill
                    className="text-[#584114cc] mr-[-70px] mb-[4px]"
                    size={115}
                  />
                </div>
                <div>
                  <BsFillTriangleFill
                    className="text-[#eaa73ccc] mr-[-90px] mb-[2px] "
                    size={135}
                  />
                </div>
                <div>
                  <BsFillTriangleFill className="text-[#5a757acc]" size={160} />
                </div>
              </div>
            </section>
            <section className="pt-8 pb-11 pl-28 pr-14 w-3/5 rounded-l-full rounded-br-full bg-gradient-to-b from-[#252525] to-[#141414]">
              <h1 className="text-[#FF9527] text-lg">Test Test</h1>
              <p className="text-justify pt-2 text-gray-500 text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex
                amet hic quis dicta, autem vel laudantium rerum saepe, sunt
                voluptate eos delectus eaque animi itaque. Placeat est eum ab
                nesciunt incidunt, nostrum non, possimus quibusdam, natus sint
                neque minima.
              </p>
            </section>
          </div>
          {/* Section 3 */}
          <div className="flex items-center mt-10">
            <section className="pt-8 pb-11 pr-28 pl-14 w-3/5 rounded-l-full rounded-br-full bg-gradient-to-b from-[#252525] to-[#141414]">
              <h1 className="text-[#cc66ff] text-lg">Test Test</h1>
              <p className="text-justify pt-2 text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex
                amet hic quis dicta, autem vel laudantium rerum saepe, sunt
                voluptate eos delectus eaque animi itaque. Placeat est eum ab
                nesciunt incidunt, nostrum non, possimus quibusdam, natus sint
                neque minima.
              </p>
            </section>
            <section className="w-2/5 pt-3 px-20 bg-gradient-to-b from-[#2b0241cc] via-[#250733cc] to-[#261b2bCC] mb-44 ml-[-80px] z-10 rounded-tl-[100px] rounded-br-[100px]">
              <div className="flex items-end justify-center gap-0 pt-3 pb-2">
                <div>
                  <BsFillTriangleFill className="text-[#B300ADcc]" size={160} />
                </div>
                <div>
                  <BsFillTriangleFill
                    className="text-[#5901CDcc] ml-[-90px] mb-[1px] "
                    size={135}
                  />
                </div>
                <div>
                  <BsFillTriangleFill
                    className="text-[#42084Dcc] ml-[-70px] mb-[2px]"
                    size={115}
                  />
                </div>
              </div>
            </section>
          </div>
          {/* Section 4 */}
          <div className="flex items-center">
            <section className="w-2/5 py-10 flex items-center justify-center relative px-20 bg-gradient-to-b from-[#113001] via-[#102108cc] to-[#121411cc] mt-32 mr-[-80px] z-10 rounded-tl-[100px] rounded-br-[100px] ">
              <div className="bg-sky-500 p-1 flex items-center justify-center w-max rounded-full z-30">
                <img src={trmpPng} className="w-32 h-32 rounded-full" alt="" />
              </div>
              <div className="absolute left-20 top-[50px] bg-[#AECA03] rounded-full w-28 h-28 bg-opacity-90 z-20"></div>
              <div className="absolute left-[40px] bottom-[45px] bg-[#3A5008] rounded-full w-20 h-20 bg-opacity-90 z-10"></div>
            </section>
            <section className="pt-8 pb-11 pl-28 pr-14 w-3/5 rounded-l-full rounded-br-full bg-gradient-to-b from-[#252525] to-[#141414]">
              <h1 className="text-[#80dd00] text-lg">Test Test</h1>
              <p className="text-justify pt-2 text-gray-500 text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex
                amet hic quis dicta, autem vel laudantium rerum saepe, sunt
                voluptate eos delectus eaque animi itaque. Placeat est eum ab
                nesciunt incidunt, nostrum non, possimus quibusdam, natus sint
                neque minima.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
