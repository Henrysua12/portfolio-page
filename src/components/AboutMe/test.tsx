import React from "react";
import './index.css';
import img from './me.jpg'

type AboutMeProps = {
  aboutMe: string;
};

export const AboutMe = ({ aboutMe }: AboutMeProps) => (
  <body className="p-10 bg-wenge flex items-center justify-center min-h-screen">
  <div className="flex flex-col lg:flex-row items-center p-4 bg-wenge max-w-5xl w-full space-y-4 lg:space-y-0 lg:space-x-8">
    
    <div className="flex justify-center bg-wenge- w-full lg:w-5/12">
      <img src={img} alt="my image" className="w-full h-auto max-h-96 object-cover border border-black rounded-lg" />
    </div>

    <div className="flex flex-col justify-center items-center mb-4 bg-white p-6 rounded-lg w-full lg:w-7/12">
      <h1 className="text-3xl font-bold text-wenge mb-2">About Me</h1>
      <p className="text-black leading-relaxed text-center p-4">
        I am a motivated computer science student with a recent career change driven by a deep passion for technology, seeking to
        enhance skills and contribute to the development of innovative solutions that leverage cutting-edge technologies to
        address real-world challenges. In my spare time, I love going to the gym, hanging out with my friends, and playing basketball from time to time.
        I also love traveling to new places and eating all kinds of different foods.
      </p>
    </div>
  </div>
</body>



);
