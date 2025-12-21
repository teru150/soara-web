"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const posts = [
  {
    id: "2025-12-setup",
    title: "活動報告ページ開設",
    date: "2025.12.21",
    category: "外交",
    image: "/blog/soara-code.png",
    excerpt:
      "活動報告を投稿するページをウェブサイトに追加しました。",
    highlights: [
      "ページ開設のご報告",
    ],
    body: [
      "SOARAの活動の様子を投稿する媒体がSNS以外にも必要と感じ、活動報告ページを開設しました。",
      "SNSで投稿するものと比べて長めで詳細な報告を投稿する予定です。",
      "今後しばらくは過去の活動に関しての記事も投稿する予定ですので、ご理解ください。"
    ],
  },
  {
    id: "2025-10",
    title: "主桁の運搬完了",
    date: "2025.10.26",
    category: "製作",
    image: "/blog/ketainvan.png",
    excerpt:
      "主翼桁を東京理科大学鳥科様より購入させていただきました。",
    highlights: [
      "鳥科様の2024年主桁を購入",
      "主桁とは機体の骨組みとなるカーボンパイプ",
      "SOARAでは購入した約25m分中約20mを使用予定"
    ],
    body: [
     "東京理科大学鳥人間サークル鳥科様より、同サークルが2024年に使用したCFRP（炭素繊維強化プラスチック）製の主桁を購入し、輸送を行いました。",
     "SOARAでは設計の結果、購入した主桁約25m中約20mを使用した機体を製作する運びとなりました。",
     "12月下旬に桁試験を実施し、1月下旬に本作業場への移送を行う予定です。",
     "鳥科の皆様には運搬に際して多大なるご協力をいただき、大変お世話になりました。心より感謝申し上げます。"
    ],
  },
  {
    id: "2025-09",
    title: "秋HPA交流会参加報告",
    date: "2025.09.31",
    category: "外交",
    image: "/blog/hoseiuniv.png",
    excerpt:
      "法政大学HoPE様主催の秋HPA交流会にSOARAより3名が参加しました。",
    highlights: [
      "鳥人間チーム交流会への参加",
      "先輩チームの方々との交流",
    ],
    body: [
      "年2回開催される鳥人間チームのメンバー間の交流会であるHPA交流会にSOARAより3名が参加しました。",
      "日本中から結集した鳥人間たちの熱気に気圧されながらも、経験豊富な先輩方とお会いしてお話しすることができ、参加したメンバー皆にとってとても有意義な経験となりました。",
      "リブの切り出し方式や尾翼の設計についてなど、交流会でいただいたアドバイスを製作や設計に反映することができました。",
      "ちなみに、抽選会では法政水をいただきました。イベントを主催いただいたHoPEの皆様、ありがとうございました。"
    ],
  },
];

const modalMotion = {
  initial: { opacity: 0, scale: 0.98, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: 12 },
};

export default function BlogPage() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 soara-grid" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10">
        <header className="space-y-3 rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Blog
          </p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            SOARA-活動報告
          </h1>
          <p className="text-lg text-gray-600">
            設計・制作・広報の進捗やイベントでの学びを時系列順にお届けします。
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <button
              key={post.id}
              type="button"
              onClick={() => setActivePost(post)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0050a7] shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  <span>{post.date}</span>
                  <span>Report</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#0050a7]">
                  もっと読む
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activePost && (
          <>
            <motion.div
              className="pointer-events-auto fixed inset-0 z-40 bg-black/35 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActivePost(null)}
            />
            <motion.section
              className="pointer-events-auto fixed inset-4 z-50 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-200 sm:inset-8 lg:inset-12"
              initial={modalMotion.initial}
              animate={modalMotion.animate}
              exit={modalMotion.exit}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-56 w-full sm:h-72">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0" />
                <div className="absolute bottom-4 left-4 right-16 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {activePost.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    {activePost.title}
                  </h2>
                  <p className="mt-1 text-sm text-white/80">{activePost.date}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm transition hover:bg-white"
                  aria-label="閉じる"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="h-[calc(100%-14rem)] overflow-y-auto px-6 pb-10 pt-6 sm:h-[calc(100%-18rem)] sm:px-10">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-5 text-gray-700">
                    {activePost.body.map((paragraph, index) => (
                      <p key={index} className="text-base leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="space-y-4 rounded-2xl bg-gray-50 p-5 ring-1 ring-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Highlights
                    </p>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {activePost.highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#369bff]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl bg-white p-4 text-sm text-gray-600 shadow-sm ring-1 ring-gray-200">
                      詳細や参加希望は、お問い合わせフォームからご連絡ください。
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
