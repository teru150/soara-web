import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const postsFilePath = path.join(process.cwd(), "data", "posts.json");

// 記事一覧を取得
export async function GET() {
  try {
    const fileContents = fs.readFileSync(postsFilePath, "utf8");
    const posts = JSON.parse(fileContents);

    // 日付順にソート（新しい順）
    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "記事の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// 新しい記事を投稿
export async function POST(request) {
  try {
    const body = await request.json();
    const { password, post } = body;

    // パスワード認証
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    // 必須フィールドのチェック
    if (!post.title || !post.category || !post.excerpt || !post.author) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // 既存の記事を読み込む
    const fileContents = fs.readFileSync(postsFilePath, "utf8");
    const posts = JSON.parse(fileContents);

    // 新しい記事を作成
    const newPost = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: post.title,
      date: new Date().toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).replace(/\//g, "."),
      category: post.category,
      image: post.image || "/blog/soara-code.png",
      author: post.author,
      excerpt: post.excerpt,
      body: post.body || [],
      createdAt: new Date().toISOString(),
    };

    // 配列の先頭に追加
    posts.unshift(newPost);

    // ファイルに保存
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), "utf8");

    return NextResponse.json(
      { message: "記事を投稿しました", post: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "記事の投稿に失敗しました" },
      { status: 500 }
    );
  }
}
