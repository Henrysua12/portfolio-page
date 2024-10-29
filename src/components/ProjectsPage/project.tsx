import React from "react";

type ProjectsProps = {
  projects: string;
};

export const Projects = ({ projects }: ProjectsProps) => (
  <body>
    <div className="flex flex-col align-center justify center text-center p-[40px] bg-teal text-3xl font-bold">Projects</div>
    <div className="flex justify-center items-center p-[80px] pb-[300px] gap-[250px] bg-teal">
      <div className="flex flex-col">
        <div className="h-[250px] w-[250px] border-2 border-wenge rounded-[15px] bg-white"></div>
        <div className="w-[250px] text-center">LiveLearn-AI</div>
      </div>
      <div className="flex flex-col">
        <div className="h-[250px] w-[250px] border-2 border-wenge rounded-[15px] text-center bg-white"></div>
        <div className="w-[250px] text-center">Portfolio</div>
      </div>
      <div className="flex flex-col">
        <div className="h-[250px] w-[250px] border-2 border-wenge rounded-[15px] bg-white"></div>
        <div className="w-[250px] text-center text-align">E-commerce site</div>
      </div>
    </div>
  </body>
);
