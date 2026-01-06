"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus } from "lucide-react";

const modalMotion = {
  initial: { opacity: 0, scale: 0.98, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: 12 },
};

export default function BlogPage() {
  const [activePost, setActivePost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl text-gray-600">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 soara-grid" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10">
        <header className="rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Blog
              </p>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                SOARA-活動報告
              </h1>
              <p className="text-lg text-gray-600">
                設計・制作・広報の進捗やイベントでの学びを時系列順にお届けします。
              </p>
            </div>
            <Link
              href="/admin"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-[#0050a7] px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-[#003d80] sm:px-6"
            >
              <Plus className="h-5 w-5" />
              <span className="hidden sm:inline">記事を投稿</span>
            </Link>
          </div>
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
                  <div className="mt-1 flex items-center gap-2 text-sm text-white/80">
                    <span>{activePost.date}</span>
                    {activePost.author && (
                      <>
                        <span>•</span>
                        <span>投稿者: {activePost.author}</span>
                      </>
                    )}
                  </div>
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
