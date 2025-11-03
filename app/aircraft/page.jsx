"use client";

import { useState, Suspense } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the 3D model component to avoid SSR issues
const AircraftModel3D = dynamic(
  () => import('../../components/AircraftModel3D'),
  { ssr: false }
);

const AircraftPage = () => {
  const [selectedAircraft, setSelectedAircraft] = useState('X1');

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-32 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Aircraft</h1>
            <h2 className="text-3xl font-semibold text-gray-300 mb-8">
              From Prototype to Competition
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              SOARAの機体開発は、失敗から学び、改良を重ねる連続です。<br />
              プロトタイプX1での課題発見、改良機X2での標準化、<br />
              そして本番機X3での最適化――3機の進化の過程をご覧ください。
            </p>
          </div>

          {/* Aircraft Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-800 p-1">
              <button
                onClick={() => setSelectedAircraft('X1')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedAircraft === 'X1'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                SOARA-X1
                <span className="block text-xs mt-1">Prototype</span>
              </button>
              <button
                onClick={() => setSelectedAircraft('X2')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedAircraft === 'X2'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                SOARA-X2
                <span className="block text-xs mt-1">Improved</span>
              </button>
              <button
                onClick={() => setSelectedAircraft('X3')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedAircraft === 'X3'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                SOARA-X3
                <span className="block text-xs mt-1">Competition</span>
              </button>
            </div>
          </div>

          {/* 3D Model Display Area */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
              {/* 3D Model */}
              <Suspense fallback={
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                  <svg className="w-32 h-32 mb-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                  <p className="text-lg font-semibold">Loading 3D Model...</p>
                </div>
              }>
                <AircraftModel3D aircraft={selectedAircraft} />
              </Suspense>

              {/* Controls hint */}
              <div className="absolute bottom-4 right-4 bg-black/70 px-4 py-2 rounded text-sm text-gray-300 pointer-events-none">
                マウスドラッグ：回転 / スクロール：拡大縮小
              </div>
            </div>

            <div className="text-center text-gray-400 text-sm mt-4">
              <p>マウスやタッチでモデルを自由に操作できます</p>
            </div>
          </div>

          {/* Three-View Drawing Section */}
          <div className="bg-gray-900 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">三面図</h3>
            {selectedAircraft === 'X1' ? (
              <>
                <div className="w-full bg-gray-800 rounded-lg overflow-hidden">
                  <object
                    data="/blueprint/X1.pdf#toolbar=1&navpanes=0&view=fitH"
                    type="application/pdf"
                    className="w-full h-[70vh]"
                  >
                    <div className="p-6 text-gray-400 text-center">
                      <p className="mb-3">PDFビューアを読み込めませんでした。</p>
                      <a
                        href="/blueprint/X1.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 underline"
                      >
                        こちらからPDFを開く / ダウンロード
                      </a>
                    </div>
                  </object>
                </div>
                <div className="text-center mt-4">
                  <a
                    href="/blueprint/X1.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
                  >
                    別タブで開く
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Top View */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-center text-gray-400 mb-4">平面図（Top View）</h4>
                    <div className="aspect-square bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">画像準備中</p>
                      </div>
                    </div>
                  </div>

                  {/* Front View */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-center text-gray-400 mb-4">正面図（Front View）</h4>
                    <div className="aspect-square bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">画像準備中</p>
                      </div>
                    </div>
                  </div>

                  {/* Side View */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-center text-gray-400 mb-4">側面図（Side View）</h4>
                    <div className="aspect-square bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">画像準備中</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  ※ 三面図は設計完了次第、順次公開いたします
                </p>
              </>
            )}
          </div>

          {/* Aircraft Details - X1 */}
          {selectedAircraft === 'X1' && (
            <div className="bg-gray-900 rounded-lg p-8 mb-12">

              {/* Status Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1 bg-gray-700 rounded-full text-sm font-semibold">
                  Prototype - 2024年設計
                </span>
                <span className="px-4 py-1 bg-yellow-900/30 text-yellow-500 rounded-full text-sm font-semibold">
                  強度課題により製作中止
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-8 text-white">
                SOARA-X1：初めての挑戦
              </h3>

              {/* Specifications Table */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">基本スペック</h4>
                  <table className="w-full text-gray-300">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">全幅</td>
                        <td className="py-2 text-right">20.40 m</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">全長</td>
                        <td className="py-2 text-right">4.23 m</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">主翼面積</td>
                        <td className="py-2 text-right">22.33 m²</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">空虚重量</td>
                        <td className="py-2 text-right">41.03 kg</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">予想総重量</td>
                        <td className="py-2 text-right">106 kg</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">巡航速度</td>
                        <td className="py-2 text-right">9.1 m/s</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">滑空比</td>
                        <td className="py-2 text-right">11.0（設計値）</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">操縦方式</td>
                        <td className="py-2 text-right">ラダー・体重移動方式</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">設計年</td>
                        <td className="py-2 text-right">2024年12月-2025年2月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">主要材料</h4>
                  <table className="w-full text-gray-300">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">主桁</td>
                        <td className="py-2 text-right">塩化ビニルパイプ</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">リブ</td>
                        <td className="py-2 text-right">バルサ材</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">胴体下部</td>
                        <td className="py-2 text-right">ポリカーボネート板</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">胴体上部</td>
                        <td className="py-2 text-right">バルサ材</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">外皮</td>
                        <td className="py-2 text-right">ポリエステルフィルム</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Geometry & Aero Data */}
              <div className="bg-gray-800/50 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold mb-4 text-white">空力・幾何データ（X1）</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-blue-300 mb-3">主翼</h5>
                    <table className="w-full text-gray-300 text-sm">
                      <tbody>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼型</td><td className="py-2 text-right">PSU-90-125WL</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼幅（WL除く）</td><td className="py-2 text-right">20.40 m</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼面積（WL除く）</td><td className="py-2 text-right">22.33 m²</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">平均空力翼弦</td><td className="py-2 text-right">1.08 m</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">アスペクト比</td><td className="py-2 text-right">18.64</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">桁位置</td><td className="py-2 text-right">26.4–54.2 %</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼面荷重</td><td className="py-2 text-right">4.75 kg/m²</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">上反角</td><td className="py-2 text-right">7.2°</td></tr>
                        <tr><td className="py-2 font-semibold">取付迎角</td><td className="py-2 text-right">3.0°</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-blue-300 mb-3">水平尾翼</h5>
                    <table className="w-full text-gray-300 text-sm">
                      <tbody>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼型</td><td className="py-2 text-right">PSU-90-125WL</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼幅</td><td className="py-2 text-right">3.72 m</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼面積</td><td className="py-2 text-right">2.22 m²</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">容積比</td><td className="py-2 text-right">0.018</td></tr>
                        <tr><td className="py-2 font-semibold">回転中心</td><td className="py-2 text-right">25.56 %</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-blue-300 mb-3">垂直尾翼</h5>
                    <table className="w-full text-gray-300 text-sm">
                      <tbody>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼形</td><td className="py-2 text-right">オリジナル</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼幅</td><td className="py-2 text-right">0.81 m</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">翼面積</td><td className="py-2 text-right">0.67 m²</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">容積比</td><td className="py-2 text-right">0.0012</td></tr>
                        <tr className="border-b border-gray-700"><td className="py-2 font-semibold">回転中心</td><td className="py-2 text-right">25 %</td></tr>
                        <tr><td className="py-2 font-semibold">操舵角</td><td className="py-2 text-right">±25°</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Design Philosophy Section */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">設計思想：初めての挑戦</h4>
                  <p className="text-gray-300 leading-relaxed">
                    私たちは今回が初めての機体設計ということもあり、<span className="text-blue-400 font-semibold">製造のしやすさとコストパフォーマンスを最優先</span>しました。
                    高価なCFRP（炭素繊維強化プラスチック）の代わりに、入手しやすく加工が容易な材料を選択。
                    これにより、初期投資を抑えつつ、製作技術を学ぶことを目指しました。
                    <br /><br />
                    手探りで始めた設計は、多くの課題を抱えることになりましたが、<span className="text-blue-400 font-semibold">ゼロから機体を作る経験</span>は、チームにとってかけがえのない学びとなりました。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    主翼
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    コストを抑えるため、リブにはバルサ材を、主桁には塩化ビニルパイプを使用する構成としました。
                  </p>
                  <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                    <p className="text-red-300 font-semibold mb-2">⚠️ 発見された課題</p>
                    <p className="text-gray-300">
                      構造解析の結果、<span className="font-semibold">主桁の強度が大幅に不足</span>していることが判明しました。
                      塩化ビニルパイプは加工しやすい反面、飛行中の曲げ荷重に耐えられないことが明らかに。
                      この課題により、X1での大会出場は断念せざるを得ませんでした。
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    胴体
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    構造としては、底部にポリカーボネート板、上部にはバルサ材を用い、ボルトと接着剤で固定する方法を採用しました。
                    <br /><br />
                    理想としては丸みを帯びた流線型を目指していましたが、<span className="text-blue-400">製作の容易さを優先し、角ばった形状</span>としました。
                    空気抵抗の面では不利ですが、初めての製作チームとしては現実的な選択でした。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    安全対策
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    安全面では、以下の設計を採用：
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><span className="font-semibold">下部ハッチ</span>：足を出して着水できる構造</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><span className="font-semibold">上部脱出ハッチ</span>：緊急時に素早く脱出可能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>万が一の転覆時にも対応できる設計</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white">振り返りと学び</h4>
                  <p className="text-gray-300 leading-relaxed">
                    X1は、強度不足により製作を中止せざるを得ませんでした。
                    これは大きな挫折でしたが、同時に<span className="text-blue-400 font-semibold">計り知れない学びを得た経験</span>でもありました。
                    <br /><br />
                    • <span className="font-semibold">構造解析の重要性</span>：理論計算だけでなく、実測データに基づく検証の必要性<br />
                    • <span className="font-semibold">材料選択の critical性</span>：コスト優先では安全性が確保できない<br />
                    • <span className="font-semibold">実績ある設計の尊重</span>：先輩チームの知見を活かすことの重要性
                    <br /><br />
                    この失敗があったからこそ、X2ではより堅実で安全な設計に舵を切ることができました。
                    <span className="text-blue-400 font-semibold">失敗は、成功への最短ルート</span>だったのです。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Aircraft Details - X2 */}
          {selectedAircraft === 'X2' && (
            <div className="bg-gray-900 rounded-lg p-8 mb-12">

              {/* Status Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1 bg-gray-700 rounded-full text-sm font-semibold">
                  Improved - 2025年設計
                </span>
                <span className="px-4 py-1 bg-orange-900/30 text-orange-400 rounded-full text-sm font-semibold">
                  設計終了
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-8 text-white">
                SOARA-X2：堅実な改良
              </h3>

              {/* Specifications Table */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">基本スペック</h4>
                  <table className="w-full text-gray-300">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">全幅</td>
                        <td className="py-2 text-right">約24.6 m</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">全長</td>
                        <td className="py-2 text-right">約5.7 m</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">主翼面積</td>
                        <td className="py-2 text-right">約18 m²</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">空虚重量</td>
                        <td className="py-2 text-right">約45 kg</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">予想総重量</td>
                        <td className="py-2 text-right">約110 kg</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">巡航速度</td>
                        <td className="py-2 text-right">10-11 m/s</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">滑空比</td>
                        <td className="py-2 text-right">25-30（目標）</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">操縦方式</td>
                        <td className="py-2 text-right">ラダー・体重移動方式</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">設計年</td>
                        <td className="py-2 text-right">2025年5月-9月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">主要材料</h4>
                  <table className="w-full text-gray-300">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">主桁</td>
                        <td className="py-2 text-right">CFRPパイプ</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">リブ</td>
                        <td className="py-2 text-right">スタイロフォーム</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">ストリンガー</td>
                        <td className="py-2 text-right">バルサ材</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">胴体フレーム</td>
                        <td className="py-2 text-right">アルミパイプ</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">フェアリング</td>
                        <td className="py-2 text-right">塩ビ板・発泡ブロック</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">外皮</td>
                        <td className="py-2 text-right">ポリエステルフィルム</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Design Philosophy Section */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">設計思想：強豪チーム機体の模倣</h4>
                  <p className="text-gray-300 leading-relaxed">
                    X1の失敗を踏まえ、X2では<span className="text-blue-400 font-semibold">「鳥人間コンテストのスタンダードに合わせる」</span>ことを最優先としました。
                    <br /><br />
                    独自性よりも実績、革新性よりも安全性。
                    東京理科大学「鳥科」をはじめとする強豪チームの設計を参考に、
                    <span className="text-blue-400 font-semibold">伝統的な洗練された設計を忠実に模倣することで、確実に飛ぶ機体</span>を目指しました。
                    <br /><br />
                    しかし設計を進めるうちに、<span className="text-orange-400 font-semibold">強豪チームと私たちでは、技術力や経験に大きな差がある</span>ことに気づきました。
                    高度な製作技術を前提とした設計は、今の私たちには荷が重すぎたのです。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    主翼
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    X1の最大の失敗を教訓に、主桁には<span className="font-semibold text-blue-400">CFRPパイプ</span>を採用。
                    軽量かつ高強度で、多くの強豪チームで実績のある材料です。
                    <br /><br />
                    リブにはスタイロフォームを使用し、バルサ材のストリンガーで補強する標準的な構造としました。
                    この組み合わせにより、強度と軽量性を両立させています。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    胴体
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    胴体フレームにはアルミパイプを採用し、軽量ながら十分な剛性を確保。
                    フェアリング（外装カバー）には塩ビ板と発泡ブロックを使用し、
                    X1よりも<span className="text-blue-400">流線型に近い形状</span>を実現しています。
                    <br /><br />
                    この改良により、空気抵抗を低減し、滑空性能の向上を目指しています。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    安全性の向上
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    X1の安全設計を継承しつつ、さらに以下の改良を加えています：
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><span className="font-semibold">構造強度の余裕</span>：想定荷重の1.5倍以上の強度を確保</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><span className="font-semibold">改良された脱出ハッチ</span>：より大きく、開けやすい設計</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><span className="font-semibold">発泡スチロールによる浮力確保</span>：着水時も安全に浮上</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white">X2から得た気づき</h4>
                  <p className="text-gray-300 leading-relaxed">
                    X2の設計を進める中で、私たちは<span className="text-orange-400 font-semibold">重要な気づき</span>を得ました。
                    <br /><br />
                    強豪チームの設計は確かに優れていますが、それは<span className="font-semibold">高度な製作技術と豊富な経験を前提</span>としています。
                    CFRPの積層技術、精密な治具の製作、複雑な構造の組み立て――
                    これらすべてを、限られた時間と経験で習得するのは現実的ではありませんでした。
                    <br /><br />
                    この経験が、X3の設計方針を決定づけることになります。
                    <span className="text-blue-400 font-semibold">「背伸びせず、自分たちが本当に作れる機体を」</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Aircraft Details - X3 */}
          {selectedAircraft === 'X3' && (
            <div className="bg-gray-900 rounded-lg p-8 mb-12">

              {/* Status Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1 bg-gray-700 rounded-full text-sm font-semibold">
                  Competition - 2026年本番機
                </span>
                <span className="px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-semibold">
                  現在設計中：2025年11月~2026年2月
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-8 text-white">
                SOARA-X3：琵琶湖への挑戦
              </h3>

              {/* Target Specifications Table */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">目標スペック</h4>
                  <table className="w-full text-gray-300">
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">全幅</td>
                        <td className="py-2 text-right">約20m</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">全長</td>
                        <td className="py-2 text-right">設計中</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">主翼面積</td>
                        <td className="py-2 text-right">設計中</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">空虚重量</td>
                        <td className="py-2 text-right">30kg台（目標）</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">予想総重量</td>
                        <td className="py-2 text-right">設計中</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">巡航速度</td>
                        <td className="py-2 text-right">設計中</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">滑空比</td>
                        <td className="py-2 text-right">20以上（目標）</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">操縦方式</td>
                        <td className="py-2 text-right">ラダー/エレベーター併用</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-2 font-semibold">設計年</td>
                        <td className="py-2 text-right">2025年12月-2026年7月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-300">設計方針</h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-1">✓ X2からの方針転換</p>
                      <p className="text-sm text-gray-400">複雑な構造を避け、確実に製作できる設計へ</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-1">✓ 現実的な性能目標</p>
                      <p className="text-sm text-gray-400">自分たちの技術力で達成可能な滑空比20を目指す</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-1">✓ シンプルな構造設計</p>
                      <p className="text-sm text-gray-400">製作難易度を下げ、確実性を重視</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-1">✓ 安全性の徹底</p>
                      <p className="text-sm text-gray-400">X1、X2の経験を活かした万全の対策</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design Philosophy Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-lg border border-blue-500/30">
                  <h4 className="text-2xl font-semibold mb-4 text-white">X3への道のり：自分たちの実力に合わせた機体</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    X3は、SOARAの<span className="text-blue-400 font-semibold">集大成</span>となる機体です。
                    <br /><br />
                    X1での失敗、X2での「高すぎる目標設定」という気づきを経て、
                    ついに<span className="text-blue-400 font-semibold">自分たちが本当に作れる機体</span>へ。
                    <br /><br />
                    プロの真似をするのではなく、<span className="font-semibold">今の私たちの技術力で確実に製作できる設計</span>。
                    X2で目指した複雑な構造を見直し、より単純で堅実な設計に。
                    それでいて性能を犠牲にしない――これがX3の挑戦です。
                    <br /><br />
                    背伸びせず、しかし妥協もせず。
                    2026年7月の琵琶湖で、<span className="text-blue-400 font-semibold">「自分たちの実力を正しく理解したチーム」</span>の強さを証明します。
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800/50 p-4 rounded text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">X1</div>
                      <div className="text-sm text-gray-400">初めての挑戦</div>
                      <div className="text-xs text-gray-500 mt-1">手探りで始めて失敗</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">X2</div>
                      <div className="text-sm text-gray-400">強豪機体の模倣</div>
                      <div className="text-xs text-gray-500 mt-1">目標が高すぎた</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded text-center border-2 border-blue-500">
                      <div className="text-3xl font-bold text-blue-400 mb-2">X3</div>
                      <div className="text-sm text-gray-400">実力に合わせた設計</div>
                      <div className="text-xs text-gray-500 mt-1">確実に、安全に作れる機体</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white">設計プロセス</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    X3の設計は、X2の設計経験を踏まえ2025年11月に本格始動しました。
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold">X2設計の反省点分析</p>
                        <p className="text-sm text-gray-400">何が難しすぎたのか、どこを簡略化できるかを徹底分析</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold">製作可能性を重視した設計</p>
                        <p className="text-sm text-gray-400">複雑な構造を避け、確実に作れるシンプルな設計へ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold">材料選定と製作計画</p>
                        <p className="text-sm text-gray-400">扱いやすい材料を選び、製作難易度を大幅に低減</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold">製作・試験</p>
                        <p className="text-sm text-gray-400">確実に完成させ、桁試験、荷重試験を経て本番へ</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    性能目標
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    X3では、初出場チームとして現実的かつ挑戦的な目標を設定しています。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">滑空比 20以上</p>
                      <p className="text-sm text-gray-400">高性能機に匹敵する空力性能を目指す</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">飛行距離 200m以上</p>
                      <p className="text-sm text-gray-400">定常滑空の安定性を実証</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">空虚重量 30kg台</p>
                      <p className="text-sm text-gray-400">軽量化による性能向上</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">無事故完走</p>
                      <p className="text-sm text-gray-400">最優先の安全性確保</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-white">2026年7月、琵琶湖で</h4>
                  <p className="text-gray-300 leading-relaxed">
                    X3は、単なる機体ではありません。
                    <br /><br />
                    それは、「学校の枠を超えて空を飛びたい」という夢から始まった、
                    21人の高校生の情熱が形になったものです。
                    <br /><br />
                    数え切れない挫折、無数の試行錯誤、そして諦めなかった意志――
                    <br /><br />
                    <span className="text-blue-400 font-semibold text-lg">
                      X3が琵琶湖の空を飛ぶとき、私たちは証明します。<br />
                      「高校生でも、ここまでできる」と。
                    </span>
                  </p>
                </div>

                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm mb-4">X3の詳細設計は、設計書類提出後に公開予定です</p>
                  <p className="text-gray-400">
                    最新情報は<a href="/" className="text-blue-400 hover:text-blue-300 underline">ホームページ</a>や
                    <a href="/contacts" className="text-blue-400 hover:text-blue-300 underline ml-2">SNS</a>でお知らせします
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Comparison Section */}
          <div className="bg-gray-900 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">3機体の比較</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300">
                <thead>
                  <tr className="border-b-2 border-gray-700">
                    <th className="py-3 px-4 text-left">項目</th>
                    <th className="py-3 px-4 text-center">X1</th>
                    <th className="py-3 px-4 text-center">X2</th>
                    <th className="py-3 px-4 text-center">X3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">ステータス</td>
                    <td className="py-3 px-4 text-center text-yellow-500">製作中止</td>
                    <td className="py-3 px-4 text-center text-orange-400">設計終了</td>
                    <td className="py-3 px-4 text-center text-blue-400">現在設計中</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">全幅</td>
                    <td className="py-3 px-4 text-center">20.40 m</td>
                    <td className="py-3 px-4 text-center">24.6 m</td>
                    <td className="py-3 px-4 text-center">約20 m</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">全長</td>
                    <td className="py-3 px-4 text-center">4.23 m</td>
                    <td className="py-3 px-4 text-center">5.7 m</td>
                    <td className="py-3 px-4 text-center">設計中</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">主翼面積</td>
                    <td className="py-3 px-4 text-center">22.33 m²</td>
                    <td className="py-3 px-4 text-center">18.3 m²</td>
                    <td className="py-3 px-4 text-center">設計中</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">空虚重量</td>
                    <td className="py-3 px-4 text-center">41.03 kg</td>
                    <td className="py-3 px-4 text-center">45 kg</td>
                    <td className="py-3 px-4 text-center">設計中</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">予想総重量</td>
                    <td className="py-3 px-4 text-center">106 kg</td>
                    <td className="py-3 px-4 text-center">110 kg</td>
                    <td className="py-3 px-4 text-center">設計中</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">巡航速度</td>
                    <td className="py-3 px-4 text-center">9.1 m/s</td>
                    <td className="py-3 px-4 text-center">10-11 m/s</td>
                    <td className="py-3 px-4 text-center">設計中</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">滑空比</td>
                    <td className="py-3 px-4 text-center">11.0</td>
                    <td className="py-3 px-4 text-center">25-30</td>
                    <td className="py-3 px-4 text-center">20以上</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">操縦方式</td>
                    <td className="py-3 px-4 text-center">ラダー/体重移動方式</td>
                    <td className="py-3 px-4 text-center">ラダー/体重移動方式</td>
                    <td className="py-3 px-4 text-center">ラダー/エレベーター方式</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">設計年</td>
                    <td className="py-3 px-4 text-center text-sm">2024年12月-2025年2月</td>
                    <td className="py-3 px-4 text-center text-sm">2025年5月-9月</td>
                    <td className="py-3 px-4 text-center text-sm">2025年12月-2026年7月</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">設計方針</td>
                    <td className="py-3 px-4 text-center text-sm">初めての挑戦</td>
                    <td className="py-3 px-4 text-center text-sm">強豪機体の模倣</td>
                    <td className="py-3 px-4 text-center text-sm">実力に合わせた設計</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Development Story */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">開発ストーリー</h3>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-blue-400 font-semibold">2024年12月 - 2025年2月</span>
                </div>
                <h4 className="text-xl font-bold mb-2">X1: 挑戦の始まり</h4>
                <p className="text-gray-300">
                  初めての機体設計。コストを抑え、製作のしやすさを優先した設計でしたが、
                  構造解析で主桁の強度不足が判明。製作を断念するという辛い決断を下しました。
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-orange-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-orange-400 font-semibold">2025年5月 - 9月</span>
                </div>
                <h4 className="text-xl font-bold mb-2">X2: 強豪機体への挑戦</h4>
                <p className="text-gray-300">
                  X1の失敗を糧に、強豪チームの設計を参考にした高度な機体を目指しました。
                  しかし設計を進める中で、自分たちの技術力では実現困難であることに気づきました。
                  この「気づき」が、X3への重要な教訓となります。
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="mb-2">
                  <span className="text-blue-400 font-semibold">2025年12月 - 2026年7月</span>
                </div>
                <h4 className="text-xl font-bold mb-2">X3: 琵琶湖への挑戦</h4>
                <p className="text-gray-300">
                  X2での経験を活かし、性能を最適化した本番機。
                  2026年7月の鳥人間コンテストで、高校生有志チームの可能性を証明します。
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 text-lg leading-relaxed">
                失敗を恐れず、学び続け、挑戦し続ける。<br />
                それがSOARAの開発哲学です。
              </p>
            </div>
          </div>

        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
};

export default AircraftPage;
