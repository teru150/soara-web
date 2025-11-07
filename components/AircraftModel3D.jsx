"use client";

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';

// ========================================
// 機体モデル設定（本番実装時はここを変更）
// ========================================
const AIRCRAFT_MODELS = {
  X1: '/3d/SOARA-X1.glb',
  X2: '/3d/placeholder-X2.glb',  // 本番時: '/3d/SOARA-X2.glb' に変更
  X3: '/3d/placeholder-X3.glb',  // 本番時: '/3d/SOARA-X3.glb' に変更
};

// 実機モデルかプレースホルダーかの判定（本番時は全てtrueに変更）
const IS_ACTUAL_MODEL = {
  X1: true,   // 実機モデル
  X2: false,  // プレースホルダー（本番時: true に変更）
  X3: false,  // プレースホルダー（本番時: true に変更）
};

/**
 * 3Dモデルを読み込んで表示するコンポーネント
 */
function Model({ modelPath, autoRotate = false }) {
  const meshRef = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame((_, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={1.5} />;
}

/**
 * ローディング中のフォールバック
 */
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#888888" wireframe />
    </mesh>
  );
}

/**
 * 3D機体モデル表示コンポーネント
 */
export default function AircraftModel3D({ aircraft = 'X1', className = '' }) {
  const [autoRotate, setAutoRotate] = useState(true);

  const modelPath = AIRCRAFT_MODELS[aircraft];
  const isActualModel = IS_ACTUAL_MODEL[aircraft];

  return (
    <div className={`w-full h-full relative ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
        style={{ background: 'transparent' }}
      >
        <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />

        {/* 照明設定 */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />

        {/* 3Dモデル */}
        <Suspense fallback={<LoadingFallback />}>
          <Model
            modelPath={modelPath}
            autoRotate={autoRotate}
          />
        </Suspense>

        {/* 環境マッピング */}
        <Environment preset="city" />

        {/* カメラコントロール */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={15}
          autoRotate={autoRotate}
          autoRotateSpeed={1}
        />
      </Canvas>

      {/* コントロールパネル */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white z-10">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
        >
          <svg
            className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>{autoRotate ? '自動回転: ON' : '自動回転: OFF'}</span>
        </button>
        {!isActualModel && (
          <p className="text-xs text-gray-400 mt-2">
            3Dモデル準備中（プレースホルダー表示）
          </p>
        )}
      </div>

      {/* 操作説明 */}
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-xs z-10">
        <p className="font-semibold mb-1">操作方法:</p>
        <ul className="space-y-1 text-gray-300">
          <li>• ドラッグ: 回転</li>
          <li>• スクロール: ズーム</li>
          <li>• 右クリック: 移動</li>
        </ul>
      </div>
    </div>
  );
}

// GLTFモデルをプリロード
Object.values(AIRCRAFT_MODELS).forEach(modelPath => {
  useGLTF.preload(modelPath);
});
