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
      { label: "プランク", value: "スタイロフォーム" },
      { label: "ストリンガー", value: "バルサ材" },
      { label: "胴体フレーム", value: "アルミパイプ" },
      { label: "フェアリング", value: "塩ビ板・発泡ブロック" },
      { label: "外皮", value: "ポリエステルフィルム" },
    ],

  },
   X3: {
    status: "Finalized - 2026",
    note: "実際に琵琶湖に挑む本番機。製作性と性能の両立を目指しました。",
    
    specs: [
      { label: "全幅", value: "18.8 m" },
      { label: "全長", value: "5.5m" },
      { label: "主翼面積", value: "26.32m²" },
      { label: "空虚重量", value: "50kg" },
      { label: "予想総重量", value: "105kg" },
      { label: "巡航速度", value: "8.5m/s" },
      { label: "滑空比", value: "32" },
      { label: "操縦方式", value: "ラダー/エレベーター併用" },
      { label: "設計年", value: "2025年12月-2026年7月" },
    ],
    materials: [
      { label: "主桁", value: "CFRPパイプ" },
      { label: "リブ", value: "10mm厚スタイロフォーム" },
      { label: "プランク", value: "2mm厚スチレンペーパー" },
      { label: "ストリンガー", value: "3mm*5mmヒノキ角材" },
      { label: "リブ補強", value: "1mm厚ヒノキ材" },
      { label: "胴体フレーム", value: "アルミパイプ" },
      { label: "フェアリング", value: "塩ビ板・発泡ブロック" },
      { label: "外皮", value: "熱収縮フィルム" },
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
      "X2で得た学びを踏まえ、性能と製法に合わせて最適化した本番機。2026年の鳥人間コンテストで私たちの可能性を示すための機体です。",
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            {aircraft.status}
          </p>
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

        {/* ── 機体構造の解説 ── */}
        <section className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Structure
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              機体構造を知る
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-gray-600">
              人力飛行機の翼は、大きく「一次構造」と「二次構造」の2つに分けることができます。
              一次構造は揚力を受け止める骨格にあたり、二次構造は翼の形を作って空気の流れを整える外装の役割を担っています。
            </p>
          </div>

          {/* 一次構造 / 二次構造 概要カード */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-6 shadow-sm ring-1 ring-gray-200">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#369bff]/10 px-3 py-1 text-xs font-semibold text-[#0050a7]">
                Primary Structure
              </span>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                一次構造 ― 揚力を支える骨格
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                主桁（CFRPパイプ）とかんざし（桁どうしを接合する内部パーツ）から成り、
                パイロットと機体自身の全重量を支えながら、飛行中に翼にかかる荷重を受け止めています。
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200">
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                Secondary Structure
              </span>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                二次構造 ― 翼型を形づくる外装
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                リブ・ストリンガー・プランク・後縁材・リブキャップ・フィルムといった部材で構成されており、
                翼の断面形状（翼型 GOE647）を正確に維持しながら、層流を保って抗力を抑える働きをしています。
              </p>
            </div>
          </div>

          {/* 構造パーツ詳細 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">各パーツの役割</h3>

            {/* ── 主桁 (CFRP) ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                {/* 画像プレースホルダー */}
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
                  <div className="space-y-2 text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs font-medium">主桁（CFRP パイプ）写真</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#369bff]/10 px-3 py-1 text-xs font-semibold text-[#0050a7]">
                    一次構造
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">主桁 ― CFRP パイプ</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    炭素繊維強化プラスチック（CFRP）製のパイプで、いわば翼の背骨にあたる最も重要な部材です。
                    SOARAでは0-1-3-4-5-6番の計6本の桁を使って翼幅18.8mを構成しており、
                    東京理科大学の鳥人間サークルTORICAを通じて、有限会社スリーホープ製のものを購入しました。
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">材料</span>
                      <span className="font-medium text-gray-800">P3252S-12 / HRX350G125S</span>
                    </div>
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">本数</span>
                      <span className="font-medium text-gray-800">6 本（2番桁は不使用）</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── かんざし ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#369bff]/10 px-3 py-1 text-xs font-semibold text-[#0050a7]">
                    一次構造
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">かんざし ― 桁接合パーツ</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    隣り合う桁の内側に差し込んで接合するための円筒状のパーツです。
                    SOARAでは2番桁を抜いた構成にしているため、1番桁と3番桁を繋ぐかんざしを新たに製作しました。
                    TORICAのかんざしをベースに、その上からガラス繊維を3mm積層してエポキシ樹脂で固めています。
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">材料</span>
                    <span className="font-medium text-gray-800">GFRP（ガラス繊維 + エポキシ樹脂）</span>
                  </div>
                </div>
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
                  <div className="space-y-2 text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs font-medium">かんざし写真</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── リブ ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
                  <div className="space-y-2 text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs font-medium">リブ（翼型断面）写真</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    二次構造
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">リブ ― 翼の断面形状を保つ</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    翼型GOE647の断面形状を維持するための骨組みで、翼の「肋骨」のような存在です。
                    10mm厚のスタイロフォームを重力式スライサーでスライスし、MDFレーザーカット製のマスターに沿ってホットワイヤーで切り出しています。
                    翼弦1.4mの矩形翼なので全リブが同じ形状になり、製作を大幅に効率化できました。
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">材料</span>
                      <span className="font-medium text-gray-800">10mm スタイロフォーム</span>
                    </div>
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">材料（マスター）</span>
                      <span className="font-medium text-gray-800">MDF レーザーカット</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── ストリンガー ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    二次構造
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">ストリンガー ― 外皮の凹みを防ぐ</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    リブとリブの間でフィルム（外皮）が凹んでしまうのを防ぐための縦通材です。
                    3&times;5mmのヒノキ角材を、断面の長辺（5mm）が翼表面に対して垂直に立つように配置して曲げ剛性を高めています。
                    プランク端から30mm手前で止めることで、フィルムへの移行が滑らかになるよう工夫しました。
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">材料</span>
                    <span className="font-medium text-gray-800">3&times;5mm ヒノキ角材</span>
                  </div>
                </div>
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
                  <div className="space-y-2 text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs font-medium">ストリンガー写真</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── プランク ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
                  <div className="space-y-2 text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs font-medium">プランク（前縁）写真</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    二次構造
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">プランク ― 前縁の形状を守る</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    翼の前縁（Leading Edge）を覆って、正確な曲面形状を保つことで層流を維持するパーツです。
                    前縁は空気が最初に触れる部分なので、ここの精度が揚力と抗力にそのまま影響します。
                    SOARAでは軽量で加工しやすいスチレンペーパーを採用しました。
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">材料</span>
                    <span className="font-medium text-gray-800">2mm 厚スチレンペーパー</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── リブキャップ ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    二次構造
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">リブキャップ ― リブの縁を補強</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    リブの上下縁に貼り付けて、フィルムの張力からリブを守るための補強材です。
                    一般的にはバルサ材が使われますが、SOARAでは20mm幅で精度を出しやすいヒノキ材を採用しています。
                    後縁付近では後縁材との段差が生まれないよう、先に後縁材を貼ってからリブキャップを直交させて接合しています。
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">材料</span>
                    <span className="font-medium text-gray-800">ヒノキ材（20mm 幅）</span>
                  </div>
                </div>
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
                  <div className="space-y-2 text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs font-medium">リブキャップ写真</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 後縁材 ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
                  <div className="space-y-2 text-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                    <p className="text-xs font-medium">後縁材写真</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    二次構造
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">後縁材 ― 翼の最後尾を鋭く</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    翼の最後尾を鋭く仕上げて、空気の流れをきれいに切ることで抗力を減らすパーツです。
                    SOARAではヒノキとスタイロフォームを組み合わせた複合構造を採用しました。
                    リブの後縁20mmを上下から1mm厚のヒノキで挟み、リブ間には斜めにスライスしたスタイロを挿入しています。
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">材料</span>
                    <span className="font-medium text-gray-800">1mm ヒノキ + スタイロフォーム</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 製作フロー */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900">翼製作フロー：オン・スパ同時接着</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              桁にはフランジ（出っ張り）があり、精度の確保が難しいため、SOARAでは
              「リブの結合」「迎角合わせ」「桁への固定」をひとつの工程でまとめて行う方法を採用しています。
            </p>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "ドライフィット",
                  desc: "接着剤なしで前後リブを桁にセットし、迎角保持ジグに乗せて隙間がないか確認します。",
                },
                {
                  step: "02",
                  title: "接着剤塗布",
                  desc: "リブ接合面・バルサプレート・桁の接触面にエポキシ等を塗布します。",
                },
                {
                  step: "03",
                  title: "同時圧着",
                  desc: "迎角保持ジグにリブを押し付けながら、前後リブをバルサプレートでサンドイッチしてクランプ固定します。",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-100"
                >
                  <span className="text-2xl font-bold text-[#369bff]">
                    {item.step}
                  </span>
                  <h4 className="mt-2 text-base font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
