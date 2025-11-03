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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* ページ上部のアクセントライン */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] z-50"></div>

      <div className="font-sans grid font-bold text-[36px] md:text-[44px] flex flex-col items-center justify-center min-h-screen z-20 relative flex-grow bg-black">
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
              "常識の向こうへ、碧空の彼方へ。",
              1000,
              "常識の向こうへ、碧空の彼方へ。\n Beyond the limits, beyond the blue sky.",
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
              学校の枠を超え、国境を越えて。<br />
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

      <div className="bg-white text-black py-16 w-full">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-24">
            <section>
              <p className="text-gray-700 leading-relaxed text-xl text-center mb-8">
                SOARAは、2025年3月に結成された日本初の高校生有志鳥人間チームです。
                <br />
                <br />
                学校の部活動としての承認が得られなかった代表・入山の「それでも空を飛びたい」という情熱から始まり、現在は東京を中心に全国7校、さらにはアメリカからも仲間が集まり、21名で活動しています。
                <br />
                <br />
                「高校生には早すぎる」「資金がなければ無理」――
                <br />
                こうした常識を、私たちは一つひとつ乗り越えていきます。
                <br />
                <br />
                2026年7月、琵琶湖の空で、高校生の可能性を証明します。
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-8 text-center">
                <span className="bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">Our Goals</span>
              </h2>
              <div className="space-y-12 max-w-3xl mx-auto">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-b from-[#369bff] to-[#0050a7] rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-bold mb-2">
                      第48回鳥人間コンテストに出場し、一切の事故なく、無事に湖岸に帰る
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">
                      2026年7月、琵琶湖で開催される第48回鳥人間コンテストに出場し、200mの定常滑空を達成する。そして何より、パイロットを含む全メンバーが一切の事故なく、無事に帰還する。
                      <br />
                      <br />
                      これが、私たちの最優先目標です。10mの高さから人を乗せて飛ばす責任の重さを、高校生であっても決して軽んじません。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-b from-[#369bff] to-[#0050a7] rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-bold mb-2">
                      安定した飛行をし、The Fresh Birdman賞を獲得する
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">
                      The Fresh Birdman賞――出場3回以内のチームに贈られる新人賞の獲得を目指します。
                      <br />
                      <br />
                      高校生有志チームが初年度で技術的に評価されることで、『高校生でもここまでできる』という可能性を示し、後に続く世代に希望を与えたいと考えています。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-b from-[#369bff] to-[#0050a7] rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-bold mb-2">
                      中高生時代から航空分野に関わる学生を増やすことで、日本の航空産業の未来を切り開く
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">
                      日本の航空産業は、人材不足という深刻な課題に直面しています。
                      <br />
                      <br />
                      小学生の頃に空や宇宙に憧れていた子どもたちの多くが、中高生になると忙しさの中でその夢を忘れてしまいます。
                      <br />
                      <br />
                      私たちは、それを『もったいない』と考えます。
                      <br />
                      <br />
                      SOARAの挑戦を通じて、中高生が航空分野への情熱を持ち続け、将来この業界を選ぶきっかけを作ります。それが、日本の空の未来を支えることにつながると信じています。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-b from-[#369bff] to-[#0050a7] rounded-full mt-2 mr-6 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-bold mb-2">
                      鳥人間コンテストの世界的な知名度を上げる
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">
                      SOARAには、アメリカ在住の高校生メンバーも参加しています。彼らとの交流を通じて分かったのは、『Birdman Rally』という素晴らしい大会が、世界ではほとんど知られていないという事実でした。
                      <br />
                      <br />
                      中には「自分の国でもチームを作りたい」と言ってくれる人まで現れました。
                      <br />
                      <br />
                      私たちは、SNS・YouTube・国際イベントを通じて、鳥人間コンテストの魅力を世界に発信し、いつか海外チームも参加する国際大会への発展を夢見ています。
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10">
                <a href="/about#goals" className="inline-block px-8 py-4 bg-gradient-to-r from-[#369bff] to-[#0050a7] hover:from-[#4aabff] hover:to-[#1060b7] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#369bff]/50">
                  詳しくはこちら
                </a>
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-center">
                <span className="bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">About Our Name</span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                チーム名である「SOARA」は「舞い上がる」という意味の英単語である「soar」と、アルファベットの最初の文字であり、「原点」を意味する「A」を組み合わせた造語です。 <br>
                </br>SOARAは、日本の未来を担う中高生が、空へと飛び立つチャンスを獲得し、今後の航空業界をリードする人材へと育つ最初のきっかけとなることを願って名付けられています。
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6 text-center">
                <span className="bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">お知らせ</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="bg-white border-t-2 border-[#369bff] p-4 flex">
                  <span className="text-black inline-block w-32 text-lg">2025/11/03</span>
                  <span className="text-black font-bold text-lg">企画書を完成し、スポンサー募集を本格開始しました</span>
                </div>
                <div className="bg-white border-t border-gray-300 p-4 flex">
                  <span className="text-black inline-block w-32 text-lg">2025/10/01</span>
                  <span className="text-black font-bold text-lg">作業場での製作活動を開始しました</span>
                </div>
                <div className="bg-white border-t border-gray-300 p-4 flex">
                  <span className="text-black inline-block w-32 text-lg">2025/9/17</span>
                  <span className="text-black font-bold text-lg">TiB FAB様のご支援により作業場所が決定しました</span>
                </div>
                <div className="bg-white border-t border-gray-300 border-b-2 border-b-[#0050a7] p-4 flex">
                  <span className="text-black inline-block w-32 text-lg">2025/9/13</span>
                  <span className="text-black font-bold text-lg">HoPE様主催の秋の交流会に参加しました</span>
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