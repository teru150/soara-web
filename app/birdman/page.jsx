"use client";

import Link from "next/link";

export default function BirdmanPage() {
  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-12">
        <header className="rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Birdman Contest
          </p>
          <br/>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">鳥人間コンテストとは？</h1>
          <br/>
          <p className="mt-3 text-lg text-gray-700">
            大会の概要、競技の流れ、機体の仕組み等についてご紹介します。
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              概要
            </p>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="text-base leading-relaxed text-gray-700">
                鳥人間コンテストは、読売テレビが番組撮影の一環として毎年7月に主催する、人力飛行機が琵琶湖を舞台に飛行距離を競う大会です。<br/>
                2026年で第48回の開催を迎え、大学生・社会人を中心とする多様なチームが参加しています。<br/>
                グライダーのように滑空する滑空機部門とパイロットが漕いでプロペラを回す人力プロペラ機部門があり、SOARAは滑空機部門での出場を目指しています。
              </p>
              <div className="mt-4 rounded-xl bg-gray-100 ring-1 ring-dashed ring-gray-300">
                <img
                  src="/images/icons/torikon.jpg"
                  alt="鳥人間コンテストのイメージ"
                  className="h-80 w-full rounded-xl object-cover"
                />
              
              </div>
              <p className="mt-2 text-xs text-gray-500">人力プロペラ機部門 | 出典：ytv公式</p>
              
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              大会について
            </p>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <ul className="space-y-3 text-base text-gray-700">
                <li>・会場: 琵琶湖・松原水泳場</li>
                <li>・競技: 滑空機部門、人力プロペラ機部門（2026）</li>
                <li>・評価: 各部門内で飛行距離を競う</li>
                <li>・備考: 高校生チームは過去23年に渡り記録なし</li>
              </ul>
              <br/>
              <div className="mt-4 rounded-xl bg-gray-100 ring-1 ring-dashed ring-gray-300">
                <img
                  src="/images/icons/hope.png"
                  alt="鳥人間コンテスト滑空機部門のイメージ"
                  className="h-80 w-full rounded-xl object-cover"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">滑空機部門 | 出典：ytv公式鳥人間コンテストYoutubeチャンネル</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            機体について
          </p>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex h-full flex-col space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">琵琶湖滑空機</h3>
                <p className="mt-2 text-xs text-gray-500">SOARA-X2</p>
                <div className="space-y-3 text-base leading-relaxed text-gray-700">
                  <p>
                    滑空機部門で使用される機体は、翼幅15~25m、機体重量30~45kgです。<br/>
                    自作人力飛行機でなければならないことを除き、機体形状などを制限するレギュレーションはありません。
                    そのため、各チームが独自に機体の開発・設計・製作を行います。
                  </p>
                  <p>
                    近年の大会ではカーボンファイバーや高強度発泡スチロールなどの先端材料を用い、
                    空力性能と軽量化を両立した機体が主流となっています。
                  </p>
                </div>
                <ul className="mt-2 space-y-3 text-base text-gray-700">
                  <li>・主桁: 主翼やコクピットといった重要な構造を支持する骨組み。</li>
                  <li>・主翼: 機体を飛行させるための揚力を生成する。</li>
                  <li>・コクピット: パイロットが搭乗する部分。</li>
                  <li>・コクピットフレーム: パイロットが直接体重をかけるアルミフレーム。</li>
                  <li>・フェアリング: コクピットを保護し、空気抵抗を低減する。</li>
                  <li>・尾翼: 機体の安定性を保つ。</li>
                  <li>
                    ・ラダー/エレベーター: 機体の制御を行う。
                    <span className="block text-sm text-gray-600">
                      　 安全規定で事実上搭載が義務付けられている。
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex h-full flex-col gap-4">
                <div className="flex-1 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
                  <img
                    src="/images/機体説明-01.png"
                    alt="SOARA-X2の機体説明図"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
                  <img
                    src="/images/機体説明-02.png"
                    alt="SOARA-X2の機体説明図"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="mt-2 text-right text-xs text-gray-500">※ SOARA-X2/X3 機体図</p>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/aircraft"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
          >
            私たちの機体を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
