import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { password } = await request.json();

    // パスワード認証
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error verifying password:", error);
    return NextResponse.json(
      { error: "認証に失敗しました" },
      { status: 500 }
    );
  }
}
