"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const PageFooter = () => {
  const { language } = useLanguage();
  const L = (jp, en) => (language === "en" ? en : jp);
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/90">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-6 py-12 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-8 text-white shadow-soara sm:px-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 80, 167, 0.55) 0%, rgba(0, 80, 167, 0.35) 45%, rgba(0, 61, 128, 0.6) 100%), url('/images/website-hero-mk3.png')",
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        >
          <div className="absolute inset-0 soara-grid opacity-15" aria-hidden />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                Join the Flight
              </p>
              <h2 className="text-2xl font-bold md:text-3xl">
                {L(
                  "高校生が空を切り拓く挑戦を、共に。",
                  "Join high school innovators carving a path through the skies."
                )}
              </h2>
              <p className="mt-2 text-white/80">
                {L(
                  "スポンサー・メディア・コラボのご相談をお待ちしております。",
                  "We welcome sponsorships, media inquiries, and collaboration proposals."
                )}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/supporters"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] shadow-lg shadow-black/5 transition hover:translate-y-[-1px] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {L("ご支援の詳細はこちらから", "See support options")}
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {L("連絡する", "Contact us")}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl shadow-soara ring-1 ring-gray-200">
                <Image
                  src="/logos/soaralogo_sky_square.jpg"
                  alt="SOARA ロゴ"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  TEAM SOARA
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {L(
                    "高校生有志鳥人間チーム　SOARA",
                    "SOARA — High School Human-Powered Aircraft Team"
                  )}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              {L(
                "学校も国境も越えて集まった高校生チームが、鳥人間コンテストで200mの滑空に挑みます。",
                "A cross-school, cross-border high school team aiming for a 200m glide at the Birdman Contest."
              )}
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/soara_hpa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:-translate-y-0.5 hover:border-[#369bff] hover:text-[#0050a7]"
              >
                <Image
                  src="/images/x_logo_w.png"
                  alt="X (Twitter)"
                  width={18}
                  height={18}
                  className="invert"
                />
              </a>
              <a
                href="https://instagram.com/soara.hpa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:-translate-y-0.5 hover:border-[#369bff] hover:text-[#0050a7]"
              >
                <Image
                  src="/images/instagram_logo.png"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              {L("サイト内リンク", "Navigate")}
            </p>
            <div className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
              <Link className="hover:text-[#0050a7]" href="/">
                {L("ホーム", "Home")}
              </Link>
              <Link className="hover:text-[#0050a7]" href="/about">
                {L("私たちについて", "About")}
              </Link>
              <Link className="hover:text-[#0050a7]" href="/members">
                {L("メンバー", "Members")}
              </Link>
              <Link className="hover:text-[#0050a7]" href="/aircraft">
                {L("機体", "Aircraft")}
              </Link>
              <Link className="hover:text-[#0050a7]" href="/supporters">
                {L("サポーター", "Supporters")}
              </Link>
              <Link className="hover:text-[#0050a7]" href="/blog">
                {L("活動報告", "Blog")}
              </Link>
              <Link className="hover:text-[#0050a7]" href="/birdman">
                {L("鳥人間コンテストとは", "Birdman Contest")}
              </Link>
              <Link className="hover:text-[#0050a7]" href="/contacts">
                {L("お問い合わせ", "Contacts")}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Mail: soara.hpa@gmail.com</p>
              <p>Base: Tokyo, Japan</p>
              <p>
                {L(
                  "活動時間: 平日 17:00-21:00 / 週末 10:00-18:00",
                  "Hours: Weekdays 17:00-21:00 / Weekends 10:00-18:00"
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© Soara 2025. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about#mission-detail" className="hover:text-[#0050a7]">
              {L("ミッション", "Mission")}
            </Link>
            <Link href="/supporters" className="hover:text-[#0050a7]">
              {L("サポートについて", "About support")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
