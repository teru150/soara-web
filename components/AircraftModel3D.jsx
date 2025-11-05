"use client";

import React from "react";

/**
 * 3D機体モデル表示用プレースホルダーコンポーネント
 * 将来的に3Dモデルビューワーを実装する予定
 */
export default function AircraftModel3D({ modelPath, className = "" }) {
  return (
    <div className={`flex items-center justify-center bg-gray-800 rounded-lg p-8 ${className}`}>
      <div className="text-center">
        <div className="text-6xl mb-4">✈️</div>
        <p className="text-gray-400">3Dモデルビューワー（準備中）</p>
        {modelPath && (
          <p className="text-gray-500 text-sm mt-2">{modelPath}</p>
        )}
      </div>
    </div>
  );
}
