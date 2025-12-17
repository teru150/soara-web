"use client";

import { useState } from "react";
import contentData from "../../data/content.json";

const missionStories = [
  {
    title: "自分たちで作った飛行機を飛ばす夢を叶える",
    summary:
      "仲間たちと鳥人間コンテストという同じ夢に向かい挑戦することで、資金や環境等といった困難を打ち破り、自分たちの手で設計・製作した飛行機を実際に飛ばせることを証明したいため。",
    paragraphs: [
      "「高校生には早すぎる」「前例がないから無理」。こうした\"常識\"に直面したとき、諦めるという選択肢もありました。しかし私たちは、学校の枠を超え、仲間を集め、この挑戦を続けています。",
      "独学した専門書の理論を実機で応用する経験。チーム全員で人の命を預かる責任を分かち合う体験。そして何より、「できない」と言われたことを「やってみせる」という証明。どれも、私たち自身を大きく成長させる要素です。",
      "私たちSOARAが、仲間と同じ夢に向かい挑戦することで、困難を打ち破れることを示します。",
    ],
    badge: "Mission 01",
  },
  {
    title: "ものづくりの面白さを同世代・次世代に伝える",
    summary:
      "高校は人生の選択を左右する重要な期間なので、SOARAでの活動を通じて、年々減っている理系・ものづくり系を選ぶ仲間を増やしたいと考えているため。",
    paragraphs: [
      "日本において、理系・ものづくりを志す若者は年々減少しています。理系選択者は約32%であり、平均約50%であるOECD加盟国中では低い水準にあります。",
      "その中でも、ソフトウェアやIT分野への関心が高まる一方で、航空・機械・電気などのハードウェア分野への関心は相対的に低下しています。実際、SOARAメンバーの多くも、学校で周囲にものづくりに興味を持つ仲間が少ないことに悩んでいました。",
      "大学に入ると学部・専攻が決まります。高校は、将来の人生選択における重要な時期です。SOARAは、その重要な時期に、航空・ものづくりの面白さを実際に体験できる場を提供します。",
      "・YouTubeでは、週1本の技術解説・製作ドキュメンタリーを配信\n・SNSでは、週3回の進捗報告・技術紹介を発信\n・イベントへの積極的な出展と交流を実施",
      "これらの活動を通じて、同世代・次世代に「自分たちもやってみたい」と感じてもらい、年々減少している理系・ものづくり系を選ぶ仲間を増やしたい。それが、日本の空の未来を支えることにつながると、私たちは信じています。",
    ],
    badge: "Mission 02",
  },
];

const introImage = "/images/pics/IMG_3745.jpg";
const introTitle = "SOARAとは";
const introParagraphs = [
  "SOARAは、2025年6月に結成された日本初の高校生有志鳥人間チームです。学校の枠を越え「自分たちで飛行機を作りたい」という情熱だけで集まった仲間がスタート地点です。",
  "現在は東京を中心に、全国13校から21名が参加し、海外からのメンバーも加わっています。多様なバックグラウンドを持つ高校生が、専門や得意分野を掛け合わせて挑戦しています。",
  "私たちは、この挑戦を通じて2つのことを実現します。高校生でも本格的な航空機を作り、安全に飛ばせることの証明。そして、同世代・次世代がものづくりに触れるきっかけを作ること。",
  "SOARAは、単なる機体製作チームではありません。困難でありながら最高に楽しい課題に、仲間とともに挑む若き挑戦者たちの集まりです。",
];

export default function AboutPage() {
  const [openMission, setOpenMission] = useState({});
  const [openWallAnalysis, setOpenWallAnalysis] = useState(false);

  const toggleMission = (title) => {
    setOpenMission((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-14">
        <header className="relative overflow-hidden rounded-3xl border border-[#369bff]/25 bg-gradient-to-br from-[#e6f4ff]/90 via-white to-[#f5f7fa] px-6 py-12 shadow-soara sm:px-10">
          <div className="absolute inset-0 soara-grid opacity-40" aria-hidden />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                About SOARA
              </p>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                {contentData.about.hero.title}
              </h1>
              <p className="text-lg text-gray-600">
                {contentData.about.hero.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white/80 px-5 py-4 shadow-sm ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-500">
                Key Facts
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {contentData.meta?.members ?? 21} 名
                  </p>
                  <p className="text-sm text-gray-600">
                    全国{contentData.meta?.schools ?? 13}校 + 海外
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2026</p>
                  <p className="text-sm text-gray-600">鳥人間コンテスト出場目標</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Tokyo</p>
                  <p className="text-sm text-gray-600">Tokyo Innovation Baseを拠点に活動</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 w-full self-stretch rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-gray-200">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              About Our Name
            </p>
            <h3 className="mt-2 text-xl font-semibold text-gray-900">
              {contentData.home.aboutName.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-gray-700 whitespace-pre-line">
              {contentData.home.aboutName.text}
            </p>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00d4ff]" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Team Story
              </p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{introTitle}</h2>
            <div className="space-y-5 rounded-2xl bg-white p-6 text-lg leading-relaxed text-gray-700 shadow-sm ring-1 ring-gray-200">
              {introParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#mission-detail"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
              >
                もっと詳しく
                <span aria-hidden>→</span>
              </a>
              <a
                href="/members"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                メンバーを見る
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
            <img
              src={introImage}
              alt={contentData.about.intro.imageAlt || "SOARAチーム集合写真"}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <section id="mission-detail" className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#0050a7]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Mission Detail
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">2つの目標</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {missionStories.map((story) => {
              const isOpen = !!openMission[story.title];
              return (
                <article
                  key={story.title}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e6f4ff] to-transparent opacity-40" />
                  <div className="relative z-10 space-y-3">
                    <span className="inline-flex rounded-full bg-[#0050a7]/10 px-3 py-1 text-xs font-semibold text-[#0050a7]">
                      {story.badge}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {story.title}
                    </h3>
                    <p className="text-gray-700">{story.summary}</p>
                    {isOpen && (
                      <div className="space-y-3 rounded-xl bg-[#f5f7fa] p-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#369bff]/20">
                        {story.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleMission(story.title)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7] hover:text-[#003d80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "閉じる" : "もっと見る"}
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
            2026年7月、琵琶湖で200m滑空を実現する
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            鳥人間コンテスト滑空機部門で200mを達成することが、SOARAの指標です。<br/>
            高校生チームが未だ突破したことのない第二の壁を超えることで、次世代の可能性を示します。
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-600">過去記録の分析で判明した”壁”について</p>
                <p className="mt-2 text-sm text-gray-700">
                  過去25年の記録から壁の位置と要因を分析し、ギャップ頻度とサイズを可視化しました。
                </p>
                <button
                  type="button"
                  onClick={() => setOpenWallAnalysis((v) => !v)}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7] hover:text-[#003d80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
                  aria-expanded={openWallAnalysis}
                >
                  {openWallAnalysis ? "閉じる" : "もっと見る"}
                  <span aria-hidden>{openWallAnalysis ? "▲" : "▼"}</span>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-xl bg-gray-50 p-4">
                <img
                  src="/analysis/gap-frequency-average.png"
                  alt="距離レンジ別のギャップ分析"
                  className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                />
              </div>
            </div>
            {openWallAnalysis && (
              <div className="mt-4 space-y-3 rounded-xl bg-[#f5f7fa] p-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#369bff]/20">
                <p>なぜ200mを実現したいのか</p>
                <p>SOARAの大会における目標を設定するにあたり、記録の"壁"がどこに存在するのか、そしてその考えられる要因を探りました。</p>
                <p>まず、記録の壁を過去25年の鳥人間コンテスト滑空機部門の記録を分析することにより発見し、その後個々の壁の前後におけるフライト傾向の差を讀賣テレビによる鳥人間コンテスト公式Youtubeチャンネルに投稿されている動画から考察しました。</p>
                <p>左のグラフでは0-500mを25mごとのレンジに分け、どのレンジで大きな記録ギャップが発生しやすいか、即ち記録を伸ばす上での壁がどこに存在しているのかを分析しました。</p>
                <p>手法は平均の各記録間のギャップの値とそのレンジにおけるギャップの存在頻度を掛け合わせた「ハードル値」を定義し、その値が大きなレンジを調査しました。</p>
                <p>その結果が右のグラフであり、赤い線が引かれているレンジ帯が記録を伸ばす上で障壁となるものであると考えられます。</p>
                <p>主要な"壁"のハードル値</p>
                <ul className="space-y-1 pl-4 text-gray-700">
                  <li>1位: 350-375m / 頻度13回 / 平均58.5m / ハードル値761</li>
                  <li>2位: 75-100m / 頻度20回 / 平均35.6m / ハードル値712</li>
                  <li>3位: 150-175m / 頻度16回 / 平均43.0m / ハードル値688</li>
                  <li>4位: 125-150m / 頻度18回 / 平均34.7m / ハードル値624</li>
                  <li>5位: 300-325m / 頻度15回 / 平均40.5m / ハードル値608</li>
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
                <p>第一の壁（75m-100m）: 発進直後の揚力不足や一次構造・二次構造の剛性不足、引き起こしの失敗が要因。</p>
                <p>第二の壁（125m-175m）: L/D比不足や静安定性不足が要因。高校生チーム最高記録153mを超えるために突破が必須。</p>
                <p>第三・第四の壁（300-325m / 350-375m）: 機体の洗練やフライトチーム/パイロットの熟練度が影響すると考えられるが詳細は分析中。</p>
                <p>SOARAが200mを目指す理由: 高校生記録を更新し、中位チーム入りを果たすため。第一の壁に加え、未踏の第二の壁を突破することが求められる。</p>
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-semibold text-gray-600">目標を設定した具体的理由</p>
            <p className="mt-3 text-gray-700">
              ・高校生記録153mを上回るためには、揚抗比・安定性・操縦技術の両立が不可欠。
              <br />
              ・東京を拠点に、経験豊富な大学・社会人チームと連携し、設計と製作の質を向上可。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/aircraft"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
            >
              機体SOARA-X3を見る
            </a>
            <a
              href="/supporters"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
            >
              応援・協賛について
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
          <h2 className="text-3xl font-bold text-gray-900">これまでの歩み</h2>
          <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 lg:grid-cols-2">
            {contentData.about.history.map((item) => (
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
          <h2 className="text-3xl font-bold text-gray-900">SOARAの独自性</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            SOARAは、他の鳥人間チームと比較し、2つの独自性を持っています。
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "学校の枠を超えた有志チーム",
                summary:
                  "複数校から有志が集まる高校生チームとして日本初の形態。部活の制約に縛られず、情熱と多様な知を結集。",
                details: [
                  "従来の鳥人間チームは大学・高専の部活動が中心。SOARAは複数の学校から有志が集まる日本初の高校生チーム。",
                  "異なる学校から集まったメンバーの知識・技術を結集できる。",
                  "部活動の制約（予算・時間・承認）に縛られない。",
                  "情熱のあるメンバーが集まる。ただし資金や時間の制約は厳しいが、この挑戦を通じて新しい可能性を切り拓く。",
                ],
              },
              {
                title: "「見える化」へのこだわり",
                summary:
                  "フライトだけでなく製作過程を発信。技術力の可視化と次世代の挑戦を促す。",
                details: [
                  "ものづくりに携わる仲間を増やすため、製作過程そのものを発信することを重視。",
                  "YouTube: 週1本の技術解説・製作ドキュメンタリーを配信。",
                  "SNS: 週3回の進捗報告・技術紹介を予定。",
                  "イベントへの積極的な出展と交流を予定。",
                  "一般の人に鳥コン機製作に必要な技術力を感じてもらい、同世代に興味を持ってもらい、次世代のチーム立ち上げを支援することを目指す。",
                ],
              },
            ].map((item) => {
              const isOpen = openMission[item.title];
              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e6f4ff] to-transparent opacity-40" />
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.summary}</p>
                    {isOpen && (
                      <div className="space-y-2 rounded-xl bg-[#f5f7fa] p-4 text-sm leading-relaxed text-gray-700 ring-1 ring-[#369bff]/20">
                        {item.details.map((d, idx) => (
                          <p key={idx}>{d}</p>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleMission(item.title)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7] hover:text-[#003d80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "閉じる" : "もっと見る"}
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
