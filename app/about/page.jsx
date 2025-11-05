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
            <section className="relative bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] rounded-t-lg"></div>
              <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
                About Our Name
              </h2>
              <p className="text-gray-200 leading-relaxed text-lg text-center whitespace-pre-line">
                チーム名である「SOARA」は「舞い上がる」という意味の英単語である「soar」と、アルファベットの最初の文字であり、「原点」を意味する「A」を組み合わせた造語です。
                <br />
                <br />
                SOARAは、日本の未来を担う中高生が、空へと飛び立つチャンスを獲得し、今後の航空業界をリードする人材へと育つ最初のきっかけとなることを願って名付けられています。
              </p>
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
                    私たちの第一のミッションは、自分たちの手で設計・製作した飛行機を実際に飛ばすこと――この純粋な夢を実現することです。
                    <br />
                    <br />
                    「高校生には早すぎる」「前例がないから無理」。こうした"常識"に直面したとき、諦めるという選択肢もありました。しかし私たちは、学校の枠を超え、仲間を集め、この挑戦を続けています。
                    <br />
                    <br />
                    鳥人間コンテストは、10mの高さから人を乗せた機体を飛ばす競技です。空力設計、構造解析、材料選定、製作技術――全てが高度に専門的であり、一つのミスも許されません。
                    <br />
                    <br />
                    だからこそ、この挑戦には価値があります。
                    <br />
                    <br />
                    教科書で学んだ理論を実機で応用する経験。チーム全員で責任を分かち合う体験。そして何より、「できない」と言われたことを「やってみせる」という証明。
                    <br />
                    <br />
                    2026年7月、琵琶湖の空で、私たちは飛びます。
                    <br />
                    <br />
                    同じ夢に向かい挑戦することで困難を打ち破れることを証明し、次世代に希望を与えるために。
                  </p>
                </div>

                <div className="relative bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#0050a7]">
                  <h3 className="text-2xl font-bold mb-4 text-white">SOARAでの活動を通じてものづくりの面白さを同世代・次世代に伝える</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    日本の航空産業は、深刻な人材不足に直面しています。経済産業省の調査によれば、航空関連企業の67%が「必要な人材を確保できていない」と回答しています。
                    <br />
                    <br />
                    この問題の根本には、「中高生の段階で航空・ものづくりへの興味が失われる」という構造的な課題があります。
                    <br />
                    <br />
                    小学生の頃、多くの子どもたちが空や宇宙に憧れを持ちます。しかし、中学・高校と進むにつれ、受験勉強や部活動の忙しさの中で、その夢は忘れられていきます。
                    <br />
                    <br />
                    高校は、人生の進路を選択できるほぼ最後の機会です。
                    <br />
                    <br />
                    SOARAは、その重要な時期に、航空・ものづくりの面白さを実際に体験できる場を提供します。
                    <br />
                    <br />
                    ・YouTube：週1本の技術解説・製作ドキュメンタリー
                    <br />
                    ・SNS：週3回の進捗報告・技術紹介
                    <br />
                    ・イベント：積極的な出展と交流
                    <br />
                    ・学校訪問：講演会・ワークショップの実施
                    <br />
                    <br />
                    これらの活動を通じて、同世代・次世代に「自分にもできるかもしれない」という希望を与え、年々減少している理系・ものづくり系を選ぶ仲間を増やしたい。
                    <br />
                    <br />
                    それが、日本の空の未来を支えることにつながると、私たちは信じています。
                  </p>
                </div>
              </div>
            </section>

            <section id="goals">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                私たちが掲げる目標と、その背景にあるもの
              </h2>

              <div className="relative bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20 mb-12">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] rounded-t-lg"></div>

                <h3 className="text-3xl font-bold mb-8 text-center text-white">
                  2026年7月、琵琶湖で200m滑空を実現する
                </h3>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  {/* 図を追加する余地 - プラットフォームから飛び出す図 */}
                  <div className="bg-gray-800/50 rounded-lg p-6 flex items-center justify-center min-h-[300px]">
                    <div className="text-center text-gray-400">
                      <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <p className="text-sm">プラットフォームから飛び出す図</p>
                      <p className="text-xs mt-2">(準備中)</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <p className="text-4xl font-bold text-center bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">
                        200m
                      </p>
                      <p className="text-center text-gray-300">目標滑空距離</p>
                    </div>
                    <div className="bg-gray-800/50 p-6 rounded-lg">
                      <p className="text-4xl font-bold text-center bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">
                        10m
                      </p>
                      <p className="text-center text-gray-300">プラットフォーム高さ</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
                  <p>
                    鳥人間コンテスト・滑空機部門では、10mの高さのプラットフォームから機体を滑空させ、着水地点までの飛行距離を競います。
                  </p>
                  <p>
                    私たちSOARAが掲げる目標は、<span className="font-bold text-white">200mの定常滑空を実現すること</span>です。
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">なぜ200mなのか？</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      200mという数字は、単なる記録目標ではありません。この距離には、3つの重要な意味があります。
                    </p>
                  </div>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-l-4 border-[#369bff]">
                  <h4 className="text-xl font-bold mb-3 text-white">1. 技術的な証明</h4>
                  <p className="text-gray-300 leading-relaxed">
                    200mを飛ぶためには、空力設計、構造解析、材料選定、製作精度――全てが高度に最適化されている必要があります。
                    <br />
                    <br />
                    プラットフォームから飛び出した瞬間、機体は初速約20km/hで滑空を開始します。その後、重力によって加速しながら、揚力と抗力のバランスを保ち、安定した滑空姿勢を維持しなければなりません。
                    <br />
                    <br />
                    200mという距離は、「偶然飛んだ」では達成できません。緻密な設計と、丁寧な製作、そしてパイロットの操縦技術――全てが揃って初めて実現できる距離です。
                    <br />
                    <br />
                    この目標を達成することで、<span className="font-bold text-white">高校生有志チームでも本格的な航空機を作り、飛ばせることを証明</span>します。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-l-4 border-[#2080d0]">
                  <h4 className="text-xl font-bold mb-3 text-white">2. 安全性への責任</h4>
                  <p className="text-gray-300 leading-relaxed">
                    鳥人間コンテストは、10mの高さから人を乗せた機体を飛ばす競技です。パイロットの命を預かる以上、安全性は何よりも優先されなければなりません。
                    <br />
                    <br />
                    200mという目標を掲げることで、私たちは「ただ飛べばいい」という考えを排除します。
                    <br />
                    <br />
                    安定した滑空を200m維持するためには：
                    <br />
                    ・想定荷重の1.5倍以上の強度試験
                    <br />
                    ・完成機体全体での荷重試験
                    <br />
                    ・本番前のテストフライト
                    <br />
                    ・緊急脱出訓練
                    <br />
                    <br />
                    これら全ての安全対策を徹底的に行う必要があります。
                    <br />
                    <br />
                    <span className="font-bold text-white">「飛ばす」ことよりも「安全に帰る」ことを、最優先します。</span>
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-l-4 border-[#0050a7]">
                  <h4 className="text-xl font-bold mb-3 text-white">3. 次世代への希望</h4>
                  <p className="text-gray-300 leading-relaxed">
                    高校生有志チームが初年度で200mを飛ぶ――この事実は、同世代・次世代に大きな影響を与えます。
                    <br />
                    <br />
                    「学校の承認が得られなくても、挑戦できる」
                    <br />
                    「高校生でも、本格的な航空機を作れる」
                    <br />
                    「仲間と力を合わせれば、不可能を可能にできる」
                    <br />
                    <br />
                    この3つのメッセージを、飛行距離という形で証明したいのです。
                    <br />
                    <br />
                    日本の航空産業は深刻な人材不足に直面しています。経済産業省の調査によれば、航空関連企業の67%が「必要な人材を確保できていない」と回答しています。
                    <br />
                    <br />
                    この課題の根本には、「中高生の段階で航空への興味が失われる」という構造的な問題があります。
                    <br />
                    <br />
                    <span className="font-bold text-white">200mという明確な目標を達成することで、私たちは同世代・次世代に「自分にもできるかもしれない」という希望を届けます。</span>
                    <br />
                    <br />
                    それが、日本の空の未来を支えることにつながると、私たちは信じています。
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20">
                  <p className="text-2xl font-bold text-white mb-4">
                    2026年7月、琵琶湖の空で
                  </p>
                  <p className="text-xl text-gray-200">
                    私たちは200m飛びます。
                  </p>
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
                    学校チームの断念
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    全ての始まりは2024年の鳥人間コンテストでとある高校生チームが鳥人間コンテスト人力プロペラ機部門に挑んだことです。大いに影響された現代表の入山が、12月に在籍する高校の部活動として鳥人間コンテストに出場するための同好会を結成しました。
                    <br />
                    <br />
                    しかし、学校側から「結成初年度で信用がない」「一部活にだけ資金集めを許可できない」といった理由から出場を認可されず、断念を余儀なくされました。ですが、「空を飛びたい」という夢を諦めることはできませんでした。
                    <br />
                    <br />
                    学校側の判断を、私たちは責めることはできません。前例のない活動に対して慎重になるのは、当然のことです。
                    <br />
                    <br />
                    しかし同時に、こう思いました。
                    <br />
                    <br />
                    「学校の承認が得られないなら、学校の外で挑戦すればいい」<br />
                    「前例がないなら、私たちが前例になればいい」
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
                    どのようにすれば学校から離れても鳥人間コンテストに出場できるか悩んでいたところ、偶然知人に紹介され現ブランディング担当の野村と出会いました。
                    <br />
                    <br />
                    話してすぐに意気投合し、ともにSOARAとして有志のチームを結成し、資金、場所、人材全てを自分たちで確保することを決意しました。その後入山の中学時代の同級生だった優秀なエンジニアである現主任設計の中嶋を勧誘し、この3人でチームが始まりました。
                    <br />
                    <br />
                    その後も、SNS、イベント、友人の紹介を通じて、個性豊かなメンバーが集まり続けました。
                    <br />
                    <br />
                    現在のSOARAは：<br />
                    ・メンバー数：21名<br />
                    ・出身校：9校（東京7校、山口1校、アメリカ1校）<br />
                    ・専門分野：航空工学、機械工学、電気電子、広報、経営
                    <br />
                    <br />
                    学校も、住む場所も、得意分野もバラバラ。でも、「空を飛びたい」という情熱だけは同じ。
                    <br />
                    <br />
                    この多様性こそが、SOARAの最大の強みです。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#0050a7]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    世界との繋がり
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    入山は2025年7月、アメリカの大学にてエンジニアリングのサマープログラムに参加していました。現地で出会った友人に、ふとどういう活動をしているのか聞かれ「Birdman
                    Rally」と答えるときょとんとした顔をされました。その瞬間ようやく鳥人間が日本特有のものであることを思い出しました。
                    <br />
                    <br />
                    そこでどのような大会であるかを教えると、曰くこんな素晴らしい大会があるとは、もっと早く知りたかった、と驚かれたので色々な友人に伝えて回ることにしました。結果はとても好評で、中にはSOARAに加入してくれる人やアメリカでチームを立ち上げようかと真剣に考えてくれる人まで出てきました。
                    <br />
                    <br />
                    この反応から、私たちは国際的に鳥人間コンテストの知名度を高めることができれば大会の更なる発展に寄与できると考え、SOARAでは積極的な海外への広報活動及び勧誘を行っています。
                  </p>
                </div>
              </div>
            </section>

            <section id="uniqueness">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                SOARAの独自性
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                SOARAは、他の鳥人間チームとは異なる、3つの独自性を持っています。
              </p>
              <div className="space-y-12">
                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#369bff]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    1. 学校の枠を超えた有志チーム
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    従来の鳥人間チームは、大学・高専の部活動が中心です。SOARAは、複数の学校から有志が集まる日本初の形態。
                    <br />
                    <br />
                    これにより：<br />
                    ・異なる学校の知識・技術を結集できる<br />
                    ・部活動の制約（予算、時間、承認）に縛られない<br />
                    ・本当に情熱のあるメンバーだけが集まる
                    <br />
                    <br />
                    という利点があります。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#2080d0]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    2. 国際性
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    SOARAには、アメリカ在住のメンバーも参加しています。設計会議はオンラインで行い、国境を越えて協働しています。
                    <br />
                    <br />
                    また、英語での情報発信も積極的に行い、鳥人間コンテストの魅力を世界に伝えています。
                    <br />
                    <br />
                    この国際性が、SOARAを「日本のチーム」ではなく「世界を目指すチーム」にしています。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#0050a7]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    3. 「見える化」へのこだわり
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    多くのチームが大会当日のフライトに注力する中、SOARAは「製作過程そのもの」を発信することに力を入れています。
                    <br />
                    <br />
                    ・YouTube：週1本の技術解説・製作ドキュメンタリー<br />
                    ・SNS：週3回の進捗報告・技術紹介<br />
                    ・イベント：積極的な出展と交流
                    <br />
                    <br />
                    これにより：<br />
                    ・一般の人に鳥人間の技術的凄さを伝える<br />
                    ・同世代に「自分にもできる」という希望を与える<br />
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