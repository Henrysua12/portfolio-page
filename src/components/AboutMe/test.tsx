import React from "react";
import './index.css';
import img from './me.jpg'

type AboutMeProps = {
    aboutMe: string;
  };

  export const AboutMe = ({ aboutMe }: AboutMeProps) => (

  <div className="grid grid-cols-2 h-screen items-center p-4 bg-white-smoke">
    <div className="flex justify-center">
      <img src={img} alt="my image" className="w-3/4 h-auto object-cover" />
    </div>

    <div className="text-right">
      <h1 className="text-3xl font-bold text-blue-900 underline mb-4">About Me</h1>  
      <p className="text-secondary leading-relaxed">
        I am a motivated computer science student with a recent career change driven by a deep passion for technology, seeking to
        enhance skills and contribute to the development of innovative solutions that leverage cutting-edge technologies to
        address real-world challenges.<br />
        In my spare time, I love going to the gym, hanging out with my friends, and playing basketball from time to time.
        I also love traveling to new places and eating all kinds of different foods.
      </p>
    </div>
  </div>
);