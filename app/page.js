"use client";

import { useState, useEffect, useRef } from "react";
import PageFooter from "../components/PageFooter";
import contentData from "../data/content.json";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showHeroText, setShowHeroText] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef(null);
  const slideshowImages = [
    "/images/pics/IMG_2485.jpg",
    "/images/pics/IMG_3019.jpg",
    "/images/pics/IMG_3584.jpg",
    "/images/pics/IMG_3593.jpg",
    "/images/pics/IMG_6802.jpg",
    "/images/pics/IMG_7502.jpg",
    "/images/pics/kareoke.jpg",
  ];

  // sessionStorageをチェック（再訪問時はアニメーションをスキップ）
  useEffect(() => {
    const visited = sessionStorage.getItem('soara_visited');
    if (visited === 'true') {
      setHasVisited(true);
      setSkipAnimation(true);
      // 再訪問時は即座に全て表示
      setShowLogo(true);
      setShowHeroText(true);
      setShowWelcome(true);
      setShowScrollDown(true);
    } else {
      sessionStorage.setItem('soara_visited', 'true');
    }
  }, []);

  // ロゴを最初に表示
  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => setShowLogo(true), 100);
      return () => clearTimeout(timer);
    }
  }, [hasVisited]);

  // ヒーローテキストとメッセージの表示タイミング
  useEffect(() => {
    if (hasVisited || skipAnimation) {
      setShowHeroText(true);
      setShowWelcome(true);
      setShowScrollDown(true);
      return;
    }

    const heroTimer = setTimeout(() => setShowHeroText(true), 1200);
    const welcomeTimer = setTimeout(() => setShowWelcome(true), 2200);
    const scrollTimer = setTimeout(() => setShowScrollDown(true), 3200);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(scrollTimer);
    };
  }, [hasVisited, skipAnimation]);

  // イントロセクションのスライドショー
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // スキップボタンのハンドラー
  const handleSkip = () => {
    setSkipAnimation(true);
    setShowLogo(true);
    setShowHeroText(true);
    setShowWelcome(true);
    setShowScrollDown(true);
  };

  // スクロールダウンのハンドラー
  const handleScrollDown = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroHeadlineClass = `transition-all duration-[1200ms] ease-out transform ${
    showHeroText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* ページ上部のアクセントライン */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] z-50"></div>

      {/* ヒーローセクション */}
      <div
        className="font-sans grid font-bold text-[36px] md:text-[44px] flex flex-col items-center justify-center min-h-screen z-20 relative flex-grow"
        style={{
          backgroundImage: "url(/images/website-hero-mk3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#000"
        }}
      >
          <div className={`absolute inset-0 bg-black/70 transition-opacity duration-1000 ${showLogo ? 'opacity-75' : 'opacity-0'}`} />
          <div className="text-center relative z-20 px-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9), -1px -1px 2px rgba(0, 0, 0, 0.9), 1px -1px 2px rgba(0, 0, 0, 0.9), -1px 1px 2px rgba(0, 0, 0, 0.9)' }}>
            <div className={heroHeadlineClass}>
              <p className="leading-snug">
                <span className="block">常識の向こうへ、碧空の彼方へ。</span>
                <span className="block">Beyond the limits, beyond the blue sky.</span>
              </p>
            </div>
            {showWelcome && (
              <div className="mt-8 text-2xl animate-fade-in">
                学校の枠を超え、国境を越えて。<br />
                史上初の高校生有志鳥人間チーム&ldquo;SOARA&rdquo;公式HPへようこそ。
              </div>
            )}
          </div>
          {showScrollDown && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-300 transition-colors" onClick={handleScrollDown}>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full mb-2 relative">
                  <div className="w-1 h-2 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-pulse"></div>
                </div>
                <span className="text-xs opacity-70">Scroll</span>
              </div>
            </div>
          )}

          {/* スキップボタン（初回訪問時のみ表示） */}
          {!hasVisited && (
            <button
              onClick={handleSkip}
              className="absolute top-8 right-8 z-50 px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-400 hover:border-white rounded-full transition-all duration-300"
              aria-label="アニメーションをスキップ"
            >
              Skip
            </button>
          )}
        </div>

      {/* コンテンツセクション */}
      <div ref={contentRef} className="bg-white text-black py-16 w-full">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-24">
            {/* イントロダクションセクション */}
            <section className="grid gap-10 lg:grid-cols-2 items-stretch">
              <div className="flex flex-col justify-between items-center text-center gap-8 h-full">
                <div>
                  <p className="text-gray-700 leading-relaxed text-xl whitespace-pre-line text-center">
                    {contentData.home.intro.text}
                  </p>
                  <div className="mt-6 h-1 w-24 bg-gradient-to-r from-[#369bff] to-[#0050a7] mx-auto"></div>
                </div>

                <div className="w-full bg-gradient-to-br from-[#369bff]/15 via-[#0050a7]/10 to-transparent border border-[#369bff]/40 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">私たちと一緒に空を目指しませんか？</h3>
                  <p className="text-gray-600 mb-6">SOARAの挑戦に共感してくださる方を募集中です。支援・参加のどちらの形でも大歓迎です！お待ちしております。</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/supporters" className="flex-1 px-6 py-3 bg-gradient-to-r from-[#369bff] to-[#0050a7] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
                      サポーターになる
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSejEijY3nx_A1iCfqOTUukN7OKxZvn_PTHFi-Q7e4QP8MLxxA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 border-2 border-[#369bff] text-[#369bff] font-semibold rounded-lg hover:bg-[#369bff] hover:text-white transition-all"
                    >
                      チームに加入する
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full h-full">
                <div className="relative w-full h-[320px] lg:h-full min-h-[360px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                  {slideshowImages.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt="SOARA activities"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm tracking-wide font-semibold uppercase">
                    SOARA Moments
                  </div>
                </div>
              </div>
            </section>

            {/* ミッションセクション */}
            <section id="mission" className="scroll-mt-20">
              <h2 className="text-3xl font-semibold mb-12 text-center">
                <span className="bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">SOARAのミッション</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {contentData.home.missions.map((mission, index) => (
                  <article key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#369bff]">
                    <div className="mb-4 text-center">
                      <img
                        src={mission.icon}
                        alt={mission.title}
                        className="w-24 h-24 mx-auto object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800">{mission.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                  </article>
                ))}
              </div>
              <div className="text-center mt-8">
                <a href="/about#mission-detail" className="inline-flex items-center text-[#369bff] hover:text-[#0050a7] font-medium transition-colors mb-8">
                  ミッションの詳細を見る
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

            </section>

            {/* 2026年度目標セクション */}
            <section className="bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/5 to-[#369bff]/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                <span className="bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">2026年度の目標</span>
              </h2>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="inline-block px-4 py-1 bg-[#369bff] text-white text-sm font-bold rounded-full mb-4">{contentData.home.goal2026.label}</p>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">{contentData.home.goal2026.headline}</h3>

                {/* 定常滑空軌道の図 */}
                <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
                  <img
                    src="/analysis/flight-path.png"
                    alt="定常滑空の軌道図 - 揚力の不足、安定性の不足、定常滑空の3つのパターン"
                    className="w-full h-auto"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{contentData.home.goal2026.description}</p>
              </div>

              <div className="text-center">
                <a
                  href="/about#goals"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#369bff] to-[#0050a7] hover:from-[#4aabff] hover:to-[#1060b7] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#369bff]/50 text-lg"
                >
                  なぜ200mなのか？ - 詳しくはこちら
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </section>

            {/* ページナビゲーションカード */}
            <section>
              <h2 className="text-3xl font-semibold mb-12 text-center">
                <span className="bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">もっと知る</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {contentData.home.pageNavigation.map((nav, index) => (
                  <a
                    key={index}
                    href={nav.href}
                    className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#369bff] block"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-3xl mb-3">{nav.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#369bff] transition-colors">{nav.title}</h3>
                        <p className="text-gray-600 text-sm">{nav.description}</p>
                      </div>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-[#369bff] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* お知らせ */}
            <section>
              <h2 className="text-3xl font-semibold mb-6 text-center">
                <span className="bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">お知らせ</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                {contentData.home.notifications.map((notification, index) => (
                  <div
                    key={index}
                    className={`bg-white p-4 flex ${
                      index === 0 ? 'border-t-2 border-[#369bff]' : 'border-t border-gray-300'
                    } ${index === contentData.home.notifications.length - 1 ? 'border-b-2 border-b-[#0050a7]' : ''}`}
                  >
                    <span className="text-black inline-block w-32 text-lg flex-shrink-0">{notification.date}</span>
                    <span className="text-black font-bold text-lg">{notification.title}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
}
