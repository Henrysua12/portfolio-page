import React from "react";
import Button from "@mui/material/Button";
type IntroProps = {
  name: string;
};

export const Intro = ({ name }: IntroProps) => (
  <div>
    <div>
      <h2> Hi my name is {name}</h2>
      <h2> I'm a Full Stack Software Engineer </h2>
    </div>
    <div>
      <Button>Resume Cv</Button>
      <Button>Contact Me</Button>
    </div>
  </div>
);
