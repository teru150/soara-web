import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const password = formData.get("password");

    // パスワード認証
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    if (!file) {
      return NextResponse.json(
        { error: "ファイルが選択されていません" },
        { status: 400 }
      );
    }

    // ファイル名をサニタイズ
    const fileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${fileName}`;

    // ファイルをpublic/blogフォルダに保存
    const publicDir = path.join(process.cwd(), "public", "blog");

    // ディレクトリが存在しない場合は作成
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const filePath = path.join(publicDir, uniqueFileName);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    fs.writeFileSync(filePath, buffer);

    // クライアントに返すパス
    const imagePath = `/blog/${uniqueFileName}`;

    return NextResponse.json(
      { message: "画像をアップロードしました", path: imagePath },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "画像のアップロードに失敗しました" },
      { status: 500 }
    );
  }
}
