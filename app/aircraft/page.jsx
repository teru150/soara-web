"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

const AircraftModel3D = dynamic(() => import("../../components/AircraftModel3D"), {
  ssr: false,
});

const aircrafts = {
  X1: {
    status: "Prototype - 2024年設計",
    note: "強度課題により製作中止。ここから得た学びを次機に反映。",
    specs: [
      { label: "全幅", value: "20.40 m" },
      { label: "全長", value: "4.23 m" },
      { label: "主翼面積", value: "22.33 m²" },
      { label: "空虚重量", value: "41.03 kg" },
      { label: "予想総重量", value: "106 kg" },
      { label: "巡航速度", value: "9.1 m/s" },
      { label: "滑空比", value: "11.0 (設計値)" },
      { label: "操縦方式", value: "ラダー・体重移動方式" },
    ],
    materials: [
      { label: "主桁", value: "塩化ビニルパイプ" },
      { label: "リブ", value: "バルサ材" },
      { label: "胴体下部", value: "ポリカーボネート板" },
      { label: "胴体上部", value: "バルサ材" },
      { label: "外皮", value: "ポリエステルフィルム" },
    ],
    learnings: [
      "一次構造・二次構造の剛性設計の重要性",
      "発進直後の揚力・安定性の確保に向けた形状最適化",
      "標準化された製作手順と品質トレーサビリティの必要性",
    ],
  },
  X2: {
    status: "Improved - 2025年設計",
    note: "X1の課題をもとに標準化・軽量化を進めた改良機。",
    specs: [
      { label: "全幅", value: "約24.6 m" },
      { label: "全長", value: "約5.7 m" },
      { label: "主翼面積", value: "約18 m²" },
      { label: "空虚重量", value: "約45 kg" },
      { label: "予想総重量", value: "約110 kg" },
      { label: "巡航速度", value: "10-11 m/s" },
      { label: "滑空比", value: "25-30（目標）" },
      { label: "操縦方式", value: "ラダー・体重移動方式" },
      { label: "設計年", value: "2025年5月-9月" },
    ],
    materials: [
      { label: "主桁", value: "CFRPパイプ" },
      { label: "リブ", value: "スタイロフォーム" },
      { label: "ストリンガー", value: "バルサ材" },
      { label: "胴体フレーム", value: "アルミパイプ" },
      { label: "フェアリング", value: "塩ビ板・発泡ブロック" },
      { label: "外皮", value: "ポリエステルフィルム" },
    ],
    learnings: ["設計標準化と軽量化の両立に向けた検証を進行中。"],
  },
   X3: {
    status: "Competition 2026",
    note: "200m滑空を目指す本番機。空力/構造/操縦系を総合最適化中。",
    
    specs: [
      { label: "全幅", value: "約20 m" },
      { label: "全長", value: "設計中" },
      { label: "主翼面積", value: "設計中" },
      { label: "空虚重量", value: "30kg台（目標）" },
      { label: "予想総重量", value: "設計中" },
      { label: "巡航速度", value: "設計中" },
      { label: "滑空比", value: "20以上（目標）" },
      { label: "操縦方式", value: "ラダー/エレベーター併用" },
      { label: "設計年", value: "2025年12月-2026年7月" },
    ],
    materials: [],
    
    learnings: [
      "✓ X2からの方針転換: 複雑な構造を避け、確実に製作できる設計へ",
      "✓ 現実的な性能目標: 技術力で達成可能な滑空比20を目指す",
      "✓ シンプルな構造設計: 製作難易度を下げ、確実性を重視",
      "✓ 安全性の徹底: X1、X2の経験を活かした万全の対策",
    ],
  },
};

const developmentStories = [
  {
    id: "X1",
    title: "X1: 挑戦の始まり",
    period: "2024年12月 - 2025年2月",
    body:
      "手探りでのゼロからの機体設計。コストを抑え、製作のしやすさを優先した設計でしたが、主桁をはじめとした主要パーツの強度不足が判明し、製作を断念。",
  },
  {
    id: "X2",
    title: "X2: 強豪機体への挑戦",
    period: "2025年5月 - 9月",
    body:
      "X1の失敗を糧に、強豪チームの設計を参考に高度な機体を目指す。しかし設計を進める中で、現在の技術力では実現困難と判断。X3への重要な教訓になりました。",
  },
  {
    id: "X3",
    title: "X3: 琵琶湖を目指して",
    period: "2025年12月 - 2026年7月",
    body:
      "X2で得た学びを踏まえ、性能と製法に合わせて最適化した本番機。2026年の鳥人間コンテストで高校生有志チームの可能性を示すための機体。",
  },
];

export default function AircraftPage() {
  const [selected, setSelected] = useState("X1");
  const [openSpecs, setOpenSpecs] = useState(false);
  const aircraft = aircrafts[selected];
  const specs = aircraft.specs || [];
  const visibleSpecs = openSpecs ? specs : specs.slice(0, 3);

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-14">
        <header className="rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Aircraft
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                機体設計の歩み
              </h1>
              <p className="text-lg text-gray-600">
                プロトタイプから本番機へ。挑戦の度に学びを反映し、設計と製作の再現性を高めています。
              </p>
            </div>
            <div className="inline-flex rounded-xl bg-gray-50 p-1 ring-1 ring-gray-200">
              {["X1", "X2", "X3"].map((id) => (
                <button
                  key={id}
                  onClick={() => setSelected(id)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    selected === id
                      ? "bg-gradient-to-r from-[#369bff] to-[#0050a7] text-white shadow-soara"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  aria-pressed={selected === id}
                >
                  SOARA-{id}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 lg:grid-cols-3">
            {developmentStories.map((story) => (
              <div
                key={story.title}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSelected(story.id);
                  setOpenSpecs(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(story.id);
                    setOpenSpecs(false);
                  }
                }}
                className={`space-y-2 rounded-xl p-4 shadow-inner ring-2 transition ${
                  selected === story.id
                    ? "bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] ring-[#369bff]"
                    : "bg-gray-50 ring-gray-100 hover:bg-white"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {story.period}
                </p>
                <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{story.body}</p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
            <div className="relative h-[360px] w-full bg-gray-50 sm:h-[420px]">
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center text-gray-500">
                    Loading 3D Model...
                  </div>
                }
              >
                <AircraftModel3D aircraft={selected} />
              </Suspense>
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200">
                マウスドラッグ：回転 / スクロール：拡大縮小
              </div>
            </div>
          </div>

          <div
            className={`space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 overflow-hidden transition-all duration-300 ${
              openSpecs ? "max-h-[1200px]" : "max-h-[520px]"
            } lg:min-h-[420px]`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f4ff] px-3 py-1 text-xs font-semibold text-[#0050a7]">
              {aircraft.status}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">SOARA-{selected}</h2>
            <p className="text-base text-gray-700">{aircraft.note}</p>
            {specs.length > 0 ? (
              <div className="grid gap-3 rounded-2xl bg-gray-50 p-4">
                {visibleSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-200"
                  >
                    <span className="text-sm font-semibold text-gray-600">
                      {spec.label}
                    </span>
                    <span className="text-base font-bold text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                詳細設計は公開準備中です。進捗はSNSとブログで随時お知らせします。
              </div>
            )}
            {openSpecs && aircraft.materials && aircraft.materials.length > 0 && (
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                <p className="text-sm font-semibold text-gray-700">主要材料</p>
                <div className="mt-3 grid gap-2">
                  {aircraft.materials.map((mat) => (
                    <div
                      key={mat.label}
                      className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-800 ring-1 ring-gray-100"
                    >
                      <span className="font-semibold text-gray-600">{mat.label}</span>
                      <span>{mat.value}</span>
                    </div>
                    ))}
                </div>
              </div>
            )}
            {openSpecs && aircraft.learnings.length > 0 && (
              <div className="rounded-2xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-4 shadow-sm ring-1 ring-[#369bff]/40">
                <p className="text-sm font-semibold text-gray-700">Learnings</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  {aircraft.learnings.map((item) => (
                    <li key={item}>・{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {specs.length > 3 && (
              <button
                type="button"
                onClick={() => setOpenSpecs((v) => !v)}
                className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
                aria-expanded={openSpecs}
              >
                {openSpecs ? "詳細を閉じる" : "詳細なステータスを開く"}
                <span aria-hidden>{openSpecs ? "▲" : "▼"}</span>
              </button>
            )}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "再現性のある製作",
              text: "X1での反省を踏まえ、X2以降は治具設計・製作フロー・検査項目を標準化し、品質を安定化。",
            },
            {
              title: "空力 × 構造 × 操縦",
              text: "揚抗比・安定性・操縦性のバランスを、テストモデルやCFD結果を踏まえて総合最適化。",
            },
            {
              title: "安全第一の検証",
              text: "10mから人が乗る競技だからこそ、万が一のリスクも潰す安全性検証を徹底。",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-700">{card.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-8 shadow-soara ring-1 ring-[#369bff]/25">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Next Step
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                200m滑空へ、設計協力・試験環境を募集中
              </h2>
              <p className="text-base text-gray-700">
                風洞試験、構造解析、材料提供、操縦訓練など、技術連携いただけるパートナーを探しています。
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/supporters"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
                >
                  連携のご相談
                </a>
                <a
                  href="/contacts"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
                >
                  お問い合わせフォーム
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-700">関連資料</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>・三面図（X1）PDF</li>
                <li>・設計コンセプト資料</li>
                <li>・機体設計仕様書</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                必要に応じて資料を共有します。詳細はお問い合わせください。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
