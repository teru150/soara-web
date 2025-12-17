"use client";

import { useEffect, useRef, useState } from "react";
import contentData from "../data/content.json";

const heroImages = [
  { src: "/images/pics/IMG_2485.jpg", caption: "夜間の作業場で翼を確認するメンバー" },
  { src: "/images/pics/IMG_3019.jpg", caption: "図面を囲みながらの設計ディスカッション" },
  { src: "/images/pics/IMG_3584.jpg", caption: "フライト前チェックに向けた準備" },
  { src: "/images/pics/IMG_3593.jpg", caption: "太陽光の下での翼組み立て" },
  { src: "/images/pics/IMG_3745.JPG", caption: "試作部品の品質を共有" },
  { src: "/images/pics/IMG_6802.jpg", caption: "チーム結成初期の一枚" },
  { src: "/images/pics/IMG_7502.jpg", caption: "フィールドでの風の確認" },
  { src: "/images/pics/kareoke.jpg", caption: "肩の力を抜いて親睦を深める時間" },
];

const stats = (meta) => [
  { label: "Mission", value: "2", detail: <>困難への挑戦 ×<br />同世代の仲間を増やす</> },
  {
    label: "Members",
    value: String(meta?.members ?? 21),
    detail: meta?.schoolsNote ?? "全国13校・アメリカ含む",
  },
  { label: "Target", value: "200m", detail: "高校生初の記録へ挑戦" },
];

const heroOverlayOpacity = 0.75;
const heroOverlay = `linear-gradient(180deg, rgba(255,255,255,${heroOverlayOpacity}) 0%, rgba(255,255,255,${
  heroOverlayOpacity * 0.95
}) 50%, rgba(255,255,255,${Math.min(heroOverlayOpacity + 0.05, 1)}) 100%)`;

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const intervalRef = useRef(null);
  const meta = contentData.meta || { members: 21, schools: 13, schoolsNote: "全国13校・アメリカ含む" };

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
        <div className="mx-auto grid max-w-screen-xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <br />
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                2026 Birdman Contest Glider Project
              </p>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-[52px]">
                常識の向こうへ、<br />
                碧空の彼方へ。
              </h1>
              <p className="mt-3 text-base font-semibold tracking-tight text-gray-800 sm:text-lg lg:text-xl">
                Beyond the limits, beyond the blue sky.
              </p>
            <div className="max-w-2xl space-y-8 text-lg leading-relaxed text-gray-600">
              <p>
                  全国と海外から集まった{meta.members}人の高校生が、2026年鳥人間コンテスト滑空機部門で
                <span className="font-semibold text-[#0050a7]">200mの滑空</span>
                を目指す史上初のチームが「SOARA」です。
              </p>
              <p>
              自分たちで飛行機を作り上げる夢を叶えつつ、ともにものづくりを楽しむ仲間を増やしながら琵琶湖を目指します。
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/supporters"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-6 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
              >
                サポーターになる
                <span aria-hidden>→</span>
              </a>
              <a
                href="/about#mission-detail"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0050a7] shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                ミッションを見る
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-200 sm:grid-cols-3">
              {stats(meta).map((stat) => (
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

          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-3xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/0" />
              <div className="relative h-[360px] w-full overflow-hidden sm:h-[420px]">
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.caption}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl bg-black/40 px-4 py-3 text-white backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                    Life at SOARA
                  </p>
                  <p className="text-sm font-semibold">
                    {heroImages[currentSlide].caption}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToSlide(currentSlide - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="前の写真"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(currentSlide + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="次の写真"
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
                    aria-label={`写真 ${index + 1} に切り替え`}
                  />
                ))}
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
              SOARAのミッション
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              飛ばす夢とものづくりの楽しさ、両方を次世代に届けるための2本柱。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contentData.home.missions.map((mission) => (
              <article
                key={mission.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#e6f4ff] to-transparent opacity-0 transition group-hover:opacity-70" />
                <div className="relative z-10 space-y-3">
                  <img
                    src={mission.icon}
                    alt={mission.title}
                    className="h-16 w-16 rounded-xl object-cover shadow-md ring-1 ring-gray-200"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600">{mission.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-screen-xl overflow-hidden rounded-3xl border border-[#369bff]/20 bg-gradient-to-br from-[#e6f4ff]/80 via-white to-[#f5f7fa] shadow-soara">
          <div className="grid gap-10 p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0050a7] shadow-sm ring-1 ring-[#369bff]/30">
                {contentData.home.goal2026.label}
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {contentData.home.goal2026.headline}
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {contentData.home.goal2026.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/about#goals"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
                >
                  なぜ200mなのか詳しく見る
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/aircraft"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-[#369bff]/30 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
                >
                  機体を見る
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl bg-gradient-to-br from-[#369bff]/25 via-white to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <img
                  src="/analysis/flight-path.png"
                  alt="定常滑空の軌道図"
                  className="h-full w-full object-cover"
                />
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
              もっと知る
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contentData.home.pageNavigation.map((nav) => (
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
                      詳しく見る →
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
              <h3 className="mt-2 text-3xl font-bold text-gray-900">お知らせ</h3>
            </div>
            <a
              href="/supporters"
              className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7] sm:inline-flex"
            >
              サポートのご相談はこちら
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {contentData.home.notifications.map((notification, index) => (
              <div
                key={`${notification.date}-${notification.title}`}
                className={`flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:gap-6 ${
                  index !== contentData.home.notifications.length - 1
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
