"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import contentData from "../../data/content.json";

const missionStories = [
  {
    id: "mission-01",
    title: {
      jp: "自分たちで作った飛行機を飛ばす夢を叶える",
      en: "Make the dream of flying our own aircraft real",
    },
    summary: {
      jp: "仲間たちと鳥人間コンテストという同じ夢に向かい挑戦することで、資金や環境等といった困難を打ち破り、自分たちの手で設計・製作した飛行機を実際に飛ばせることを証明したいため。",
      en: "By challenging the Birdman Contest together, we aim to overcome funding and environmental hurdles and prove we can design, build, and fly our own aircraft.",
    },
    paragraphs: {
      jp: [
        "「高校生には早すぎる」「前例がないから無理」。こうした\"常識\"に直面したとき、諦めるという選択肢もありました。しかし私たちは、学校の枠を超え、仲間を集め、この挑戦を続けています。",
        "独学した専門書の理論を実機で応用する経験。チーム全員で人の命を預かる責任を分かち合う体験。そして何より、「できない」と言われたことを「やってみせる」という証明。どれも、私たち自身を大きく成長させる要素です。",
        "私たちSOARAが、仲間と同じ夢に向かい挑戦することで、困難を打ち破れることを示します。",
      ],
      en: [
        "“It’s too early for high school students,” “There’s no precedent.” We’ve heard these doubts. Still, we gathered teammates across schools and kept moving forward.",
        "Applying self-studied theory to a real aircraft, sharing responsibility for a pilot’s life, and proving we can do what we were told we couldn’t—each experience helps us grow.",
        "SOARA shows that by challenging together, we can break through what seems impossible.",
      ],
    },
    badge: "Mission 01",
  },
  {
    id: "mission-02",
    title: {
      jp: "ものづくりの面白さを同世代・次世代に伝える",
      en: "Share the joy of making with our and the next generation",
    },
    summary: {
      jp: "高校は人生の選択を左右する重要な期間なので、SOARAでの活動を通じて、年々減っている理系・ものづくり系を選ぶ仲間を増やしたいと考えているため。",
      en: "High school shapes life choices. Through SOARA, we want more peers to choose STEM and hands-on making.",
    },
    paragraphs: {
      jp: [
        "日本において、理系・ものづくりを志す若者は年々減少しています。理系選択者は約32%であり、平均約50%であるOECD加盟国中では低い水準にあります。",
        "その中でも、ソフトウェアやIT分野への関心が高まる一方で、航空・機械・電気などのハードウェア分野への関心は相対的に低下しています。実際、SOARAメンバーの多くも、学校で周囲にものづくりに興味を持つ仲間が少ないことに悩んでいました。",
        "大学に入ると学部・専攻が決まります。高校は、将来の人生選択における重要な時期です。SOARAは、その重要な時期に、航空・ものづくりの面白さを実際に体験できる場を提供します。",
        "・YouTubeでは、週1本の技術解説・製作ドキュメンタリーを配信\n・SNSでは、週3回の進捗報告・技術紹介を発信\n・イベントへの積極的な出展と交流を実施",
        "これらの活動を通じて、同世代・次世代に「自分たちもやってみたい」と感じてもらい、年々減少している理系・ものづくり系を選ぶ仲間を増やしたい。それが、日本の空の未来を支えることにつながると、私たちは信じています。",
      ],
      en: [
        "In Japan, fewer young people choose STEM and making. About 32% select STEM, lower than the ~50% OECD average.",
        "Interest in software and IT is rising, while hardware fields like aerospace, mechanical, and electrical engineering are declining. Many SOARA members also felt few peers shared their interest in making.",
        "High school is a crucial time before university majors are set. SOARA provides hands-on opportunities to experience aviation and making.",
        "• Weekly technical explanations and build documentaries on YouTube\n• Progress updates and tech highlights three times a week on social media\n• Active participation in events and exchanges",
        "Through these activities, we want peers and the next generation to think, “I want to try this too,” helping grow the STEM and making community that supports the future of Japan’s skies.",
      ],
    },
    badge: "Mission 02",
  },
];

const introImage = "/images/pics/IMG_5610.jpg";
const introTitle = {
  jp: "SOARAとは",
  en: "What is SOARA?",
};
const introParagraphs = {
  jp: [
    "SOARAは、2025年6月に結成された日本初の高校生有志鳥人間チームです。学校の枠を越え「自分たちで飛行機を作りたい」という情熱だけで集まった仲間がスタート地点です。",
    `現在は東京を中心に、全国${contentData.meta?.schools ?? 20}校から${contentData.meta?.members ?? 29}名が参加し、海外からのメンバーも加わっています。多様なバックグラウンドを持つ高校生が、専門や得意分野を掛け合わせて挑戦しています。`,
    "私たちは、この挑戦を通じて2つのことを実現します。高校生でも本格的な航空機を作り、安全に飛ばせることの証明。そして、同世代・次世代がものづくりに触れるきっかけを作ること。",
    "SOARAは、単なる機体製作チームではありません。困難でありながら最高に楽しい課題に、仲間とともに挑む若き挑戦者たちの集まりです。",
  ],
  en: [
    "SOARA is Japan's first volunteer high school Birdman Contest team, formed in June 2025. We came together with a shared passion to build our own aircraft beyond school boundaries.",
    `Based in Tokyo, we now have ${contentData.meta?.members ?? 29} members from ${contentData.meta?.schools ?? 20} schools plus overseas participants. Students from diverse backgrounds combine their skills to take on this challenge.`,
    "Through this challenge, we aim to prove that high school students can build and safely fly a real aircraft, and to create opportunities for peers and future generations to experience making.",
    "SOARA is not just an aircraft build team. We are young challengers tackling a demanding, rewarding mission together.",
  ],
};

export default function AboutPage() {
  const { language } = useLanguage();
  const L = (jp, en) => (language === "en" ? en : jp);
  const [openMission, setOpenMission] = useState({});
  const [openWallAnalysis, setOpenWallAnalysis] = useState(false);
  const [introReveal, setIntroReveal] = useState(0);
  const introSectionRef = useRef(null);
  const pick = (entry) => (language === "en" ? entry.en : entry.jp);
  const introList = language === "en" ? introParagraphs.en : introParagraphs.jp;
  const history =
    language === "en"
      ? [
          {
            year: "2025",
            month: "04",
            title: "Decision to form a volunteer team",
            description:
              "We considered participating through school, but circumstances prevented it. We couldn’t give up the dream of building our own aircraft, so we decided to challenge as a cross-school volunteer team.",
            image: "/images/history/IMG_8109.jpg",
          },
          {
            year: "2025",
            month: "06",
            title: "SOARA team formed",
            description:
              "Met Nomura (branding) and Nakajima (chief design), and formally launched SOARA as a three-person team. We chose to secure funding, space, and people ourselves across schools.",
            image: "/images/history/IMG_6802.jpg",
          },
          {
            year: "2025",
            month: "07",
            title: "Connection to the world",
            description:
              "Our representative joined a summer program in the US and introduced the Birdman Contest, leading to overseas members joining the team.",
            image: "/images/history/IMG_6575.jpg",
          },
          {
            year: "2025",
            month: "09",
            title: "Secured a workshop base",
            description:
              "With support from TiB FAB, we secured a workspace for prototyping and part fabrication—our first step toward Lake Biwa.",
            image: null,
          },
          {
            year: "2025",
            month: "10",
            title: "Production aircraft design begins",
            description:
              "Detailed design of the production aircraft started, along with manufacturing planning and fundraising efforts.",
            image: "/images/history/faring.png",
          },
          {
            year: "2025",
            month: "11",
            title: "Sponsorship outreach starts",
            description:
              "We began full-scale sponsorship outreach and formed a partnership with TUS Birdman Team Torica.",
            image: null,
          },
        ]
      : contentData.about.history;

  const toggleMission = (title) => {
    setOpenMission((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = introSectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const total = Math.max(section.offsetHeight - viewportHeight, 1);
      const travelled = Math.min(Math.max(-rect.top, 0), total);
      setIntroReveal(travelled / total);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const introPanelTranslate = 68 - introReveal * 68;

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-14">
        <section
          ref={introSectionRef}
          className="relative left-1/2 right-1/2 -mt-6 min-h-[185vh] w-screen -translate-x-1/2"
        >
          <div className="sticky top-0 overflow-hidden bg-[#0f1f38] shadow-xl">
            <div className="relative h-screen min-h-[720px]">
              <img
                src={introImage}
                alt={contentData.about.intro.imageAlt || "SOARAチーム集合写真"}
                className="h-full w-full object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,34,0.2)_0%,rgba(10,18,34,0.42)_48%,rgba(10,18,34,0.92)_100%)]"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(54,155,255,0.28),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(0,212,255,0.14),transparent_22%)]"
                aria-hidden
              />
              <div className="absolute inset-0 soara-grid opacity-15" aria-hidden />

              <div
                className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8"
                style={{
                  transform: `translateY(${introPanelTranslate}%)`,
                }}
              >
                <div className="mx-auto max-w-5xl rounded-[32px] border border-white/15 bg-[#0b172b]/78 p-6 text-white shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#00d4ff]" />
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/68">
                          Team Story
                        </p>
                      </div>
                      <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        {pick(introTitle)}
                      </h1>
                      <p className="mt-4 max-w-2xl text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
                        {L(
                          "史上初の難題に挑むため集った若き挑戦者たち",
                          "Young challengers united to take on an unprecedented challenge"
                        )}
                      </p>
                      <div className="mt-6 space-y-4 text-base leading-8 text-white/84 sm:text-lg">
                      {introList.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a
                        href="#mission-detail"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {L("もっと詳しく", "Learn more")}
                        <span aria-hidden>→</span>
                      </a>
                      <a
                        href="/members"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {L("メンバーを見る", "Meet the members")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
            <div className="rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                {L("About Our Name", "About Our Name")}
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                {L("SOARAという名前", contentData.home.aboutName.title)}
              </h3>
              <p className="mt-4 whitespace-pre-line text-base leading-8 text-gray-700 sm:text-lg">
                {L(
                  contentData.home.aboutName.text,
                  "“SOARA” is a coined word combining “soar” with “A,” the first letter of the alphabet, to express a first takeoff toward the future."
                )}
              </p>
            </div>

            <div className="flex h-full flex-col rounded-[32px] border border-[#369bff]/20 bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                {L("Our Logo", "Our Logo")}
              </p>
              <div className="mt-5 flex flex-1 flex-col gap-4">
                <article className="flex min-h-[148px] flex-1 items-center gap-4 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur sm:gap-5 sm:p-5">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(0,212,255,0.18),transparent_52%),linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)] p-3 sm:h-28 sm:w-28">
                    <img
                      src="/logos/soaralogo_sky_square.jpg"
                      alt="SOARA team logo"
                      className="max-h-full w-auto max-w-full rounded-[16px] object-contain"
                    />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {L("Team Logo", "Team Logo")}
                    </h3>
                    <p className="text-sm leading-7 text-gray-700">
                      {L(
                        "野村恭平デザイン。チームのロゴです。背景には山口の空をそのまま使用しています。",
                        "Designed by Kyohei Nomura. This is the team logo, featuring a background of Yamaguchi’s sky."
                      )}
                    </p>
                  </div>
                </article>

                <article className="flex min-h-[148px] flex-1 items-center gap-4 rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur sm:gap-5 sm:p-5">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(54,155,255,0.18),transparent_52%),linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)] p-3 sm:h-28 sm:w-28">
                    <img
                      src="/logos/Regius_logo_tp.png"
                      alt="Regius logo"
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {L("Regius Logo", "Regius Logo")}
                    </h3>
                    <p className="text-sm leading-7 text-gray-700">
                      {L(
                        "野村恭平デザイン。2026機体「Regius」のロゴです。グッズなどに使用されます。",
                        "Designed by Kyohei Nomura. This is the logo for our 2026 aircraft, Regius, and will be used on merchandise and more."
                      )}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="mission-detail" className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0050a7]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Mission Detail
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {L("2つの目標", "Two Goals")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {missionStories.map((story) => {
              const isOpen = !!openMission[story.id];
              return (
                <article
                  key={story.id}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e6f4ff] to-transparent opacity-40" />
                  <div className="relative z-10 space-y-3">
                    <span className="inline-flex rounded-full bg-[#0050a7]/10 px-3 py-1 text-xs font-semibold text-[#0050a7]">
                      {story.badge}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {pick(story.title)}
                    </h3>
                    <p className="text-gray-700">{pick(story.summary)}</p>
                    {isOpen && (
                      <div className="space-y-3 rounded-xl bg-[#f5f7fa] p-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#369bff]/20">
                        {pick(story.paragraphs).map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleMission(story.id)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7] hover:text-[#003d80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? L("閉じる", "Close") : L("もっと見る", "Read more")}
                      <span aria-hidden>{isOpen ? "▲" : "▼"}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="goals" className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#00d4ff]" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Goal
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {L(
              "2026年7月、琵琶湖で200mの滑空を実現する",
              "Achieve a 200m glide at Lake Biwa in July 2026"
            )}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {L(
              "鳥人間コンテスト滑空機部門で200mを記録することが、SOARAの指標です。高校生チームが未だ突破したことのない第二の壁を超えることで、次世代の可能性を示します。",
              "Our benchmark is a 200m glide in the Birdman Contest glider division. By crossing this second barrier—never achieved by a high school team—we aim to show the potential of the next generation."
            )}
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-600">
                  {L("壁の分析（サマリー）", "Barrier analysis (summary)")}
                </p>
                <div className="mt-2 rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
                  {L(
                    "過去25年の記録から壁の位置と要因を分析し、ギャップ頻度とサイズを可視化しました。",
                    "We analyzed 25 years of records to locate barriers and visualize gap frequency and size."
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setOpenWallAnalysis((v) => !v)}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7] hover:text-[#003d80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
                  aria-expanded={openWallAnalysis}
                >
                  {openWallAnalysis ? L("閉じる", "Close") : L("もっと見る", "Read more")}
                  <span aria-hidden>{openWallAnalysis ? "▲" : "▼"}</span>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-xl bg-gray-50 p-6">
                <img
                  src="/analysis/gap-frequency-average.png"
                  alt="距離レンジ別のギャップ分析"
                  className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                />
              </div>
            </div>
            {openWallAnalysis && (
              <div className="mt-4 space-y-3 rounded-xl bg-[#f5f7fa] p-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#369bff]/20">
                <p>{L("なぜ200mを実現したいのか", "Why 200 meters?")}</p>
                <p>
                  {L(
                    "SOARAの大会における目標を設定するにあたり、記録の\"壁\"がどこに存在するのか、そしてその考えられる要因を探りました。",
                    "To set our competition goal, we investigated where the record “barriers” exist and what factors might explain them."
                  )}
                </p>
                <p>
                  {L(
                    "まず、記録の壁を過去25年の鳥人間コンテスト滑空機部門の記録を分析することにより発見し、その後個々の壁の前後におけるフライト傾向の差を讀賣テレビによる鳥人間コンテスト公式Youtubeチャンネルに投稿されている動画から考察しました。",
                    "We first identified barriers by analyzing 25 years of glider division records, then examined flight tendencies before and after each barrier using videos from the official Birdman Contest YouTube channel."
                  )}
                </p>
                <p>
                  {L(
                    "左のグラフでは0-500mを25mごとのレンジに分け、どのレンジで大きな記録ギャップが発生しやすいか、即ち記録を伸ばす上での壁がどこに存在しているのかを分析しました。",
                    "The left graph divides 0–500 m into 25 m ranges to analyze where large record gaps tend to occur—indicating the barriers to further distance."
                  )}
                </p>
                <p>
                  {L(
                    "手法は平均の各記録間のギャップの値とそのレンジにおけるギャップの存在頻度を掛け合わせた「ハードル値」を定義し、その値が大きなレンジを調査しました。",
                    "We defined a “hurdle value” by multiplying the average gap size by how often gaps occur in each range, and investigated the ranges with higher values."
                  )}
                </p>
                <p>
                  {L(
                    "その結果が右のグラフであり、赤い線が引かれているレンジ帯が記録を伸ばす上で障壁となるものであると考えられます。",
                    "The right graph shows the results, where ranges marked with red lines are considered barriers to longer distances."
                  )}
                </p>
                <p>{L("主要な\"壁\"のハードル値", "Key barrier hurdle values")}</p>
                <ul className="space-y-1 pl-4 text-gray-700">
                  <li>
                    {L(
                      "1位: 350-375m / 頻度13回 / 平均58.5m / ハードル値761",
                      "1st: 350–375 m / freq 13 / avg 58.5 m / hurdle 761"
                    )}
                  </li>
                  <li>
                    {L(
                      "2位: 75-100m / 頻度20回 / 平均35.6m / ハードル値712",
                      "2nd: 75–100 m / freq 20 / avg 35.6 m / hurdle 712"
                    )}
                  </li>
                  <li>
                    {L(
                      "3位: 150-175m / 頻度16回 / 平均43.0m / ハードル値688",
                      "3rd: 150–175 m / freq 16 / avg 43.0 m / hurdle 688"
                    )}
                  </li>
                  <li>
                    {L(
                      "4位: 125-150m / 頻度18回 / 平均34.7m / ハードル値624",
                      "4th: 125–150 m / freq 18 / avg 34.7 m / hurdle 624"
                    )}
                  </li>
                  <li>
                    {L(
                      "5位: 300-325m / 頻度15回 / 平均40.5m / ハードル値608",
                      "5th: 300–325 m / freq 15 / avg 40.5 m / hurdle 608"
                    )}
                  </li>
                </ul>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200">
                    <img
                      src="/analysis/gap-frequency-average.png"
                      alt="距離レンジ別のギャップ分析"
                      className="w-full rounded-md object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200">
                    <img
                      src="/analysis/gap-position-size.png"
                      alt="全ギャップの位置とサイズ"
                      className="w-full rounded-md object-contain"
                    />
                  </div>
                </div>
                <p>
                  {L(
                    "第一の壁（75m-100m）: 発進直後の揚力不足や一次構造・二次構造の剛性不足、引き起こしの失敗が要因。",
                    "Barrier 1 (75–100 m): insufficient lift at launch, low stiffness in primary/secondary structure, and failed pull-up."
                  )}
                </p>
                <p>
                  {L(
                    "第二の壁（125m-175m）: L/D比不足や静安定性不足が要因。高校生チーム最高記録153mを超えるために突破が必須。",
                    "Barrier 2 (125–175 m): insufficient L/D and static stability. Breaking this barrier is required to exceed the high school record of 153 m."
                  )}
                </p>
                <p>
                  {L(
                    "第三・第四の壁（300-325m / 350-375m）: 機体の洗練やフライトチーム/パイロットの熟練度が影響すると考えられるが詳細は分析中。",
                    "Barriers 3 & 4 (300–325 m / 350–375 m): likely influenced by airframe refinement and team/pilot experience; analysis ongoing."
                  )}
                </p>
                <p>
                  {L(
                    "SOARAが200mを目指す理由: 高校生記録を更新し、中位チーム入りを果たすため。第一の壁に加え、未踏の第二の壁を突破することが求められる。",
                    "Why 200 m: to surpass the high school record and move into the mid-tier. This requires clearing the first barrier and the unbroken second barrier."
                  )}
                </p>
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-semibold text-gray-600">
              {L("目標を設定した具体的理由", "Reasons for the target")}
            </p>
            <p className="mt-3 text-gray-700">
              {L(
                "・高校生記録153mを上回るためには、揚抗比・安定性・操縦技術の両立が不可欠です。\n・経験豊富な大学・社会人チームが多く位置する東京を拠点に先輩方から学び、より安全で高性能な機体を目指します。",
                "• To surpass the 153 m high school record, we must balance L/D, stability, and piloting skills.\n• Based in Tokyo, we can collaborate with experienced university and adult teams to improve design and build quality."
              ).split("\n").map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/aircraft"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
            >
              {L("機体SOARA-X3を見る", "See aircraft SOARA-X3")}
            </a>
            <a
              href="/supporters"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
            >
              {L("応援・協賛について", "Support & sponsorship")}
            </a>
          </div>
        </section>

        <section id="history" className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00d4ff]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Timeline
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {L("これまでの歩み", "Our timeline")}
          </h2>
          <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 lg:grid-cols-2">
            {history.map((item) => (
              <div
                key={`${item.year}-${item.month}-${item.title}`}
                className="flex gap-4 rounded-xl p-4 transition hover:bg-gray-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f4ff] text-sm font-bold text-[#0050a7]">
                  {item.year}.{item.month}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00d4ff]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Uniqueness
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {L("SOARAの独自性", "What makes SOARA unique")}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {L(
              "SOARAは他の鳥人間チームと比較し、2つの独自性を持っていると考えています。",
              "Compared to other Birdman teams, SOARA stands out in two ways."
            )}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                id: "unique-volunteer",
                title: {
                  jp: "学校の枠を超えた有志チーム",
                  en: "A volunteer team across schools",
                },
                summary: {
                  jp: "複数校から有志が集まる高校生チームとして日本初の形態をとっています。既存の組織にありがちな制約に縛られず、情熱と多様な知を結集できます。",
                  en: "Japan’s first high school team formed by volunteers from multiple schools, free from club constraints and united by passion and diverse expertise.",
                },
                details: {
                  jp: [
                    "従来の鳥人間チームは大学・高専の部活動が中心。SOARAは複数の学校から有志が集まる日本初の高校生チーム。",
                    "異なる学校から集まったメンバーの知識・技術を結集できる。",
                    "部活動の制約（予算・時間・承認）に縛られない。",
                    "情熱のあるメンバーが集まる。ただし資金や時間の制約は厳しいが、この挑戦を通じて新しい可能性を切り拓く。",
                  ],
                  en: [
                    "Traditional Birdman teams are mainly university clubs. SOARA is Japan’s first multi-school high school volunteer team.",
                    "We can combine knowledge and skills from different schools.",
                    "We are not bound by club constraints (budget, time, approvals).",
                    "Passionate members gather, and despite funding and time limits, we open new possibilities through this challenge.",
                  ],
                },
              },
              {
                id: "unique-visibility",
                title: {
                  jp: "「見える化」へのこだわり",
                  en: "Commitment to visibility",
                },
                summary: {
                  jp: "フライトだけでなく製作過程を積極的に発信することで、技術力の可視化と次世代の挑戦者が生まれやすい環境を作ります。",
                  en: "We share not just flights but the build process, making our skills visible and inspiring the next generation.",
                },
                details: {
                  jp: [
                    "ものづくりに携わる仲間を増やすため、製作過程そのものを発信することを重視。",
                    "YouTube: 週1本の技術解説・製作ドキュメンタリーを配信。",
                    "SNS: 週3回の進捗報告・技術紹介を予定。",
                    "イベントへの積極的な出展と交流を予定。",
                    "一般の人に鳥コン機製作に必要な技術力を感じてもらい、同世代に興味を持ってもらい、次世代のチーム立ち上げを支援することを目指す。",
                  ],
                  en: [
                    "We emphasize sharing the build process to expand the maker community.",
                    "YouTube: weekly technical explanations and build documentaries.",
                    "SNS: three updates per week on progress and tech.",
                    "Active participation and exchanges at events.",
                    "We aim to help people feel the skills needed for a Birdman aircraft and inspire peers to start future teams.",
                  ],
                },
              },
            ].map((item) => {
              const isOpen = openMission[item.id];
              return (
                <article
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e6f4ff] to-transparent opacity-40" />
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {pick(item.title)}
                    </h3>
                    <p className="text-gray-700">{pick(item.summary)}</p>
                    {isOpen && (
                      <div className="space-y-2 rounded-xl bg-[#f5f7fa] p-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#369bff]/20">
                        {pick(item.details).map((d, idx) => (
                          <p key={idx}>{d}</p>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleMission(item.id)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7] hover:text-[#003d80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? L("閉じる", "Close") : L("もっと見る", "Read more")}
                      <span aria-hidden>{isOpen ? "▲" : "▼"}</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
