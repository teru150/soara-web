"use client";

import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  
  // ロゴを最初に表示
  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="font-sans grid font-bold text-[44px] flex flex-col items-center justify-center min-h-screen z-20 relative">
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-1000 ${
            showLogo ? 'opacity-85' : 'opacity-0'
          }`}
          style={{
            width: '400px',
            height: '400px',
            backgroundImage: 'url(/images/soara-logo.png)',
            backgroundSize: '400px 400px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pointerEvents: 'none'
          }}
        />
        <div className="text-center relative z-20" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px rgba(0, 0, 0, 0.9), 1px -1px 2px rgba(0, 0, 0, 0.9), -1px 1px 2px rgba(0, 0, 0, 0.9)' }}>
          <TypeAnimation 
            sequence={[
              3000,
              "空へ、挑み、創る。",
              1000,
              "空へ、挑み、創る。\n We build wings—and what lies beyond.",
              500,
              () => {
                setShowWelcome(true);
                setTimeout(() => setShowScrollDown(true), 1000);
              }
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
        {showScrollDown && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-300 transition-colors">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mb-2 relative">
                <div className="w-1 h-2 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-pulse"></div>
              </div>
              <span className="text-xs opacity-70">Scroll</span>
            </div>
          </div>
        )}
      </div>

      <div className="w-full bg-white text-black min-h-screen py-16 rounded-lg">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our History</h2>
              <p className="text-gray-700 leading-relaxed">
                2025年<br />
                7月5日　　　結成<br />
                7月23日　　公式HP・SNS開設
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Goal</h2>
              <p className="text-gray-700 leading-relaxed">
                私たちの最大の目標は、万全の状態でプラットホームに立ち、事故を起こさずに湖岸に帰ってくることです。何百メートル飛べる機体、美しく飛ぶ機体を作りたいという意気もありますが、それよりもパイロットの安全性を第一にしたいのです。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Reason</h2>
              <p className="text-gray-700 leading-relaxed">
                過去高校生として鳥人間コンテストに出場した団体は多くなく、それも殆どが高専や工業高校の生徒です。100m以上の記録を残したチームとなるとかなり限られます。私たちが最終的に目指すのは普通科の高校生として鳥人間コンテストに出場し、100m以上の滑空を記録することです。開成の名前を背負って鳥人間コンテストの48年に渡る歴史に新たな1ページを刻むことができれば幸いです。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Our Name</h2>
              <p className="text-gray-700 leading-relaxed">
                SOARAは「空」と「舞い上がる」を意味する英単語「Soar」を掛け合わせた名前です。
              </p>
            </section>
          </div>
        </div>
        <div className="text-center py-8">
          <p className="text-sm text-gray-400">© Soara 2025</p>
        </div>
      </div>
    </>
  );
}