"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, Plus, List } from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState("new"); // "new" or "manage"

  // 記事一覧
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  // 編集中の記事
  const [editingPost, setEditingPost] = useState(null);

  // 投稿フォームの状態
  const [formData, setFormData] = useState({
    title: "",
    category: "製作",
    author: "",
    excerpt: "",
    image: "",
    highlights: [""],
    body: [""],
  });
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  // 削除確認ダイアログ
  const [deletingPost, setDeletingPost] = useState(null);

  // 記事一覧を取得
  const fetchPosts = async () => {
    setLoadingPosts(true);
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoadingPosts(false);
    }
  };

  // 認証後に記事一覧を取得
  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  // ログイン処理
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setAuthError("");
  };

  // フォーム入力の処理
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ハイライトの追加・削除
  const addHighlight = () => {
    setFormData((prev) => ({
      ...prev,
      highlights: [...prev.highlights, ""],
    }));
  };

  const removeHighlight = (index) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.filter((_, i) => i !== index),
    }));
  };

  const updateHighlight = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      highlights: prev.highlights.map((h, i) => (i === index ? value : h)),
    }));
  };

  // 本文の追加・削除
  const addBodyParagraph = () => {
    setFormData((prev) => ({
      ...prev,
      body: [...prev.body, ""],
    }));
  };

  const removeBodyParagraph = (index) => {
    setFormData((prev) => ({
      ...prev,
      body: prev.body.filter((_, i) => i !== index),
    }));
  };

  const updateBodyParagraph = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      body: prev.body.map((p, i) => (i === index ? value : p)),
    }));
  };

  // 画像ファイル選択時の処理
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 画像アップロード処理
  const handleImageUpload = async () => {
    if (!imageFile) {
      setSubmitStatus({
        type: "error",
        message: "画像ファイルを選択してください",
      });
      return;
    }

    setIsUploadingImage(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const formDataUpload = new FormData();
      formDataUpload.append("file", imageFile);
      formDataUpload.append("password", password);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await response.json();

      if (response.ok) {
        setFormData((prev) => ({ ...prev, image: data.path }));
        setSubmitStatus({
          type: "success",
          message: "画像をアップロードしました",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "画像のアップロードに失敗しました",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "画像のアップロードに失敗しました",
      });
    } finally {
      setIsUploadingImage(false);
    }
  };

  // 投稿処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const url = editingPost
        ? `/api/posts/${editingPost.id}`
        : "/api/posts";
      const method = editingPost ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          post: {
            ...formData,
            highlights: formData.highlights.filter((h) => h.trim() !== ""),
            body: formData.body.filter((p) => p.trim() !== ""),
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: editingPost
            ? "記事を更新しました！"
            : "記事を投稿しました！",
        });
        // フォームをリセット
        setFormData({
          title: "",
          category: "製作",
          author: "",
          excerpt: "",
          image: "",
          highlights: [""],
          body: [""],
        });
        setImageFile(null);
        setImagePreview("");
        setEditingPost(null);
        // 記事一覧を再取得
        fetchPosts();
        // 2秒後にブログページにリダイレクト
        setTimeout(() => {
          router.push("/blog");
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "投稿に失敗しました",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "投稿に失敗しました。もう一度お試しください。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // 編集ボタン押下時
  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      category: post.category,
      author: post.author,
      excerpt: post.excerpt,
      image: post.image || "",
      highlights: post.highlights.length > 0 ? post.highlights : [""],
      body: post.body.length > 0 ? post.body : [""],
    });
    setActiveTab("new");
    window.scrollTo(0, 0);
  };

  // 編集キャンセル
  const handleCancelEdit = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      category: "製作",
      author: "",
      excerpt: "",
      image: "",
      highlights: [""],
      body: [""],
    });
    setImageFile(null);
    setImagePreview("");
  };

  // 削除処理
  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "記事を削除しました",
        });
        fetchPosts();
        setDeletingPost(null);
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "削除に失敗しました",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "削除に失敗しました",
      });
    }
  };

  // ログイン画面
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">
              SOARA 管理画面
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  パスワード
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                  required
                />
              </div>
              {authError && (
                <p className="text-sm text-red-600">{authError}</p>
              )}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#0050a7] px-6 py-3 font-semibold text-white transition hover:bg-[#003d80]"
              >
                ログイン
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // 管理画面
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* ヘッダー */}
        <div className="mb-8 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            ブログ管理
          </h1>
          <p className="text-gray-600">
            記事の投稿・編集・削除が可能です。
          </p>
        </div>

        {/* タブ */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("new")}
            className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${
              activeTab === "new"
                ? "bg-[#0050a7] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Plus className="h-5 w-5" />
            {editingPost ? "記事を編集" : "新規投稿"}
          </button>
          <button
            onClick={() => {
              setActiveTab("manage");
              handleCancelEdit();
            }}
            className={`flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition ${
              activeTab === "manage"
                ? "bg-[#0050a7] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <List className="h-5 w-5" />
            記事管理
          </button>
        </div>

        {/* 記事管理タブ */}
        {activeTab === "manage" && (
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
            <h2 className="mb-6 text-xl font-bold text-gray-900">記事一覧</h2>
            {loadingPosts ? (
              <p className="text-center text-gray-600">読み込み中...</p>
            ) : posts.length === 0 ? (
              <p className="text-center text-gray-600">記事がありません</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-start justify-between gap-4 rounded-xl border border-gray-200 p-4 transition hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="rounded-full bg-[#0050a7] px-2 py-1 text-xs font-semibold text-white">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.date}
                        </span>
                        <span className="text-xs text-gray-500">
                          投稿者: {post.author}
                        </span>
                      </div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600">{post.excerpt}</p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="rounded-lg bg-blue-100 p-2 text-blue-700 transition hover:bg-blue-200"
                        title="編集"
                      >
                        <Pencil className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setDeletingPost(post)}
                        className="rounded-lg bg-red-100 p-2 text-red-700 transition hover:bg-red-200"
                        title="削除"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 新規投稿/編集タブ */}
        {activeTab === "new" && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {editingPost && (
              <div className="rounded-3xl bg-blue-50 p-6 ring-1 ring-blue-200">
                <div className="flex items-center justify-between">
                  <p className="text-blue-800">
                    「{editingPost.title}」を編集中
                  </p>
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                  >
                    編集をキャンセル
                  </button>
                </div>
              </div>
            )}

            {/* 基本情報 */}
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h2 className="mb-6 text-xl font-bold text-gray-900">基本情報</h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    タイトル <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      カテゴリー <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                      required
                    >
                      <option value="製作">製作</option>
                      <option value="外交">外交</option>
                      <option value="広報">広報</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="author"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      投稿者氏名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="例: 山田太郎"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="excerpt"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    概要（短い説明） <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    画像（オプション）
                  </label>
                  <div className="space-y-3">
                    <input
                      type="file"
                      id="imageFile"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                    />
                    {imagePreview && (
                      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-gray-300">
                        <img
                          src={imagePreview}
                          alt="プレビュー"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    {imageFile && (
                      <button
                        type="button"
                        onClick={handleImageUpload}
                        disabled={isUploadingImage}
                        className="w-full rounded-xl bg-[#0050a7] px-4 py-2 font-semibold text-white transition hover:bg-[#003d80] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isUploadingImage ? "アップロード中..." : "画像をアップロード"}
                      </button>
                    )}
                    {formData.image && (
                      <p className="text-sm text-green-600">
                        画像パス: {formData.image}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ハイライト */}
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                ハイライト
              </h2>
              <div className="space-y-3">
                {formData.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={highlight}
                      onChange={(e) => updateHighlight(index, e.target.value)}
                      placeholder="重要なポイントを入力"
                      className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                    />
                    {formData.highlights.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeHighlight(index)}
                        className="rounded-xl bg-red-100 px-4 py-2 text-red-700 transition hover:bg-red-200"
                      >
                        削除
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addHighlight}
                  className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
                >
                  + ハイライトを追加
                </button>
              </div>
            </div>

            {/* 本文 */}
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h2 className="mb-6 text-xl font-bold text-gray-900">本文</h2>
              <div className="space-y-3">
                {formData.body.map((paragraph, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-gray-700">
                        段落 {index + 1}
                      </label>
                      {formData.body.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeBodyParagraph(index)}
                          className="rounded-xl bg-red-100 px-3 py-1 text-sm text-red-700 transition hover:bg-red-200"
                        >
                          削除
                        </button>
                      )}
                    </div>
                    <textarea
                      value={paragraph}
                      onChange={(e) => updateBodyParagraph(index, e.target.value)}
                      rows={3}
                      placeholder="本文を入力してください"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#0050a7] focus:outline-none focus:ring-2 focus:ring-[#0050a7]/20"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addBodyParagraph}
                  className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
                >
                  + 段落を追加
                </button>
              </div>
            </div>

            {/* 投稿ボタン */}
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              {submitStatus.message && (
                <div
                  className={`mb-4 rounded-xl p-4 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#0050a7] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#003d80] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting
                  ? editingPost
                    ? "更新中..."
                    : "投稿中..."
                  : editingPost
                  ? "記事を更新"
                  : "記事を投稿"}
              </button>
            </div>
          </form>
        )}

        {/* 削除確認ダイアログ */}
        {deletingPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                記事を削除しますか？
              </h2>
              <p className="mb-2 text-gray-700">
                「{deletingPost.title}」を削除します。
              </p>
              <p className="mb-6 text-sm text-red-600">
                この操作は取り消せません。
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeletingPost(null)}
                  className="flex-1 rounded-xl bg-gray-200 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-300"
                >
                  キャンセル
                </button>
                <button
                  onClick={() => handleDelete(deletingPost.id)}
                  className="flex-1 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  削除する
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
