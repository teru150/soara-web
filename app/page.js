"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import contentData from "../data/content.json";
import { useLanguage } from "../contexts/LanguageContext";

const heroImages = [
  {
    src: "/images/pics/soarafront.jpg",
    caption: { jp: "1月の桁試験にて", en: "Spar test in January" },
  },
   {
    src: "/images/pics/mainwing_clean.png",
    caption: { jp: "きれいに作れた主翼模型", en: "Cleanly made main wing model" },
  },
  {
    src: "/images/pics/partial_blur.png",
    caption: {
      jp: "昨年8月に行われた東京大学F-Tecさんとの交流会",
      en: "August meetup with the University of Tokyo F-Tec team",
    },
  },
  {
    src: "/images/pics/IMG_4156.png",
    caption: { jp: "TiBでの作業", en: "Work at TiB" },
  },  
  {
    src: "/images/pics/IMG_3584.jpg",
    caption: { jp: "桁を積み込み中", en: "Loading aircraft main spars" },
  },
  {
    src: "/images/pics/IMG_3593.jpg",
    caption: { jp: "会議室でアイデア出し", en: "Brainstorming in the meeting room" },
  },
  {
    src: "/images/pics/IMG_6802.jpg",
    caption: { jp: "チーム結成初期の一枚", en: "Early days of the team" },
  },
  {
    src: "/images/pics/IMG_0352.png",
    caption: { jp: "リブ切り台試運転中", en: "Testing the rib-cutting jig" },
  },
  {
    src: "/images/pics/IMG_0547.png",
    caption: { jp: "かんざし製作中", en: "Building spars" },
  },
  {
    src: "/images/pics/kareoke.jpg",
    caption: {
      jp: "肩の力を抜いて親睦を深める時間",
      en: "Relaxing and bonding time",
    },
  },
];

const stats = (meta, language) => [
  {
    label: "Mission",
    value: "2",
    detail:
      language === "en" ? (
        <>
          Challenge the impossible ×
          <br />
          Grow peers across generations
        </>
      ) : (
        <>
          困難への挑戦 ×
          <br />
          同世代の仲間を増やす
        </>
      ),
  },
  {
    label: "Members",
    value: String(meta?.members ?? 21),
    detail:
      language === "en"
        ? "13 schools + overseas"
        : meta?.schoolsNote ?? "全国13校・アメリカ含む",
  },
  {
    label: "Target",
    value: "200m",
    detail: language === "en" ? "Aim for a first high school record" : "高校生初の記録へ挑戦",
  },
];

const faceGallery = [
  "/images/people/iriyama_new.png",
  "/images/people/Takahashi.JPG",
  "/images/people/nakajima.jpg",
  "/images/people/Kikuchi.jpg",
  "/images/people/wada-new.JPG",
  "/images/people/Shawn.png",
  "/images/people/ochi-aura.jpg",
  "/images/people/Nomura.jpg",
  "/images/people/danny.jpg",
  "/images/people/suzuki-new.png",
  "/images/people/hattori.jpg",
  "/images/people/Asaoka.png",
  "/images/people/Yano.png",
  "/images/people/YHattori.png"
];

const heroOverlayOpacity = 0.75;
const heroOverlay = `linear-gradient(180deg, rgba(255,255,255,${heroOverlayOpacity}) 0%, rgba(255,255,255,${
  heroOverlayOpacity * 0.95
}) 50%, rgba(255,255,255,${Math.min(heroOverlayOpacity + 0.05, 1)}) 100%)`;

function MissionCard({ mission }) {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // 単一動画か複数動画かを判定
  const videos = mission.videos || (mission.video ? [mission.video] : []);
  const hasMultipleVideos = videos.length > 1;
  const currentVideo = videos[currentVideoIndex];

  // 動画インデックスが変わったら新しい動画を再生
  useEffect(() => {
    if (isHovering && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video play failed:", err));
    }
  }, [currentVideoIndex, isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video play failed:", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // マウスを離したら最初の動画にリセット
    setCurrentVideoIndex(0);
  };

  const handleVideoEnded = () => {
    if (hasMultipleVideos) {
      // 複数動画の場合、次の動画に進む（最後の動画なら最初に戻る）
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }
  };

  return (
    <article
      className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      style={{ minHeight: "350px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 背景動画 */}
      {currentVideo && (
        <video
          key={currentVideo}
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          muted
          loop={!hasMultipleVideos}
          playsInline
          onEnded={handleVideoEnded}
        >
          <source src={currentVideo} type="video/mp4" />
        </video>
      )}

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/65 to-gray-50/70 transition group-hover:from-[#e6f4ff]/70 group-hover:via-white/65 group-hover:to-white/60" />

      {/* コンテンツ */}
      <div className="relative z-10 w-full space-y-6 p-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 whitespace-pre-line leading-tight">
            {mission.title}
          </h3>
          <p className="text-base text-gray-700 leading-relaxed">
            {mission.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const L = (jp, en) => (language === "en" ? en : jp);
  const pick = (entry) => (language === "en" ? entry.en : entry.jp);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const intervalRef = useRef(null);
  const [faceIndex, setFaceIndex] = useState(0);
  const meta = contentData.meta || { members: 21, schools: 13, schoolsNote: "全国13校・アメリカ含む" };
  const homeMissions =
    language === "en"
      ? [
          {
            icon: "/images/icons/matsubara.jpg",
            title: "Make the dream of flying our own aircraft real",
            description:
              "By challenging together, we want to prove we can break through tough barriers.",
            video: "/videos/mission1.mp4",
            credit: "Source: YTV official Birdman Contest YouTube channel",
          },
          {
            icon: "/images/icons/partial_blur.png",
            title:
              "Share the joy of making with our and the next generation",
            description:
              "We want to inspire more peers to choose STEM and making through SOARA.",
            videos: [
              "/videos/mission2-1.mp4",
              "/videos/mission2-2.mp4",
              "/videos/mission2-3.mp4",
              "/videos/mission2-4.mp4",
            ],
            credit: "Source: SOARA member footage",
          },
        ]
      : contentData.home.missions;
  const goal2026 =
    language === "en"
      ? {
          label: "Goal 2026",
          headline: "Achieve a 200m glide at Lake Biwa",
          description:
            "We analyze past records, design for stability, and prepare the team to break the next barrier in the glider division.",
        }
      : contentData.home.goal2026;
  const pageNavigation =
    language === "en"
      ? [
          {
            href: "/about",
            icon: "📖",
            title: "About SOARA",
            description: "Mission details and team history",
          },
          {
            href: "/aircraft",
            icon: "✈️",
            title: "Aircraft",
            description: "The aircraft we designed and built",
          },
          {
            href: "/members",
            icon: "👥",
            title: "Members",
            description: "Meet the people building SOARA",
          },
          {
            href: "/supporters",
            icon: "🤝",
            title: "For supporters",
            description: "Partners and support opportunities",
          },
          {
            href: "/birdman",
            icon: "🌊",
            title: "What is Birdman?",
            description: "Contest history and why we challenge it",
          },
          {
            href: "/blog",
            icon: "📝",
            title: "Blog",
            description: "Latest updates on design, build, and events",
          },
        ]
      : contentData.home.pageNavigation;
  const notifications =
    language === "en"
      ? [
          { date: "2026/1/06", title: "Completed spar testing" },
          { date: "2025/11/14", title: "Website redesign launched" },
          { date: "2025/10/27", title: "Started work at our temporary workshop" },
          {
            date: "2025/10/06",
            title: "Partnered with TUS Birdman Team Torica",
          },
          {
            date: "2025/9/17",
            title: "Temporary workshop location confirmed with support",
          },
          {
            date: "2025/9/13",
            title: "Joined HoPE-hosted fall exchange event",
          },
          {
            date: "2025/7/30",
            title: "Preparing aircraft design explanations on the aircraft page",
          },
          { date: "2025/7/28", title: "Official website launched" },
        ]
      : contentData.home.notifications;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
    const handler = (event) => setReduceMotion(event.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(intervalRef.current);
  }, [reduceMotion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFaceIndex((prev) => (prev + 2) % faceGallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const goToSlide = (nextIndex) => {
    const safeIndex =
      ((nextIndex % heroImages.length) + heroImages.length) % heroImages.length;
    setCurrentSlide(safeIndex);
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 soara-grid" aria-hidden />
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-12">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/website-hero-mk3.png')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: heroOverlay }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-5 soara-grid opacity-100 mix-blend-multiply"
          aria-hidden
        />
        <div className="mx-auto grid max-w-screen-xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <br />
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("soara:show-loading", {
                      detail: { durationMs: 1500 },
                    }),
                  );
                }}
                className="text-sm uppercase tracking-[0.2em] text-gray-500 transition hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#369bff]"
              >
                2026 Birdman Contest Glider Project
              </button>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-[52px]">
                {L("常識の向こうへ、", "Beyond the limits,")}
                <br />
                {L("碧空の彼方へ。", "beyond the blue sky.")}
              </h1>
              <p className="mt-3 text-base font-semibold tracking-tight text-gray-800 sm:text-lg lg:text-xl">
                {L(
                  "Beyond the limits, beyond the blue sky.",
                  "A high school team aiming to soar at Birdman 2026."
                )}
              </p>
            <div className="max-w-2xl space-y-8 text-lg leading-relaxed text-gray-600">
              <p>
                {L(
                  `全国と海外から集まった${meta.members}人の高校生が、2026年鳥人間コンテスト滑空機部門で200mの滑空を目指す史上初のチームが「SOARA」です。`,
                  `SOARA is the first-ever team of ${meta.members} high school students from across Japan and overseas aiming for a 200m glide in the 2026 Birdman Contest glider division.`
                )}
              </p>
              <p>
                {L(
                  "自分たちで飛行機を作り上げる夢を叶えつつ、ともにものづくりを楽しむ仲間を増やしながら琵琶湖を目指します。",
                  "We pursue the dream of building our own aircraft while growing a community that enjoys making together—on the way to Lake Biwa."
                )}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/supporters"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-6 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
              >
                {L("サポーターになる", "Become a supporter")}
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://forms.gle/2vZGsXn6kLM6GRZv8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#369bff] bg-white px-6 py-3 text-base font-semibold text-[#0050a7] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
              >
                {L("メンバーになる", "Join the team")}
                <span aria-hidden>↗</span>
              </a>
              <a
                href="/about#mission-detail"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0050a7] shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                {L("ミッションを見る", "See our mission")}
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-200 sm:grid-cols-3">
              {stats(meta, language).map((stat) => (
                <div key={stat.label} className="rounded-xl bg-gray-50 px-4 py-3">
                  <p className="text-sm font-semibold text-gray-500">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-full flex-col">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-3xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/0" />
              <div className="relative h-[360px] w-full overflow-hidden sm:h-[420px]">
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={pick(image.caption)}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl bg-black/40 px-4 py-3 text-white backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                    SOARA Photo Gallery
                  </p>
                  <p className="text-sm font-semibold">
                    {pick(heroImages[currentSlide].caption)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToSlide(currentSlide - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label={L("前の写真", "Previous photo")}
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(currentSlide + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label={L("次の写真", "Next photo")}
                  >
                    →
                  </button>
                </div>
              </div>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentSlide === index
                        ? "w-6 bg-white"
                        : "w-2.5 bg-white/60"
                    }`}
                    aria-label={L(
                      `写真 ${index + 1} に切り替え`,
                      `Switch to photo ${index + 1}`
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm lg:mt-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Meet the Faces
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[0, 1].map((offset) => {
                  const src = faceGallery[(faceIndex + offset) % faceGallery.length];
                  return (
                    <Link
                      key={src}
                      href="/members"
                      className="group relative block h-36 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200"
                    >
                      <img
                        src={src}
                        alt={L("SOARAメンバー", "SOARA member")}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-3 py-2 text-xs font-semibold text-white">
                        {L("メンバー紹介へ →", "Meet the members →")}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-screen-xl space-y-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Mission
            </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                {L("SOARAのミッション", "SOARA’s Mission")}
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                {L(
                  "飛ばす夢とものづくりの楽しさ、両方を次世代に届けるための2本柱です。",
                  "Two pillars to deliver both the dream of flight and the joy of making to the next generation."
                )}
              </p>
            </div>
          <div className="grid gap-6 md:grid-cols-2">
            {homeMissions.map((mission) => (
              <div key={mission.title} className="space-y-2">
                <MissionCard mission={mission} />
                {mission.credit && (
                  <p className="text-right text-xs text-gray-500">
                    {mission.credit}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-screen-xl overflow-hidden rounded-3xl border border-[#369bff]/20 bg-gradient-to-br from-[#e6f4ff]/80 via-white to-[#f5f7fa] shadow-soara">
          <div className="grid gap-10 p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                {goal2026.label}
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {goal2026.headline}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {goal2026.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/about#goals"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
                >
                  {L("なぜ200mなのか詳しく見る", "Why 200m?")}
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/aircraft"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-[#369bff]/30 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
                >
                  {L("機体を見る", "See aircraft")}
                </a>
              </div>
            </div>
            <div className="relative lg:-mt-6">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-br from-[#369bff]/25 via-white to-transparent blur-2xl" />
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                    <img
                      src="/analysis/flight-path.png"
                      alt={L("定常滑空の軌道図", "Glide flight path")}
                      className="h-full w-full object-cover"
                    />
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                    <img
                      src="/analysis/torica-25.png"
                      alt={L("鳥人間コンテストの記録推移", "Birdman contest record trends")}
                      className="h-56 w-full object-cover sm:h-64"
                    />
                    <p className="border-t border-gray-100 px-4 py-2 text-xs text-gray-500">
                      {L(
                        "433mを記録した理想的な滑空 | 出典：ytv公式鳥人間コンテストYoutubeチャンネル",
                        "Ideal 433m glide | Source: YTV official Birdman Contest YouTube"
                      )}
                    </p>
                  </div>
                </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Explore
            </p>
            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              {L("もっと知る", "Explore more")}
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pageNavigation.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#369bff]/8 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f4ff] text-2xl">
                    {nav.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {nav.title}
                    </h4>
                    <p className="text-sm text-gray-600">{nav.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0050a7]">
                      {L("詳しく見る →", "Learn more →")}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-screen-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                News
              </p>
              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                {L("お知らせ", "News")}
              </h3>
            </div>
            <a
              href="/supporters"
              className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7] sm:inline-flex"
            >
              {L("サポートのご相談はこちら", "Support inquiries")}
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {notifications.map((notification, index) => (
              <div
                key={`${notification.date}-${notification.title}`}
                className={`flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                  index !== notifications.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <span className="w-32 shrink-0 text-sm font-semibold text-gray-500">
                  {notification.date}
                </span>
                <p className="text-base font-medium text-gray-900">
                  {notification.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
