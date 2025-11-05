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

            {/* Vision・Mission・Values */}
            <section className="relative bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] rounded-t-lg"></div>
              <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
                Vision・Mission・Values
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{contentData.about.vision.title}</h3>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    {contentData.about.vision.content}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{contentData.about.mission.title}</h3>
                  <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                    {contentData.about.mission.content}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Values（価値観）</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {contentData.about.values.map((value, index) => (
                      <div
                        key={index}
                        className={`relative bg-gray-800/50 p-4 rounded border-l-4 border-[#369bff] ${
                          index === contentData.about.values.length - 1 ? 'md:col-span-2' : ''
                        }`}
                      >
                        <h4 className="font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">
                          {value.number}. {value.title}
                        </h4>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Our Motivation */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                {contentData.about.motivation.title}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {contentData.about.motivation.content}
              </p>
            </section>

            <section id="goals">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                私たちが掲げる目標と、その背景にあるもの
              </h2>
              <div className="space-y-16">
                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#369bff]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    第48回鳥人間コンテストに出場し、一切の事故なく、無事に湖岸に帰る
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    私たちのスローガンである「責任あるものづくり」を証明するためには、もちろん無事故で飛行を終えることが絶対条件です。設計面でも、構造面でも、操縦面でも、事故を起こしうる可能性を可能な限り排除します。
                    <br />
                    <br />
                    私たちは初年度のチームであり、経験豊富なチームと比べて設計・製作の精度で劣る部分があることは否めません。
                    <br />
                    <br />
                    だからこそ、人一倍「安全第一」を徹底します。
                    <br />
                    <br />
                    ・桁試験：想定荷重の1.5倍以上で強度確認<br />
                    ・荷重試験：完成機体全体での構造検証<br />
                    ・テストフライト：本番前の実飛行テスト<br />
                    ・緊急脱出訓練：万が一に備えたパイロット訓練
                    <br />
                    <br />
                    「飛ばす」ことよりも「安全に帰る」ことを、最優先します。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#2080d0]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    安定した飛行をし、The Fresh Birdman賞を獲得する
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Fresh
                    Birdmanとは、活躍めざましい出場3回以内のチームに贈られる賞です。私たちのフライトが人々の記憶に刻まれなければ、残り２つの私たちの目標が達成されることはないと考えています。また、高校生の有志チームが出場初年度で活躍することで私たちの可能性と情熱の強さを伝えたいという思いがあるからです。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#0050a7]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    中高生時代から航空分野に関わることで、日本の航空産業の未来を切り開く
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    実際、航空宇宙産業は深刻な人材不足に直面しています。
                    <br />
                    <br />
                    経済産業省の調査によれば、航空関連企業の67%が「必要な人材を確保できていない」と回答しています。
                    <br />
                    <br />
                    この課題の根本には、「中高生の段階で航空への興味が失われる」という構造的な問題があります。
                    <br />
                    <br />
                    SOARAは、この問題に正面から取り組みます。
                    <br />
                    <br />
                    高校生が実際に航空機を作り、飛ばす姿を発信することで、同世代・次世代に「自分にもできるかもしれない」という希望を与えたいのです。
                    <br />
                    <br />
                    未来を拓く鍵である情熱を絶やさないために、SOARAは中高生が自由に夢を描き、それを現実にする場でありたいと考えています。部活や受験勉強なども、もちろん人生においてとても重要です。SOARAはそれらを代替するのではなく、並列の存在であるべきだと私たちは考えます。
                  </p>
                </div>

                <div className="relative bg-gray-800 p-6 rounded-lg border-t-2 border-[#1868c0]">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    鳥人間コンテストの世界的な知名度を上げる
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    鳥人間コンテストは日本では高い知名度を誇りますが、世界的にはほとんど知られていません。
                    <br />
                    <br />
                    代表の入山がアメリカのサマープログラムで「Birdman Rally」について話したとき、多くの友人が「そんな素晴らしい大会があるのか！」と驚きの反応を示しました。
                    <br />
                    <br />
                    中には「自分の国でもチームを作りたい」と言ってくれる人まで現れました。
                    <br />
                    <br />
                    この経験から、私たちは確信しました。鳥人間コンテストの魅力は、国境を越えて通じる、と。
                    <br />
                    <br />
                    SOARAは、英語での情報発信、海外イベントへの出展、国際メンバーの受け入れを通じて、鳥人間コンテストを世界に広めます。
                    <br />
                    <br />
                    いつか、海外チームも参加する国際大会になる日を夢見ています。
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