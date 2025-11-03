import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed] relative overflow-hidden">
      {/* ページ上部のアクセントライン */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7]"></div>

      <div className="flex-grow py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-16 relative">
            <span className="text-5xl font-bold">About Us</span>
            <br />
            <br />
            <span className="text-3xl font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
              空への情熱で、常識を飛び越える
            </span>
            {/* タイトル下のアクセントライン */}
            <div className="mt-6 mx-auto w-32 h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7]"></div>
          </h1>

          <div className="space-y-24">
            <section>
              <p className="text-gray-300 leading-relaxed text-lg mb-12">
                SOARAは、2025年3月に結成された日本初の高校生有志鳥人間チームです。
                <br />
                <br />
                代表の入山が学校の部活動として鳥人間コンテスト出場を目指すも、「前例がない」「資金調達を認められない」という理由で断念。それでも「空を飛びたい」という夢を諦めきれず、学校の枠を超えて同じ志を持つ仲間を集めました。
                <br />
                <br />
                現在は東京を中心に全国9校から21名が参加し、さらにアメリカからもメンバーが加わっています。
                <br />
                <br />
                私たちは、この挑戦を通じて3つのことを実現します：
                <br />
                <br />
                1. 高校生でも本格的な航空機を作り、安全に飛ばせることを証明する<br />
                2. 中高生が航空分野への情熱を持ち続けるきっかけを作る<br />
                3. 鳥人間コンテストの魅力を世界に発信する
                <br />
                <br />
                SOARAは、単なる機体製作チームではありません。次世代の航空人材を育て、日本の空の未来を拓く「ムーブメント」の始まりです。
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

            <section className="relative bg-gradient-to-br from-[#369bff]/10 via-[#0050a7]/10 to-[#369bff]/5 p-8 rounded-lg border border-[#369bff]/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] rounded-t-lg"></div>
              <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
                Vision・Mission・Values
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Vision（ビジョン）</h3>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    空への情熱で、常識を飛び越える
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Mission（ミッション）</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    学校・年齢・経済的制約という既存の枠を超え、高校生の手で鳥人間コンテストに挑戦する。
                    <br /><br />
                    その過程で生まれる技術・経験・ネットワークを通じて、日本の航空教育とものづくりの新しい可能性を切り拓く。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Values（価値観）</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative bg-gray-800/50 p-4 rounded border-l-4 border-[#369bff]">
                      <h4 className="font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">1. 情熱</h4>
                      <p className="text-gray-300">空への憧れを、行動に変える</p>
                    </div>
                    <div className="relative bg-gray-800/50 p-4 rounded border-l-4 border-[#2080d0]">
                      <h4 className="font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">2. 越境</h4>
                      <p className="text-gray-300">学校・専門・世代の境界を超える</p>
                    </div>
                    <div className="relative bg-gray-800/50 p-4 rounded border-l-4 border-[#0050a7]">
                      <h4 className="font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">3. 挑戦</h4>
                      <p className="text-gray-300">「できない」を「やってみせる」に変える</p>
                    </div>
                    <div className="relative bg-gray-800/50 p-4 rounded border-l-4 border-[#1868c0]">
                      <h4 className="font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">4. 共創</h4>
                      <p className="text-gray-300">異なる力を繋ぎ、共に創る</p>
                    </div>
                    <div className="relative bg-gray-800/50 p-4 rounded md:col-span-2 border-l-4 border-[#369bff]">
                      <h4 className="font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent mb-2">5. 継承</h4>
                      <p className="text-gray-300">知識と可能性を、次世代に繋ぐ</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 text-gray-200 border-l-4 border-[#369bff] pl-4">
                Our Motivation
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                私たちが鳥人間コンテストを選ぶ理由は、単に「空を飛びたい」からではありません。
                <br />
                <br />
                鳥人間コンテストは、10mの高さから人を乗せた機体を飛ばす競技です。パイロットの命を預かる以上、設計の一つひとつ、製作の一工程ひとつに、妥協は許されません。
                <br />
                <br />
                この
                <span className="text-2xl font-bold bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">「責任の重さ」</span>
                こそが、私たちが最も学びたいことです。
                <br />
                <br />
                教科書で学ぶ理論を、実際の機体で応用する。安全性を最優先し、万が一のリスクも排除する。チーム全員で責任を分かち合い、完成を目指す。
                <br />
                <br />
                これは、単なる工作活動ではありません。未来のエンジニアに必要な「技術的責任感」と「倫理観」を、実地で学べる唯一無二の場です。
                <br />
                <br />
                だからこそ、私たちは鳥人間コンテストに挑みます。
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
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
};

export default AboutPage;