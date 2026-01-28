"use client";

import { useLanguage } from "../../contexts/LanguageContext";

export default function SupportersPage() {
  const { language } = useLanguage();
  const L = (jp, en) => (language === "en" ? en : jp);
  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-14">
        <header className="rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Supporters
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                {L("ご支援者様のご紹介", "Supporters")}
              </h1>
              <br/>
              <p className="text-lg text-gray-600">
                {L(
                  "チームをご支援いただいている企業・団体様をご紹介いたします。資金面のご支援だけでなく、メンタリング・物品提供・PR連携など様々な形でのご協力を歓迎しております。",
                  "We introduce the companies and organizations supporting our team. We welcome not only funding, but also mentoring, equipment support, and PR collaboration."
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
              >
                {L("お問い合わせ", "Contact us")}
                <span aria-hidden>→</span>
              </a>
              <a
                href="/about#goals"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                {L("目標を見る", "See our goals")}
              </a>
            </div>
          </div>
        </header>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Special Partner
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                {L(
                  "東京理科大学鳥人間サークル鳥科 様",
                  "TUS Birdman Team “Torica”"
                )}
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                {L(
                  "東京理科大学鳥人間サークル鳥科は、鳥人間チーム最大規模の160名の部員を擁し、コンテスト出場常連の学生チームです。2025年の第47回大会では準優勝を果たしました。設計・製作のノウハウのご提供、メンタリング、さらにはCFRP桁のご提供に至るまで、全面的にご支援いただいています。",
                  "Torica is one of the largest Birdman teams with about 160 members and is a regular contest participant. They placed second in the 47th contest in 2025. We receive full support including design/build know-how, mentoring, and CFRP spar materials."
                )}
              </p>
              <a
                href="https://x.com/torica_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7]"
              >
                {L("X（旧Twitter）を見る →", "View on X →")}
              </a>
            </div>
            <div className="flex w-full max-w-md justify-center rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <img
                src="/images/torica_logo.png"
                alt="東京理科大学鳥人間サークル鳥科ロゴ"
                className="h-40 w-40 object-contain"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {L("ご支援いただきたい内容", "How you can support")}
          </p>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: L("技術連携", "Technical collaboration"),
                detail: L(
                  "設計・製作レビュー、材料/設備の提供、メンタリング",
                  "Design/build reviews, materials/equipment, mentoring"
                ),
              },
              {
                title: L("資金・物品サポート", "Funding & equipment"),
                detail: L(
                  "製作費・渡航費のご支援、工具や機材のご提供",
                  "Support for build and travel costs, tools and equipment"
                ),
              },
              {
                title: L("広報・コラボ", "PR & collaboration"),
                detail: L(
                  "共同イベント、講演、メディア露出、採用ブランディング",
                  "Joint events, talks, media exposure, recruiting branding"
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-700">
            {L(
              "SOARAは、前例のない有志高校生チームとして鳥人間コンテストに挑み、またその過程でものづくりの面白さを同・次世代に広めることを目指して活動しています。しかしこれらの実現には、高額な開発・製作資金、設計・試作における技術的なサポートなど、高校生だけでは困難なことが多数存在しており、多くの方々のご支援が必要となります。",
              "SOARA challenges the Birdman Contest as a first-of-its-kind volunteer high school team and aims to spread the joy of making to our and the next generation. Achieving this requires significant funding and technical support for design and prototyping—help that is difficult for high school students alone."
            )}
          </p>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-8 shadow-soara ring-1 ring-[#369bff]/25">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Contact
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                {L("ご相談はこちらから", "Let's talk")}
              </h2>
              <p className="text-base text-gray-700">
                {L(
                  "高校生チームだからこそ学びに真摯で、動きが速いのが強みです。貴社・貴団体の強みと結びつく形での連携をご提案します。",
                  "As a high school team, we learn fast and move quickly. We propose collaborations that connect with your organization’s strengths."
                )}
              </p>            
              <p className="text-base text-gray-700">
                {L(
                  "私たちの目指す夢と目標にご共感いただいた皆さまからのご支援を、心よりお待ちしております。何卒よろしくお願い申し上げます。",
                  "We sincerely welcome support from those who share our dream and goals."
                )}
              </p>
              <br/>
              
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-600">SNS</p>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/soara.hpa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-[#369bff] hover:text-[#0050a7]"
                >
                  <img
                    src="/images/instagram_logo.png"
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                  @soara.hpa
                </a>
                <a
                  href="https://x.com/soara_hpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-[#369bff] hover:text-[#0050a7]"
                >
                  <img src="/images/x_logo_w.png" alt="X" className="h-4 w-4 invert" />
                  @soara_hpa
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                {L(
                  "活動の様子や技術解説を週次で発信予定です。是非フォローをお願いします。",
                  "We post weekly updates and technical explanations. Please follow us."
                )}
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-gray-200 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-700">
              {L(
                "ご相談はこちらから。フォームまたはEメールでご連絡ください。",
                "Get in touch via the form or email."
              )}
            </p>
            <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
              <a
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0050a7] px-4 py-2.5 text-sm font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                {L("お問い合わせフォームへ", "Contact form")}
              </a>
              <a
                href="mailto:soara.hpa@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                soara.hpa@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
