import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

type IntroProps = {
  name: string;
};

// Style MUI Button with Tailwind utility classes
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '0.375rem', // Tailwind's rounded-md
  padding: '0.5rem 1rem', // Tailwind's py-2 px-4
  textTransform: 'none', // Disable uppercase transformation
}));

export const Intro = ({ name }: IntroProps) => (
  <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-4">Hi, my name is {name}</h2>
      <h2 className="text-2xl font-semibold">I'm a Full Stack Software Engineer</h2>
    </div>
    <div className="flex space-x-4">
      <StyledButton variant="contained" color="primary" className="bg-blue-500 text-white hover:bg-blue-600">
        Resume Cv
      </StyledButton>
      <StyledButton variant="contained" color="secondary" className="bg-green-500 text-white hover:bg-green-600">
        Contact Me
      </StyledButton>
    </div>
  </div>
);

// flex and flex-col are containers that are common patterns and 