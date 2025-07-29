import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-16">
            <span className="text-5xl font-bold">About Us</span>
            <br />
            <br />
            <span className="text-3xl font-bold">
              〜なぜ、鳥人間に挑むのか？〜
            </span>
          </h1>

          <div className="space-y-24">
            <section>
              <p className="text-gray-300 leading-relaxed text-lg mb-12">
                SOARAは、2025年7月に様々な高校から集った高校生たちにより結成された鳥人間コンテスト出場を目指すチームです。
                <br />
                2024年大会にて人力プロペラ機部門を同じ高校生が目指したことに強く触発され、高校生の情熱と可能性を示したいという思いを共有する有志により結成されました。
                <br />
                私たちはこの活動を通じて、単に機体を作り上げて飛ばし、自分たちが楽しみ成長するだけでなく中高生の航空分野への興味をより高め、未来の航空人材を増やすことを目指しています。
                <br />
                また、SOARAが中高生有志チームのモデルケースとして今後より多くの新規チームが生まれることを願っています。
              </p>
              <div className="text-center mt-8 mb-32">
                <a
                  href="#formation"
                  className="inline-block px-8 py-4 bg-gray-600 hover:bg-gray-500 text-white font-medium rounded-lg transition-colors duration-300 hover:shadow-lg"
                >
                  チームについて詳しく見る
                </a>
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-200">
                Our Motivation
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                私たちが複数ある航空系大会の中であえて鳥人間を選ぶ理由、それは
                <br />
                <span className="text-2xl font-bold text-white">
                  「責任あるものづくり」を実践できる
                </span>
                <br />
                からです。
                <br />
                <br />
                鳥人間コンテストは人命を預かる競技であり、安全性が最優先されます。高校生であっても、自分の設計・製作した機体に対して責任を持つことが求められます。この環境こそ、未来のエンジニアに最も必要な「倫理観と技術責任」を実地で学べる場です。
              </p>
            </section>

            <section id="goals">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200">
                私たちが掲げる目標と、その背景にあるもの
              </h2>
              <div className="space-y-16">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    第48回鳥人間コンテストに出場し、一切の事故なく、無事に湖岸に帰る
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    私たちのスローガンである「責任あるものづくり」を証明するためには、もちろん無事故で飛行を終えることが絶対条件です。設計面でも、構造面でも、操縦面でも、事故を起こしうる可能性を可能な限り排除します。できる限りを尽くすものの、熟練のチームさんと比べてどうしても全ての精度が結果的に低くなってしまうことが見込まれるので、その分人一倍最初から安全を重視します。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    安定した飛行をし、The Fresh Birdman賞を獲得する
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    The Fresh
                    Birdmanとは、活躍めざましい出場3回以内のチームに贈られる賞です。私たちのフライトが人々の記憶に刻まれなければ、残り２つの私たちの目標が達成されることはないと考えています。また、高校生の有志チームが出場初年度で活躍することで私たちの可能性と情熱の強さを伝えたいという思いがあるからです。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    中高生時代から航空分野に関わることで、日本の航空産業の未来を切り開く
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    日本の航空産業は今、担い手不足やイノベーションの停滞という課題に直面しています。一方で、小学生の頃に航空や宇宙に興味を持っていた子どもたちは、中学生、高校生になると忙しさに揉まれてその関心を失ってしまいがちです。
                    <br />
                    <br />
                    私たちは、それを「もったいない」と考えます。
                    <br />
                    <br />
                    未来を拓く鍵である情熱を絶やさないために、SOARAは中高生が自由に夢を描き、それを現実にする場でありたいと考えています。
                    部活や受験勉強なども、もちろん人生においてとても重要です。SOARAはそれらを代替するのではなく、並列の存在であるべきだと私たちは考えます。中高生の間も憧れを失わないことが、その後大学、そして社会へと進んでいった際に航空分野を選ぶ理由になり、それがやがて日本の航空産業の未来を拓く一助になると信じているからです。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    鳥人間コンテストの世界的な知名度を上げる
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    空を飛びたいという人の夢の詰まったこの素晴らしい大会は、日本ではとても高い知名度を誇りますが、世界的にはほとんど知られていません。私たちはメンバーの多様な出自を活かして鳥人間コンテストの魅力を世界中に伝え、また海外からのメンバーも迎えています。
                  </p>
                </div>
              </div>
            </section>

            <section id="formation">
              <h2 className="text-2xl font-semibold mb-6 text-gray-200">
                結成の経緯
              </h2>
              <div className="space-y-16">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    学校チームの断念
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    全ての始まりは2024年の鳥人間コンテストでとある高校生チームが鳥人間コンテスト人力プロペラ機部門に挑んだことです。大いに影響された現代表の入山が、12月に在籍する高校の部活動として鳥人間コンテストに出場するための同好会を結成しました。
                    <br />
                    <br />
                    しかし、学校側から「結成初年度で信用がない」「一部活にだけ資金集めを許可できない」といった理由から出場を認可されず、断念を余儀なくされました。ですが、「空を飛びたい」という夢を諦めることはできませんでした。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    特色ある仲間たちとの出会い
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    どのようにすれば学校から離れても鳥人間コンテストに出場できるか悩んでいたところ、偶然知人に紹介され現プロジェクトマネージャーの野村と出会いました。（彼は山口、入山は東京在住であるため、実のところ今日まで一度も直接会ったことはありませんが…）
                    <br />
                    <br />
                    話してすぐに意気投合し、ともにSOARAとして有志のチームを結成し、資金、場所、人材全てを自分たちで確保することを決意しました。その後入山の中学時代の同級生だった優秀なエンジニアである現主任設計の中嶋を勧誘し、この3人でチームが始まりました。
                    <br />
                    <br />
                    その後も個性的な背景を持った加入者は増え続け、現在は私たちの思いと志に共感してくれた14人の仲間たちとともに、鳥人間コンテストに出場するため準備に勤しんでいます。
                  </p>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
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
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
};

export default AboutPage;