import React from "react";
import './index.css';

type AboutMeProps = {
    aboutMe: string;
  };

  export const AboutMe = ({ aboutMe }: AboutMeProps) => (
    <div className="bg-white-smoke p-4 h-screen">
        <h1 className="text-3xl font-bold text-blue-900 underline">About Me</h1>  
        <p className="text-secondary">
            I am a Motivated computer science student with a recent career change driven by a deep passion for technology, seeking to
            enhance skills and contribute to the development of innovative solutions that leverage cutting-edge technologies to
            address real-world challenges.<br></br>
            In my spare time, I love going to the gym, hanging out with my friends and playing basketball from time to time.
            I also love traveling to new places and eating all kinds of different foods.
          </p>
    </div>

  );