import * as React from "react";
import Landingpage1 from "../public/landingpage1.png";
import Landingpage2 from "../public/landingpage2.png";
import Landingpage3 from "../public/landingpage3.png";
import Work1 from "../public/work1.png";
import Work2 from "../public/work2.png";

const RainbowText = ({ text }) => {
  const colors = [    
    'text-blue-500', 
    'text-green-500', 
    'text-red-500',
    'text-lime-500',  
    'text-yellow-500', 
    'text-purple-500', 
    'text-teal-500'
];

  const letters = text.split('').map((char, index) => (
    <span key={index} className={`${colors[index % colors.length]} font-highlight`}>
      {char}
    </span>
  ));

  return <>{letters}</>;
};


export default function Home() {
  return (
    <div className="font-header flex flex-col p-6 bg-black max-md:px-5">
      <div className="flex gap-2.5 justify-between w-full text-2xl text-slate-100 font-[274] max-md:flex-wrap max-md:max-w-full">
        <div>Jessie Han</div>
        <div className="flex gap-5 whitespace-nowrap">
          <a className="hover:underline" href="https://read.cv/jessiehanvana" target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="hover:underline" href="https://linkedin.com/in/jiahuihan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="font-main mt-40 text-5xl leading-tight text-slate-100 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        I am a <RainbowText text="product designer"/> that translate data and AI insights<br />
        into impactful user experiences.
      </div>
      <div className="font-main mt-16 text-5xl leading-tight text-slate-100 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        I thrive on solving <RainbowText text="complex problems"/>, whether it means
        <br />
        extensive domain research, iterative design blending diverse
        <br />
        inspirations or tweaking every detail on the prototype.
      </div>
      <div className="mt-48 rounded-3xl border border-white border-solid max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={Landingpage1.src}
              className="grow w-full aspect-[1.41] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center px-6 pt-16 text-slate-100 max-md:px-5 max-md:max-w-full">
              <div className="font-title leading-tight text-4xl max-md:max-w-full">
                A Solo Designer&apos;s Journey in Capturing Reinsurance Treaty Terms 
              </div>
              <div className="mt-12 text-xl max-md:max-w-full">
                <a href="https://jiahuihan.notion.site/Designing-for-the-almost-first-InsurTech-SaaS-d18a1acbf6a64960bb86643ab94e8fc1?pvs=4" 
                className="text-xl max-md:max-w-full hover:underline" target="_blank" rel="noopener noreferrer">
                  Case Study on Notion &#8599; 
                </a>
              </div>
            
            
            
            
            </div>
          </div>
        </div>
      </div>
      <div className="mt-44 rounded-3xl border border-white border-solid max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center px-6 pt-16 text-slate-100 max-md:px-5 max-md:max-w-full">
              <div className="font-title leading-tight text-4xl max-md:max-w-full">
                Cards of the Masters: Reimagining AI conversations{" "}
              </div>
              <div className="mt-12 text-xl max-md:max-w-full">Coming Soon</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={Landingpage2.src}
              className="grow w-full aspect-[1.41] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-44 rounded-3xl border border-white border-solid max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={Landingpage3.src}
              className="grow w-full aspect-[1.41] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center px-6 pt-16 text-slate-100 max-md:px-5 max-md:max-w-full">
              <div className="font-title leading-tight text-4xl max-md:max-w-full">
                Hacking PowerBI Dashboards for goods
              </div>
              <div className="mt-12 text-xl max-md:max-w-full">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-title self-start mt-44 text-4xl text-slate-100 max-md:mt-10 max-md:max-w-full">
        Other Works / Selected Projects
      </div>
      <div className="font-body self-start mt-2.5 text-xl text-slate-100 max-md:max-w-full">
        Data Visualization / Prototyping / Graphic Design
      </div>
      <div className="mt-20 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={Work1.src}
              className="grow w-full aspect-[1.75] max-md:mt-6 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={Work2.src}
              className="w-full aspect-[1.75] max-md:mt-6 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

