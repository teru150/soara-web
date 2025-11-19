"use client";

import React from "react";
import contentData from "../../data/content.json";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed] relative overflow-hidden">
      {/* ページ上部のアクセントライン */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7]"></div>

      <div className="flex-grow py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* ページヒーロー */}
          <h1 className="text-center mb-16 relative">
            <span className="text-5xl font-bold">{contentData.about.hero.title}</span>
            <br />
            <br />
            <span className="text-3xl font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
              {contentData.about.hero.subtitle}
            </span>
            {/* タイトル下のアクセントライン */}
            <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7]"></div>
          </h1>

          <div className="space-y-24">
            {/* イントロダクションセクション */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                {contentData.about.intro.title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-12 whitespace-pre-line">
                {contentData.about.intro.content}
              </p>
              <div className="text-center mt-8 mb-32">
                <a
                  href="#formation"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[#369bff] to-[#0050a7] hover:from-[#4aabff] hover:to-[#1060b7] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#369bff]/50"
                >
                  チームについて詳しく見る
                </a>
              </div>
            </section>

            {/* About Our Name */}
            <section className="relative bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] rounded-t-lg"></div>

              {/* 見出しは最上部に配置 */}
              <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
                About Our Name
              </h2>

              {/* 本文 + ロゴ（水印）レイアウト */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                {/* 本文 */}
                <p className="md:col-span-3 text-gray-200 leading-relaxed text-lg whitespace-pre-line">
                  チーム名である「SOARA」は「舞い上がる」という意味の英単語である「soar」と、アルファベットの最初の文字であり、「原点」を意味する「A」を組み合わせた造語です。
                  <br />
                  <br />
                  SOARAは、日本の未来を担う中高生が、空へと飛び立つチャンスを獲得し、今後の航空業界をリードする人材へと育つ最初のきっかけとなることを願って名付けられています。
                </p>

                {/* ロゴ（水平方向に本文の横） */}
                <div className="md:col-span-2 relative hidden md:flex items-center justify-center min-h-[180px]">
                  {/* 白い透かし背景 */}
                  <div className="absolute -inset-3 rounded-2xl bg-white/10 blur-xl" aria-hidden="true"></div>
                  <div className="relative z-10 w-40 h-40 lg:w-40 lg:h-40 rounded-2xl overflow-hidden ring-1 ring-white/20 backdrop-blur-sm">
                    <img
                      src="/logos/soaralogo_sky.jpg"
                      alt="SOARA logo sky"
                      className="w-full h-full object-cover opacity-90 drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Mission */}
            <section className="relative bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] rounded-t-lg"></div>
              <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
                Mission
              </h2>

              <div className="space-y-8">
                <div className="relative bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#369bff]">
                  <h3 className="text-2xl font-bold mb-4 text-white">自分たちで作った飛行機を飛ばす夢を叶える</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    私たちの第一のミッションは、自分たちの手で設計・製作した飛行機を実際に飛ばす、この純粋な夢を実現することです。
                    <br />
                    <br />
                    「高校生には早すぎる」「前例がないから無理」。こうした"常識"に直面したとき、諦めるという選択肢もありました。しかし私たちは、学校の枠を超え、仲間を集め、この挑戦を続けています。
                    <br />
                    <br />
                    独学した専門書の理論を実機で応用する経験。チーム全員で人の命を預かる責任を分かち合う体験。そして何より、「できない」と言われたことを「やってみせる」という証明。どれも、私たち自身を大きく成長させる要素です。
                    <br />
                    <br />
                    私たちSOARAが、仲間と同じ夢に向かい挑戦することで、困難を打ち破れることを示します。
                  </p>
                </div>

                <div className="relative bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#0050a7]">
                  <h3 className="text-2xl font-bold mb-4 text-white">SOARAでの活動を通じてものづくりの面白さを同世代・次世代に伝える</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    私たちの第二のミッションは、SOARAでの活動を通じて、ものづくりの面白さを同世代・次世代に伝えることです。
                    <br />
                    <br />
                    日本において、理系・ものづくりを志す若者は年々減少しています。理系選択者は約32%であり、平均約50%であるOECD加盟国中では低い水準にあります。
                    <br />
                    <br />
                    その中でも、ソフトウェアやIT分野への関心が高まる一方で、航空・機械・電気などのハードウェア分野への関心は相対的に低下しています。
                    実際、SOARAメンバーの多くも、学校で周囲にものづくりに興味を持つ仲間が少ないことに悩んでいました。
                    <br />
                    <br />
                    大学に入ると学部・専攻が決まります。高校は、将来の人生選択における重要な時期です。
                    SOARAは、その重要な時期に、航空・ものづくりの面白さを実際に体験できるこれらの場を提供します。
                    <br />
                    <br />
                    ・YouTubeでは、週1本の技術解説・製作ドキュメンタリーを配信
                    <br />
                    ・SNSでは、週3回の進捗報告・技術紹介を発信
                    <br />
                    ・イベントへの積極的な出展と交流を実施
                    <br />
                    <br />
                    これらの活動を通じて、同世代・次世代に「自分たちもやってみたい」と感じてもらい、年々減少している理系・ものづくり系を選ぶ仲間を増やしたい。
                    <br />
                    <br />
                    それが、日本の空の未来を支えることにつながると、私たちは信じています。
                  </p>
                </div>
              </div>
            </section>

            <section id="goals">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                目標について
              </h2>

              <div className="relative bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20 mb-12">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] rounded-t-lg"></div>

                <h3 className="text-3xl font-bold mb-8 text-center text-white">
                  2026年7月、琵琶湖で200m滑空を実現する
                </h3>

                <div className="bg-white rounded-lg p-6 mb-8">
                  <img src="/analysis/flight-path.png" alt="定常滑空の軌道図" className="w-full h-auto" />
                </div>

                <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
                  <p>
                    鳥人間コンテスト滑空機部門では、10mの高さのプラットフォームから機体を滑空させ、着水地点までの飛行距離を競います。
                  </p>
                  <p>
                    私たちSOARAが掲げる目標は、200mの滑空を実現することです。
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">なぜ200mを実現したいのか</h3>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                      SOARAの大会における目標を設定するにあたり、記録の"壁"がどこに存在するのか、そしてその考えられる要因を探りました。
                    </p>
                    <p>
                      まず、記録の壁を過去25年の鳥人間コンテスト滑空機部門の記録を分析することにより発見し、その後個々の壁の前後におけるフライト傾向の差を讀賣テレビによる鳥人間コンテスト公式Youtubeチャンネルに投稿されている動画から考察しました。
                    </p>
                  </div>
                </div>

                {/* グラフセクション */}
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-6 text-white text-center">
                    記録の"壁"の分析
                  </h4>

                  {/* グラフ画像 */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-4">
                      <img
                        src="/analysis/gap-position-size.png"
                        alt="全ギャップの位置とサイズ (2000-2025)"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <img
                        src="/analysis/gap-frequency-average.png"
                        alt="距離レンジ別のギャップ頻度と平均サイズ"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                    <p>
                      左のグラフでは0-500mを25mごとのレンジに分け、どのレンジで大きな記録ギャップが発生しやすいか、即ち記録を伸ばす上での壁がどこに存在しているのかを分析しました。
                    </p>
                    <p>
                      手法は平均の各記録間のギャップの値とそのレンジにおけるギャップの存在頻度を掛け合わせた「ハードル値」を定義し、その値が大きなレンジを調査しました。
                    </p>
                    <p>
                      その結果が右のグラフであり、赤い線が引かれているレンジ帯が記録を伸ばす上で障壁となるものであると考えられます。
                    </p>
                  </div>
                </div>

                {/* ハードル値表 */}
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-xl font-bold mb-4 text-white text-center">
                    主要な"壁"のハードル値
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-gray-300">
                      <thead>
                        <tr className="border-b-2 border-[#369bff]">
                          <th className="py-3 px-4 text-center font-bold text-white">順位</th>
                          <th className="py-3 px-4 text-center font-bold text-white">レンジ</th>
                          <th className="py-3 px-4 text-center font-bold text-white">頻度</th>
                          <th className="py-3 px-4 text-center font-bold text-white">平均ギャップ</th>
                          <th className="py-3 px-4 text-center font-bold text-white">ハードル値</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700 bg-red-900/20">
                          <td className="py-3 px-4 text-center font-bold">1</td>
                          <td className="py-3 px-4 text-center">350-375m</td>
                          <td className="py-3 px-4 text-center">13回</td>
                          <td className="py-3 px-4 text-center">58.5m</td>
                          <td className="py-3 px-4 text-center font-bold text-red-400">761</td>
                        </tr>
                        <tr className="border-b border-gray-700 bg-orange-900/20">
                          <td className="py-3 px-4 text-center font-bold">2</td>
                          <td className="py-3 px-4 text-center">75-100m</td>
                          <td className="py-3 px-4 text-center">20回</td>
                          <td className="py-3 px-4 text-center">35.6m</td>
                          <td className="py-3 px-4 text-center font-bold text-orange-400">712</td>
                        </tr>
                        <tr className="border-b border-gray-700 bg-yellow-900/20">
                          <td className="py-3 px-4 text-center font-bold">3</td>
                          <td className="py-3 px-4 text-center">150-175m</td>
                          <td className="py-3 px-4 text-center">16回</td>
                          <td className="py-3 px-4 text-center">43.0m</td>
                          <td className="py-3 px-4 text-center font-bold text-yellow-400">688</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 px-4 text-center font-bold">4</td>
                          <td className="py-3 px-4 text-center">125-150m</td>
                          <td className="py-3 px-4 text-center">18回</td>
                          <td className="py-3 px-4 text-center">34.7m</td>
                          <td className="py-3 px-4 text-center">624</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3 px-4 text-center font-bold">5</td>
                          <td className="py-3 px-4 text-center">300-325m</td>
                          <td className="py-3 px-4 text-center">15回</td>
                          <td className="py-3 px-4 text-center">40.5m</td>
                          <td className="py-3 px-4 text-center">608</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 壁の分析 */}
                <div className="space-y-6">
                  <div className="relative bg-gradient-to-r from-orange-900/30 to-orange-800/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">第一の壁</span>
                      75m-100m
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      この壁はプラットホームからの発進直後、十分な揚力を得ることができずに墜落する機体とそうでない機体の差を表していると考えられます。
                      <br /><br />
                      その原因は複数考えられますが、主に機体の一次構造の剛性不足（2024α大学）、二次構造のねじれ剛性不足（2023β大学）、パイロットないしフライトチームの失敗による引き起こしの失敗、失速等（数多い）が主な要因です。
                    </p>
                  </div>

                  <div className="relative bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">第二の壁</span>
                      125m-175m
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      この壁はL/D比（揚抗比）の不足（2025チームγ）、あるいは静安定性の不足（2024チームδ、2025ζ大学）により発生していると考えられます。
                      <br /><br />
                      高校生チームの史上最高記録は153mであるため、200mを達成するには、この第二の壁を突破する必要があります。
                    </p>
                  </div>

                  <div className="relative bg-gray-800/50 p-6 rounded-lg border-l-4 border-gray-500">
                    <h4 className="text-xl font-bold mb-3 text-gray-300 flex items-center gap-2">
                      <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">第三・第四の壁</span>
                      300-325m / 350-375m
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      300-325mに位置する第三の壁、そして350-375mに位置する第四の壁も存在することが明らかになりましたが、今回は扱いません。機体の洗練やフライトチーム、パイロットの熟練度が高度に影響していると考察されますが、今回の分析では詳細な要因を特定するまでには至りませんでした。
                    </p>
                  </div>
                </div>

                {/* 200m目標の意義 */}
                <div className="relative bg-gradient-to-br from-[#369bff]/20 via-[#0050a7]/20 to-[#369bff]/10 p-8 rounded-lg border-2 border-[#369bff]">
                  <h4 className="text-2xl font-bold mb-6 text-white text-center">
                    SOARAが200mを目指す理由
                  </h4>
                  <div className="space-y-4 text-gray-200 leading-relaxed text-lg">
                    <p>
                      これらの分析と、高校生記録を更新すること、そして中位チームの仲間入りを果たしたいことを鑑み、SOARAでは目標飛行記録を200mとしました。
                    </p>
                    <p>
                      高校生チームの史上最高記録は153mであるため、200mを記録するためには、第一の壁のみならず、高校生チームが未だ突破したことのない第二の壁を突破することが求められます。
                    </p>
                    <p>
                      簡単な目標ではありませんが、私たちは過去の高校生チームと比べ有利な条件にあります。
                    </p>
                    <p>
                      それは、全国的に見ても経験豊富な鳥人間チームが段違いに数多く存在している東京に本拠を置いている事です。
                    </p>
                    <p>
                      既に第一から第四の壁を突破し、2025年度は準優勝を果たした東京理科大学鳥人間サークル鳥科様にスペシャルパートナーとして設計面・製作面でご支援いただいており、その他の先輩チーム様方からも多角的に技術や経験を習得し、壁を突破することを目指します。
                    </p>
                  </div>
                </div>

                {/* 機体へのリンク */}
                <div className="text-center mt-8">
                  <p className="text-gray-300 mb-4 text-lg">
                    200mを突破することを追求して設計された私たちの機体、SOARA-X3はこちらをご参照ください。
                  </p>
                  <a
                    href="/aircraft"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-[#369bff] to-[#0050a7] hover:from-[#4aabff] hover:to-[#1060b7] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#369bff]/50"
                  >
                    SOARA-X3の詳細を見る
                  </a>
                </div>
              </div>
            </section>

            <section id="formation">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                結成の経緯
              </h2>
              <div className="space-y-16">
                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#369bff]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    SOARAの始まり
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    全ての始まりは2024年の鳥人間コンテストでとある高校生チームが鳥人間コンテスト人力プロペラ機部門に挑んだことです。大いに影響された現代表の入山が学校で鳥人間チームを企画しましたが、実現することはありませんでした。
                    <br />
                    <br />
                    それでも、「自分たちで作り上げた飛行機を飛ばしたい」という夢を諦めることはできませんでした。
                    <br />
                    <br />
                    思い悩んでいたその時、ふとこう思いました。
                    <br />
                    <br />
                    「すべての高校から飛行機作りたい奴が集まれば、史上最強のチームができるんじゃないか？」
                    <br />
                    <br />
                    この瞬間、SOARAの物語が始まりました。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#2080d0]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    特色ある仲間たちとの出会い
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    どのようにすれば鳥人間コンテストに出場できるか悩んでいたところ、偶然知人に紹介され現ブランディング担当の野村と出会いました。
                    <br />
                    <br />
                    話してすぐに意気投合し、ともにSOARAとして有志のチームを結成し、資金、場所、人材全てを自分たちで確保することを決意しました。その後入山の中学時代の同級生だった優秀なエンジニアである現主任設計の中嶋を勧誘し、この3人でチームが始まりました。
                    <br />
                    <br />
                    その後も、SNS、イベント、友人の紹介を通じて、個性豊かなメンバーが集まり続けました。
                    <br />
                    <br />
                    現在のSOARAの構成は<br />
                    ・メンバー数：21名<br />
                    ・出身校：11校（東京6校、山口1校、兵庫1校、アメリカ3校）<br />
                    ・専門分野：航空工学、機械工学、電気電子、広報、外交
                    <br />
                    <br />
                    学校も、住む場所も、得意分野もバラバラ。でも、「自分たちで飛行機作るの？超面白そうじゃん！」という思いだけは同じ。
                    <br />
                    <br />
                    この多様性こそが、SOARAの最大の強みです。
                  </p>
                </div>
              </div>
            </section>

            <section id="uniqueness">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                SOARAの独自性
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                SOARAは、他の鳥人間チームと比較し、2つの独自性を持っています。
              </p>
              <div className="space-y-12">
                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#369bff]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    1. 学校の枠を超えた有志チーム
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    従来の鳥人間チームは、大学・高専の部活動が中心です。SOARAは、複数の学校から有志が集まる高校生チームとしては日本初の形態です。
                    <br />
                    <br />
                    これにより、<br />
                    ・異なる学校から集まったメンバーの知識・技術を結集できる<br />
                    ・部活動の制約（予算、時間、承認）に縛られない<br />
                    ・情熱のあるメンバーが集まる
                    <br />
                    <br />
                    という利点があります。
                    ただ、同様の形態が多い社会人・OBチームと比べ時間や資金力が限られるため、道のりは困難です。しかし、私たちはこの挑戦を通じて、自らの新しい可能性を切り拓きたいと考えています。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#0050a7]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    2. 「見える化」へのこだわり
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    ものづくりに携わる仲間を増やしていくためにも、
                    SOARAでは当日のフライトのみならず、「製作過程そのもの」を発信することも重視します。
                    <br />
                    <br />
                    ・YouTubeでは、週1本の技術解説・製作ドキュメンタリーを配信<br />
                    ・SNSでは、週3回の進捗報告・技術紹介<br />
                    ・イベントへの積極的な出展と交流
                    <br />
                    を予定しています。
                    <br />
                    <br />
                    これらの活動により、<br />
                    ・一般の人に鳥コン機製作に必要な技術力を感じていただく<br />
                    ・同世代に興味を持ってもらう<br />
                    ・次世代のチーム立ち上げを支援する
                    <br />
                    <br />
                    ことを目指しています。
                  </p>
                </div>
              </div>
            </section>

            {/* チームの沿革（タイムライン） */}
            <section id="history">
              <h2 className="text-2xl font-semibold mb-12 text-gray-200 border-l-4 border-[#369bff] pl-4">
                チームの歩み
              </h2>
              <div className="relative">
                {/* タイムライン中央線 */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#369bff] via-[#2080d0] to-[#0050a7]"></div>

                <div className="space-y-12">
                  {contentData.about.history.map((event, index) => (
                    <div key={index} className="relative">
                      {/* ノード */}
                      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                        <div className="w-4 h-4 bg-[#369bff] rounded-full border-4 border-[#0a0a0a]"></div>
                      </div>

                      <div className={`md:grid md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                        {/* 日付 */}
                        <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'} mb-4 md:mb-0`}>
                          <div className="inline-block md:block">
                            <span className="text-4xl font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
                              {event.year}
                            </span>
                            <span className="text-xl text-gray-400 ml-2">
                              .{event.month}
                            </span>
                          </div>
                        </div>

                        {/* コンテンツ */}
                        <div className={`${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
                          <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-[#369bff] hover:shadow-xl hover:shadow-[#369bff]/10 transition-shadow">
                            <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{event.description}</p>
                            {event.image && (
                              <div className="mt-4">
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="rounded-lg w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
};

export default AboutPage;
