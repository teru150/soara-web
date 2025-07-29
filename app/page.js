"use client";

import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import PageFooter from "../components/PageFooter";

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
    <div className="min-h-screen flex flex-col">
      <div className="font-sans grid font-bold text-[36px] md:text-[44px] flex flex-col items-center justify-center min-h-screen z-20 relative flex-grow">
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
              2500,
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

      <div className="bg-white text-black py-16 flex-grow" style={{width: '100vw', marginLeft: 'calc(-50vw + 50%)'}}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-24">
            <section>
              <p className="text-gray-700 leading-relaxed text-xl text-center mb-8">
                SOARAは学校を、そして国境をも跨いで設立された史上初の高校生有志鳥人間チームです。東京を拠点とし、2026年度鳥人間コンテスト滑空機部門出場を目指し14人の高校生が活動しています。
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Our Goals</h2>
              <div className="space-y-12 max-w-3xl mx-auto">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    第48回鳥人間コンテストに出場し、一切の事故なく、無事に湖岸に帰る
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    安定した飛行をし、The Fresh Birdman賞を獲得する
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    中高生時代から航空分野に関わる学生を増やすことで、日本の航空産業の未来を切り開く
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    鳥人間コンテストの世界的な知名度を上げる
                  </p>
                </div>
              </div>
              <div className="text-center mt-10">
                <a href="/about#goals" className="inline-block px-8 py-4 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-lg transition-colors duration-300 hover:shadow-lg border border-gray-300">
                  詳しくはこちら
                </a>
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">About Our Name</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                チーム名である「SOARA」は「舞い上がる」という意味の英単語である「soar」と、アルファベットの最初の文字であり、「原点」を意味する「A」を組み合わせた造語です。 <br>
                </br>SOARAは、日本の未来を担う中高生が、空へと飛び立つチャンスを獲得し、今後の航空業界をリードする人材へと育つ最初のきっかけとなることを願って名付けられています。
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">お知らせ</h2>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white border-t border-black p-4 flex">
                  <span className="text-black inline-block w-32 text-lg">2025/7/30</span>
                  <span className="text-black font-bold text-lg">aircraftページにて機体設計についての解説を準備中です</span>
                </div>
                <div className="bg-white border-b border-black p-4 flex">
                  <span className="text-black inline-block w-32 text-lg">2025/7/28</span>
                  <span className="text-black font-bold text-lg">公式HPを開設しました</span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
}