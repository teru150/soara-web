"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "../../contexts/LanguageContext";

const AircraftModel3D = dynamic(
  () => import("../../components/AircraftModel3D"),
  { ssr: false }
);

const IMAGE_PLACEHOLDER_PATH =
  "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z";

function PlaceholderImg({ label }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center bg-gray-100 lg:aspect-auto lg:min-h-[260px]">
      <div className="space-y-2 text-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={IMAGE_PLACEHOLDER_PATH}
          />
        </svg>
        <p className="text-xs font-medium">{label}</p>
      </div>
    </div>
  );
}

function WingStructureComparison({ L }) {
  const [sliderPosition, setSliderPosition] = useState(90); // デフォルトは90%（左から10%の位置）
  const [isDragging, setIsDragging] = useState(false);
  const [showBefore, setShowBefore] = useState(true);
  const [showAfter, setShowAfter] = useState(true);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(e.touches[0].clientX - rect.left, rect.width)
    );
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
      <div
        className="relative h-full w-full min-h-[400px] cursor-col-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* 後の画像（つけた後） - ベース */}
        <div className="absolute inset-0">
          <img
            src="/images/structure/wing-structure-after.png"
            alt={L("翼構造（外皮あり）", "Wing structure (with skin)")}
            className="h-full w-full object-cover"
            onError={() => {
              setShowAfter(false);
            }}
          />
          {!showAfter && (
            <div className="flex h-full w-full items-center justify-center">
              <PlaceholderImg
                label={L(
                  "翼構造（外皮あり）",
                  "Wing structure (with skin)"
                )}
              />
            </div>
          )}
        </div>

        {/* 前の画像（つける前） - オーバーレイ（クリップされる） */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src="/images/structure/wing-structure-before.png"
            alt={L("翼構造（骨組みのみ）", "Wing structure (frame only)")}
            className="h-full w-full object-cover"
            onError={() => {
              setShowBefore(false);
            }}
          />
          {!showBefore && (
            <div className="flex h-full w-full items-center justify-center">
              <PlaceholderImg
                label={L(
                  "翼構造（骨組みのみ）",
                  "Wing structure (frame only)"
                )}
              />
            </div>
          )}
        </div>

        {/* スライダーライン */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          {/* スライダーハンドル */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center ring-2 ring-gray-200">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* ラベル */}
        <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 pointer-events-none">
          {L("プランク・フィルムなし", "Frame only")}
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 pointer-events-none">
          {L("外皮あり", "With skin")}
        </div>

        {/* 操作説明 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 pointer-events-none">
          {L(
            "スライダーをドラッグして比較",
            "Drag slider to compare"
          )}
        </div>

        {/* 将来：3Dモデルビューアー（実装時にコメント解除） */}
        {/* <Suspense
          fallback={
            <div className="flex h-full w-full min-h-[400px] items-center justify-center text-gray-500">
              {L("3Dモデルを読み込み中...", "Loading 3D Model...")}
            </div>
          }
        >
          <WingStructure3D />
        </Suspense> */}
      </div>
    </div>
  );
}

export default function AircraftPage() {
  const [selected, setSelected] = useState("X1");
  const [openSpecs, setOpenSpecs] = useState(false);
  const { language } = useLanguage();
  const L = (jp, en) => (language === "en" ? en : jp);

  const aircrafts = {
    X1: {
      status: L("Prototype - 2024年設計", "Prototype — Designed 2024"),
      note: L(
        "強度課題により製作中止。ここから得た学びを次機に反映しました。",
        "Production halted due to structural issues. Lessons learned were applied to the next aircraft."
      ),
      specs: [
        { label: L("全幅", "Wingspan"), value: "20.40 m" },
        { label: L("全長", "Length"), value: "4.23 m" },
        { label: L("主翼面積", "Wing Area"), value: "22.33 m²" },
        { label: L("空虚重量", "Empty Weight"), value: "41.03 kg" },
        { label: L("予想総重量", "Est. Gross Weight"), value: "106 kg" },
        { label: L("巡航速度", "Cruise Speed"), value: "9.1 m/s" },
        {
          label: L("滑空比", "Glide Ratio"),
          value: L("11.0 (設計値)", "11.0 (design)"),
        },
        {
          label: L("操縦方式", "Control"),
          value: L("ラダー・体重移動方式", "Rudder & weight-shift"),
        },
      ],
      materials: [
        {
          label: L("主桁", "Main Spar"),
          value: L("塩化ビニルパイプ", "PVC pipe"),
        },
        { label: L("リブ", "Rib"), value: L("バルサ材", "Balsa wood") },
        {
          label: L("胴体下部", "Lower Fuselage"),
          value: L("ポリカーボネート板", "Polycarbonate sheet"),
        },
        {
          label: L("胴体上部", "Upper Fuselage"),
          value: L("バルサ材", "Balsa wood"),
        },
        {
          label: L("外皮", "Skin"),
          value: L("ポリエステルフィルム", "Polyester film"),
        },
      ],
    },
    X2: {
      status: L("Improved - 2025年設計", "Improved — Designed 2025"),
      note: L(
        "X1の課題をもとに標準化・軽量化を進めた改良機。",
        "An improved aircraft with standardization and weight reduction based on X1's challenges."
      ),
      specs: [
        { label: L("全幅", "Wingspan"), value: L("約24.6 m", "~24.6 m") },
        { label: L("全長", "Length"), value: L("約5.7 m", "~5.7 m") },
        { label: L("主翼面積", "Wing Area"), value: L("約18 m²", "~18 m²") },
        {
          label: L("空虚重量", "Empty Weight"),
          value: L("約45 kg", "~45 kg"),
        },
        {
          label: L("予想総重量", "Est. Gross Weight"),
          value: L("約110 kg", "~110 kg"),
        },
        { label: L("巡航速度", "Cruise Speed"), value: "10-11 m/s" },
        {
          label: L("滑空比", "Glide Ratio"),
          value: L("25-30（目標）", "25-30 (target)"),
        },
        {
          label: L("操縦方式", "Control"),
          value: L("ラダー・体重移動方式", "Rudder & weight-shift"),
        },
        {
          label: L("設計年", "Design Period"),
          value: L("2025年5月-9月", "May – Sep 2025"),
        },
      ],
      materials: [
        {
          label: L("主桁", "Main Spar"),
          value: L("CFRPパイプ", "CFRP pipe"),
        },
        {
          label: L("リブ", "Rib"),
          value: L("スタイロフォーム", "Styrofoam"),
        },
        {
          label: L("プランク", "Plank"),
          value: L("スタイロフォーム", "Styrofoam"),
        },
        {
          label: L("ストリンガー", "Stringer"),
          value: L("バルサ材", "Balsa wood"),
        },
        {
          label: L("胴体フレーム", "Fuselage Frame"),
          value: L("アルミパイプ", "Aluminum pipe"),
        },
        {
          label: L("フェアリング", "Fairing"),
          value: L("塩ビ板・発泡ブロック", "PVC sheet & foam block"),
        },
        {
          label: L("外皮", "Skin"),
          value: L("ポリエステルフィルム", "Polyester film"),
        },
      ],
    },
    X3: {
      status: "Finalized - 2026",
      note: L(
        "実際に琵琶湖に挑む本番機。製作性と性能の両立を目指しました。",
        "The production aircraft for Lake Biwa. Designed to balance manufacturability and performance."
      ),
      specs: [
        { label: L("全幅", "Wingspan"), value: "18.8 m" },
        { label: L("全長", "Length"), value: "5.5 m" },
        { label: L("主翼面積", "Wing Area"), value: "26.32 m²" },
        { label: L("空虚重量", "Empty Weight"), value: "50 kg" },
        { label: L("予想総重量", "Est. Gross Weight"), value: "105 kg" },
        { label: L("巡航速度", "Cruise Speed"), value: "8.5 m/s" },
        { label: L("滑空比", "Glide Ratio"), value: "32" },
        {
          label: L("操縦方式", "Control"),
          value: L("ラダー/エレベーター併用", "Rudder / Elevator combined"),
        },
        {
          label: L("設計年", "Design Period"),
          value: L("2025年12月-2026年7月", "Dec 2025 – Jul 2026"),
        },
      ],
      materials: [
        {
          label: L("主桁", "Main Spar"),
          value: L("CFRPパイプ", "CFRP pipe"),
        },
        {
          label: L("リブ", "Rib"),
          value: L("10mm厚スタイロフォーム", "10 mm Styrofoam"),
        },
        {
          label: L("プランク", "Plank"),
          value: L("2mm厚スチレンペーパー", "2 mm styrene paper"),
        },
        {
          label: L("ストリンガー", "Stringer"),
          value: L("3mm*5mmヒノキ角材", "3×5 mm Japanese cypress"),
        },
        {
          label: L("リブ補強", "Rib Reinforcement"),
          value: L("1mm厚ヒノキ材", "1 mm Japanese cypress"),
        },
        {
          label: L("胴体フレーム", "Fuselage Frame"),
          value: L("アルミパイプ", "Aluminum pipe"),
        },
        {
          label: L("フェアリング", "Fairing"),
          value: L("塩ビ板・発泡ブロック", "PVC sheet & foam block"),
        },
        {
          label: L("外皮", "Skin"),
          value: L("熱収縮フィルム", "Heat-shrink film"),
        },
      ],
    },
  };

  const developmentStories = [
    {
      id: "X1",
      title: L("X1: 挑戦の始まり", "X1: The Beginning"),
      period: L("2024年12月 - 2025年2月", "Dec 2024 – Feb 2025"),
      body: L(
        "手探りでのゼロからの機体設計。コストを抑え、製作のしやすさを優先した設計でしたが、主桁をはじめとした主要パーツの強度不足が判明し、製作を断念。",
        "Aircraft design from scratch through trial and error. The design prioritized low cost and ease of fabrication, but insufficient strength in the main spar and other key parts led us to abandon production."
      ),
    },
    {
      id: "X2",
      title: L("X2: 強豪機体への挑戦", "X2: Aiming Higher"),
      period: L("2025年5月 - 9月", "May – Sep 2025"),
      body: L(
        "X1の失敗を糧に、強豪チームの設計を参考に高度な機体を目指す。しかし設計を進める中で、現在の技術力では実現困難と判断。X3への重要な教訓になりました。",
        "Building on X1's lessons, we aimed for an advanced aircraft inspired by top teams. However, as design progressed, we concluded it exceeded our current capabilities. This became a crucial lesson for X3."
      ),
    },
    {
      id: "X3",
      title: L("X3: 琵琶湖を目指して", "X3: Heading to Lake Biwa"),
      period: L("2025年12月 - 2026年7月", "Dec 2025 – Jul 2026"),
      body: L(
        "X2で得た学びを踏まえ、性能と製法に合わせて最適化した本番機。2026年の鳥人間コンテストで私たちの可能性を示すための機体です。",
        "The production aircraft, optimized for both performance and manufacturability based on lessons from X2. This is the aircraft we will fly at the 2026 Birdman Rally to demonstrate our potential."
      ),
    },
  ];

  const constructionSteps = [
    {
      step: "01",
      title: L("ドライフィット", "Dry Fit"),
      desc: L(
        "接着剤なしで前後リブを桁にセットし、迎角保持ジグに乗せて隙間がないか確認します。",
        "Front and rear ribs are set on the spar without adhesive and placed on the angle-of-attack jig to check for gaps."
      ),
    },
    {
      step: "02",
      title: L("接着剤塗布", "Adhesive Application"),
      desc: L(
        "リブ接合面・バルサプレート・桁の接触面にエポキシ等を塗布します。",
        "Epoxy and other adhesives are applied to the rib joint surfaces, balsa plates, and spar contact areas."
      ),
    },
    {
      step: "03",
      title: L("同時圧着", "Simultaneous Bonding"),
      desc: L(
        "迎角保持ジグにリブを押し付けながら、前後リブをバルサプレートでサンドイッチしてクランプ固定します。",
        "While pressing the ribs against the angle-of-attack jig, the front and rear ribs are sandwiched with balsa plates and clamped."
      ),
    },
  ];

  const aircraft = aircrafts[selected];
  const specs = aircraft.specs || [];
  const visibleSpecs = openSpecs ? specs : specs.slice(0, 3);

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div
        className="absolute inset-0 soara-grid pointer-events-none"
        aria-hidden
      />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-14">
        <header className="rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Aircraft
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                {L("機体設計の歩み", "Aircraft Design Journey")}
              </h1>
              <p className="text-lg text-gray-600">
                {L(
                  "プロトタイプから本番機へ。挑戦の度に学びを反映し、設計と製作の再現性を高めています。",
                  "From prototype to production. We apply lessons from each challenge to improve our design and manufacturing process."
                )}
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
                key={story.id}
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
                <h3 className="text-xl font-semibold text-gray-900">
                  {story.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {story.body}
                </p>
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
                {L(
                  "マウスドラッグ：回転 / スクロール：拡大縮小",
                  "Drag: Rotate / Scroll: Zoom"
                )}
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
            <h2 className="text-3xl font-bold text-gray-900">
              SOARA-{selected}
            </h2>
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
                {L(
                  "詳細設計は公開準備中です。進捗はSNSとブログで随時お知らせします。",
                  "Detailed specs are being prepared. Updates will be shared on our SNS and blog."
                )}
              </div>
            )}
            {openSpecs &&
              aircraft.materials &&
              aircraft.materials.length > 0 && (
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                  <p className="text-sm font-semibold text-gray-700">
                    {L("主要材料", "Key Materials")}
                  </p>
                  <div className="mt-3 grid gap-2">
                    {aircraft.materials.map((mat) => (
                      <div
                        key={mat.label}
                        className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-800 ring-1 ring-gray-100"
                      >
                        <span className="font-semibold text-gray-600">
                          {mat.label}
                        </span>
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
                {openSpecs
                  ? L("詳細を閉じる", "Hide details")
                  : L("詳細なステータスを開く", "Show detailed specs")}
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
              {L(
                "機体構造を知る",
                "Understanding Aircraft Structure"
              )}
            </h2>
          </div>

          {/* 左半分：一次構造・二次構造の説明 / 右半分：翼構造イメージ */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* 左半分：テキスト説明 */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-6 shadow-sm ring-1 ring-gray-200">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#369bff]/10 px-3 py-1 text-xs font-semibold text-[#0050a7]">
                  Primary Structure
                </span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {L(
                    "一次構造 ― 揚力を支える骨格",
                    "Primary Structure — The Load-bearing Skeleton"
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {L(
                    "主桁（CFRPパイプ）とかんざし（桁どうしを接合する内部パーツ）から成り、パイロットと機体自身の全重量を支えながら、飛行中に翼にかかる荷重を受け止めています。",
                    "Composed of the main spar (CFRP pipe) and kanzashi (internal joints connecting spars), this structure supports the full weight of the pilot and the aircraft while bearing the aerodynamic loads during flight."
                  )}
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200">
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                  Secondary Structure
                </span>
                <h3 className="mt-3 text-xl font-semibold text-gray-900">
                  {L(
                    "二次構造 ― 翼型を形づくる外装",
                    "Secondary Structure — Airfoil-shaping Skin"
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {L(
                    "リブ・ストリンガー・プランク・後縁材・リブキャップ・フィルムといった部材で構成されており、翼の断面形状（翼型 GOE647）を正確に維持しながら、層流を保って抗力を抑える働きをしています。",
                    "Composed of ribs, stringers, planks, trailing-edge members, rib caps, and film, this structure accurately maintains the airfoil cross-section (GOE647) while preserving laminar flow and reducing drag."
                  )}
                </p>
              </div>
            </div>

            {/* 右半分：翼構造イメージ（画像比較スライダー） */}
            <WingStructureComparison L={L} />
          </div>

          {/* 構造パーツ詳細 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {L("各パーツの役割", "Role of Each Part")}
            </h3>

            {/* ── 主桁 (CFRP) ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gray-50">
                  <img
                    src="/images/structure/cfrp.png"
                    alt={L(
                      "主桁（CFRP パイプ）写真",
                      "Main spar (CFRP pipe) photo"
                    )}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#369bff]/10 px-3 py-1 text-xs font-semibold text-[#0050a7]">
                    {L("一次構造", "Primary")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    {L(
                      "主桁 ― CFRP パイプ",
                      "Main Spar — CFRP Pipe"
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {L(
                      "炭素繊維強化プラスチック（CFRP）製のパイプで、いわば翼の背骨にあたる最も重要な部材です。SOARAでは0-1-3-4-5-6番の計6本の桁を使って翼幅18.8mを構成しており、東京理科大学の鳥人間サークル鳥科さまを通じて、有限会社スリーホープ製のものを購入しました。",
                      "Made of carbon-fiber-reinforced plastic (CFRP), this is the most critical structural member — essentially the backbone of the wing. SOARA uses six spars (Nos. 0-1-3-4-5-6) to span 18.8 m, purchased through TORICA, the Birdman club at Tokyo University of Science, and manufactured by Three Hope Co., Ltd."
                    )}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">
                        {L("材料", "Material")}
                      </span>
                      <span className="font-medium text-gray-800">
                        P3252S-12 / HRX350G125S
                      </span>
                    </div>
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">
                        {L("本数", "Count")}
                      </span>
                      <span className="font-medium text-gray-800">
                        {L(
                          "6 本（2番桁は不使用）",
                          "6 pipes (No. 2 not used)"
                        )}
                      </span>
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
                    {L("一次構造", "Primary")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    {L(
                      "かんざし ― 桁接合パーツ",
                      "Kanzashi — Spar Joint"
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {L(
                      "隣り合う桁の内側に差し込んで接合するための円筒状のパーツです。SOARAでは2番桁を抜いた構成にしているため、1番桁と3番桁を繋ぐかんざしを新たに製作しました。鳥科さまのかんざしをベースに、その上から3mmヒノキ棒を巻いたうえでガラス繊維を1層積層してエポキシ樹脂で固めています。",
                      "A cylindrical part inserted inside adjacent spars to join them together. Since SOARA omits spar No. 2, we fabricated a new kanzashi to connect spars No. 1 and No. 3. Starting from a TORICA kanzashi, we laminated 3 mm of glass fiber on top and cured it with epoxy resin."
                    )}
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">
                      {L("材料", "Material")}
                    </span>
                    <span className="font-medium text-gray-800">
                      {L(
                        "GFRP（ガラス繊維 + エポキシ樹脂）",
                        "GFRP (Glass fiber + Epoxy resin)"
                      )}
                    </span>
                  </div>
                </div>
                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gray-50">
                  <img
                    src="/images/structure/kanzashi.png"
                    alt={L("かんざし写真", "Kanzashi photo")}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ── リブ ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gray-50">
                  <img
                    src="/images/structure/ribs.png"
                    alt={L(
                      "リブ（翼型断面）写真",
                      "Rib (airfoil cross-section) photo"
                    )}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    {L("二次構造", "Secondary")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    {L(
                      "リブ ― 翼の断面形状を保つ",
                      "Rib — Maintaining the Airfoil Shape"
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {L(
                      "翼型GOE647の断面形状を維持するための骨組みで、翼の「肋骨」のような存在です。10mm厚のスタイロフォームを重力式スライサーでスライスし、MDFレーザーカット製のマスターに沿ってホットワイヤーで切り出しています。翼弦1.4mの矩形翼なので全リブが同じ形状になり、製作を大幅に効率化できました。",
                      "These are the framework that maintains the GOE647 airfoil cross-section — essentially the \"ribs\" of the wing. We slice 10 mm Styrofoam with a gravity slicer and cut them with a hot wire along an MDF laser-cut master template. Since the wing is rectangular with a 1.4 m chord, all ribs share the same shape, which greatly streamlined production."
                    )}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">
                        {L("材料", "Material")}
                      </span>
                      <span className="font-medium text-gray-800">
                        {L(
                          "10mm スタイロフォーム",
                          "10 mm Styrofoam"
                        )}
                      </span>
                    </div>
                    <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                      <span className="block text-xs font-semibold text-gray-500">
                        {L("材料（マスター）", "Material (Master)")}
                      </span>
                      <span className="font-medium text-gray-800">
                        {L(
                          "MDF レーザーカット",
                          "MDF laser-cut"
                        )}
                      </span>
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
                    {L("二次構造", "Secondary")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    {L(
                      "ストリンガー ― 外皮の凹みを防ぐ",
                      "Stringer — Preventing Skin Dents"
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {L(
                      "リブとリブの間でフィルム（外皮）が凹んでしまうのを防ぐための縦通材です。3×5mmのヒノキ角材を、断面の長辺（5mm）が翼表面に対して垂直に立つように配置して曲げ剛性を高めています。プランク端から30mm手前で止めることで、フィルムへの移行が滑らかになるよう工夫しました。",
                      "A longitudinal member that prevents the film (skin) from sagging between ribs. We orient 3×5 mm Japanese cypress strips with the long side (5 mm) perpendicular to the wing surface to maximize bending stiffness. They stop 30 mm short of the plank edge to ensure a smooth transition to the film."
                    )}
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">
                      {L("材料", "Material")}
                    </span>
                    <span className="font-medium text-gray-800">
                      {L(
                        "3×5mm ヒノキ角材",
                        "3×5 mm Japanese cypress"
                      )}
                    </span>
                  </div>
                </div>
                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gray-50">
                  <img
                    src="/images/structure/stringers.JPG"
                    alt={L("ストリンガー写真", "Stringer photo")}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ── プランク ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gray-50">
                  <img
                    src="/images/structure/plank.png"
                    alt={L(
                      "プランク（前縁）写真",
                      "Plank (leading edge) photo"
                    )}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    {L("二次構造", "Secondary")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    {L(
                      "プランク ― 前縁の形状を守る",
                      "Plank — Preserving Leading-edge Shape"
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {L(
                      "翼の前縁（Leading Edge）を覆って、正確な曲面形状を保つことで層流を維持するパーツです。前縁は空気が最初に触れる部分なので、ここの精度が揚力と抗力にそのまま影響します。SOARAでは軽量で加工しやすいスチレンペーパーを採用しました。",
                      "This part covers the leading edge of the wing and maintains an accurate curved shape to preserve laminar flow. Since the leading edge is the first point of contact with the air, its precision directly affects lift and drag. SOARA chose lightweight, easy-to-process styrene paper."
                    )}
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">
                      {L("材料", "Material")}
                    </span>
                    <span className="font-medium text-gray-800">
                      {L(
                        "2mm 厚スチレンペーパー",
                        "2 mm styrene paper"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── リブキャップ ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    {L("二次構造", "Secondary")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    {L(
                      "リブキャップ ― リブの縁を補強",
                      "Rib Cap — Reinforcing Rib Edges"
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {L(
                      "リブの上下縁に貼り付けて、フィルムの張力からリブを守るための補強材です。一般的にはバルサ材が使われますが、SOARAでは20mm幅で精度を出しやすいヒノキ材を採用しています。後縁付近では後縁材との段差が生まれないよう、先に後縁材を貼ってからリブキャップを直交させて接合しています。",
                      "A reinforcement bonded to the upper and lower edges of each rib to protect it from film tension. While balsa is commonly used, SOARA chose Japanese cypress for its ease of achieving precision at 20 mm width. Near the trailing edge, the trailing-edge member is applied first, and then the rib cap is joined perpendicularly to avoid any step."
                    )}
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">
                      {L("材料", "Material")}
                    </span>
                    <span className="font-medium text-gray-800">
                      {L(
                        "ヒノキ材（20mm 幅）",
                        "Japanese cypress (20 mm width)"
                      )}
                    </span>
                  </div>
                </div>
                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gray-50">
                  <img
                    src="/images/structure/ribcaps.JPG"
                    alt={L("リブキャップ写真", "Rib cap photo")}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* ── 後縁材 ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className="grid lg:grid-cols-[1fr_1.2fr]">
                <div className="relative aspect-[3/2] lg:aspect-auto lg:min-h-[360px] bg-gray-50">
                  <img
                    src="/images/structure/trailingedge.png"
                    alt={L("後縁材写真", "Trailing-edge member photo")}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                    {L("二次構造", "Secondary")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    {L(
                      "後縁材 ― 翼の最後尾を鋭く",
                      "Trailing-edge Member — A Sharp Wing Tail"
                    )}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {L(
                      "翼の最後尾を鋭く仕上げて、空気の流れをきれいに切ることで抗力を減らすパーツです。SOARAではヒノキとスタイロフォームを組み合わせた複合構造を採用しました。リブの後縁20mmを上下から1mm厚のヒノキで挟み、リブ間には斜めにスライスしたスタイロを挿入しています。",
                      "This part sharpens the trailing edge of the wing so that the airflow separates cleanly, reducing drag. SOARA uses a composite of Japanese cypress and Styrofoam — the last 20 mm of each rib is sandwiched between 1 mm cypress sheets, and diagonally sliced Styrofoam is inserted between the ribs."
                    )}
                  </p>
                  <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-sm ring-1 ring-gray-100">
                    <span className="block text-xs font-semibold text-gray-500">
                      {L("材料", "Material")}
                    </span>
                    <span className="font-medium text-gray-800">
                      {L(
                        "1mm ヒノキ + スタイロフォーム",
                        "1 mm Japanese cypress + Styrofoam"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
