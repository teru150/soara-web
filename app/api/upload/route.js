import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export async function POST(request) {
  try {
    console.log("Upload request received");

    const formData = await request.formData();
    const file = formData.get("file");
    const password = formData.get("password");

    console.log("File received:", file ? file.name : "no file");
    console.log("Password received:", password ? "yes" : "no");

    // パスワード認証
    if (!password) {
      console.error("No password provided");
      return NextResponse.json(
        { error: "パスワードが入力されていません" },
        { status: 400 }
      );
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      console.error("Invalid password");
      return NextResponse.json(
        { error: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    if (!file) {
      console.error("No file provided");
      return NextResponse.json(
        { error: "ファイルが選択されていません" },
        { status: 400 }
      );
    }

    // ファイル名をサニタイズ
    const fileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${fileName}`;

    console.log("Unique filename:", uniqueFileName);

    // ファイルをpublic/blogフォルダに保存
    const publicDir = path.join(process.cwd(), "public", "blog");

    console.log("Target directory:", publicDir);

    // ディレクトリが存在しない場合は作成
    if (!existsSync(publicDir)) {
      console.log("Creating directory:", publicDir);
      await mkdir(publicDir, { recursive: true });
    }

    const filePath = path.join(publicDir, uniqueFileName);
    console.log("File path:", filePath);

    // ファイルを保存
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log("Buffer size:", buffer.length);

    await writeFile(filePath, buffer);

    console.log("File written successfully");

    // クライアントに返すパス
    const imagePath = `/blog/${uniqueFileName}`;

    return NextResponse.json(
      { message: "画像をアップロードしました", path: imagePath },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    console.error("Error stack:", error.stack);
    return NextResponse.json(
      {
        error: "画像のアップロードに失敗しました",
        details: error.message
      },
      { status: 500 }
    );
  }
}
