"use client";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="font-sans grid font-bold text-[35px] flex flex-col items-center justify-center min-h-screen z-20">
      <TypeAnimation 
        sequence={[
          "空へ、挑み、創る."
        ]}
        wrapper="span"
        speed={400}
        repeat={Infinity}
      />
    </div>
  );
}