"use client";

import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  return (
    <div className="font-sans grid font-bold text-[35px] flex flex-col items-center justify-center min-h-screen z-20">
      <div className="text-center">
        <TypeAnimation 
          sequence={[
            "空へ、挑み、創る。",
            1000,
            "空へ、挑み、創る。\n We build wings—and what lies beyond.",
            500,
            () => setShowWelcome(true)
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          style={{ whiteSpace: 'pre-line' }}
        />
        {showWelcome && (
          <div className="mt-8 text-2xl animate-fade-in">
            史上初の高校生有志鳥人間チーム&ldquo;SOARA&rdquo;公式HPへようこそ。
          </div>
        )}
      </div>
    </div>
  );
}