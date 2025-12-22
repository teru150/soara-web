"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const subject = `SOARAお問い合わせ: ${formData.name}`;
      const body = [
        `お名前/ご所属: ${formData.name}`,
        `メールアドレス: ${formData.email}`,
        "",
        formData.message,
      ].join("\n");
      const mailto = `mailto:soara.hpa@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-md flex-col gap-10">
        <header className="space-y-3 rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            ご相談・お問い合わせ
          </h1>
          <p className="text-lg text-gray-600">
            スポンサー/パートナーシップ、取材やイベント登壇などのご連絡を<br/>
            お待ちしています。2営業日以内の返信を心がけています。
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <span>Mail: soara.hpa@gmail.com</span>
            <span>拠点: 東京都 / オンライン対応可</span>
          </div>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-800">
                お名前 / ご所属
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-transparent bg-gray-50 px-4 py-3 text-base text-gray-900 transition focus:border-[#369bff] focus:bg-white focus:ring-4 focus:ring-[#369bff]/20"
                placeholder="例: SOARA株式会社 / 田中太郎"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-800">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-transparent bg-gray-50 px-4 py-3 text-base text-gray-900 transition focus:border-[#369bff] focus:bg-white focus:ring-4 focus:ring-[#369bff]/20"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-800">
              ご用件
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-xl border-2 border-transparent bg-gray-50 px-4 py-3 text-base text-gray-900 transition focus:border-[#369bff] focus:bg-white focus:ring-4 focus:ring-[#369bff]/20"
              placeholder="サポート・取材・イベント連携など、お気軽にお知らせください。"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-6 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </button>

          {submitStatus === "success" && (
            <div className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800 ring-1 ring-green-200">
              メールアプリを開きました。内容を確認して送信してください。
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 ring-1 ring-red-200">
              送信に失敗しました。時間を置いて再度お試しください。
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
