"use client";

import { useEffect } from "react";

export default function SocialMediaFeed() {
  useEffect(() => {
    // Juicerスクリプトを読み込み
    const script = document.createElement("script");
    script.src = "https://www.juicer.io/embed/soara-hpa/embed-code.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // クリーンアップ
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-screen-xl space-y-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Follow Us
          </p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            最新の活動
          </h3>
          <p className="mt-3 text-lg text-gray-600">
            InstagramとXで日々の活動を発信しています
          </p>
        </div>

        {/* Juicer ソーシャルメディアフィード */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <ul className="juicer-feed" data-feed-id="soara-hpa"></ul>
        </div>

        <div className="flex justify-center gap-4 pt-6">
          <a
            href="https://www.instagram.com/soara_hpa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          >
            Instagramをフォロー
            <span aria-hidden>↗</span>
          </a>
          <a
            href="https://x.com/soara_hpa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Xをフォロー
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
