import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const postsFilePath = path.join(process.cwd(), "data", "posts.json");

// 記事を更新
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { password, post } = body;

    // パスワード認証
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    // 既存の記事を読み込む
    const fileContents = fs.readFileSync(postsFilePath, "utf8");
    const posts = JSON.parse(fileContents);

    // 更新する記事のインデックスを見つける
    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex === -1) {
      return NextResponse.json(
        { error: "記事が見つかりません" },
        { status: 404 }
      );
    }

    // 記事を更新（IDと作成日時は保持）
    posts[postIndex] = {
      ...posts[postIndex],
      title: post.title,
      category: post.category,
      author: post.author,
      excerpt: post.excerpt,
      image: post.image || posts[postIndex].image,
      body: post.body || [],
      date: new Date().toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).replace(/\//g, "."),
    };

    // ファイルに保存
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), "utf8");

    return NextResponse.json(
      { message: "記事を更新しました", post: posts[postIndex] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "記事の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// 記事を削除
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { password } = body;

    // パスワード認証
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    // 既存の記事を読み込む
    const fileContents = fs.readFileSync(postsFilePath, "utf8");
    const posts = JSON.parse(fileContents);

    // 削除する記事のインデックスを見つける
    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex === -1) {
      return NextResponse.json(
        { error: "記事が見つかりません" },
        { status: 404 }
      );
    }

    // 記事を削除
    posts.splice(postIndex, 1);

    // ファイルに保存
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), "utf8");

    return NextResponse.json(
      { message: "記事を削除しました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "記事の削除に失敗しました" },
      { status: 500 }
    );
  }
}
