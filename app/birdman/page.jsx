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
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">鳥人間コンテスト（仮置き）</h1>
          <br/>
          <p className="mt-3 text-lg text-gray-700">
            大会の概要、競技の流れ、機体カテゴリーなどを整理するページ。後で正式なコンテンツに差し替えます。
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              概要
            </p>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="text-base leading-relaxed text-gray-700">
                人力飛行機が琵琶湖を舞台に飛行距離を競う大会。正式情報・過去の記録・開催スケジュールなどをここにまとめます。
              </p>
              <div className="mt-4 h-48 rounded-xl bg-gray-100 ring-1 ring-dashed ring-gray-300" aria-hidden />
              <p className="mt-2 text-xs text-gray-500">※ ここに大会のイメージ画像を配置予定</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              大会について
            </p>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <ul className="space-y-3 text-base text-gray-700">
                <li>・会場: 滋賀県・琵琶湖</li>
                <li>・競技: 滑空機部門、人力プロペラ機部門など</li>
                <li>・評価: 飛行距離や記録更新を中心に審査</li>
              </ul>
              <div className="mt-4 h-32 rounded-xl bg-gray-100 ring-1 ring-dashed ring-gray-300" aria-hidden />
              <p className="mt-2 text-xs text-gray-500">※ 会場やレイアウト図の画像スペース</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            機体について
          </p>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">カテゴリー（例）</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>・滑空機: プラットフォームからの滑空距離を競う</li>
                  <li>・人力プロペラ: パイロットの漕力で推進し距離を競う</li>
                  <li>・その他特別競技: ルール変更やデモフライト等</li>
                </ul>
              </div>
              <div className="h-40 rounded-xl bg-gray-100 ring-1 ring-dashed ring-gray-300" aria-hidden />
            </div>
            <p className="mt-2 text-xs text-gray-500">※ 機体写真や図解を配置予定</p>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/supporters"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
          >
            SOARAを支援する
          </Link>
          <Link
            href="/aircraft"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
          >
            機体を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
