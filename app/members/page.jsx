"use client";

import React from "react";
import Image from "next/image";

const MembersPage = () => {
  // メンバーデータ（仮置き）
  const members = [
    {
      name: "入山輝大",
      englishName: "Terumasa Iriyama",
      school: "開成高等学校",
      grade: "2年",
      position: "代表",
      image: "/images/people/Iriyama.jpg",
      introduction:
        "一度は断たれた鳥人間コンテストに出るという夢を諦めきれず、SOARAを立ち上げました。各地から集った同じ夢を目指す仲間と共に、琵琶湖を目指し邁進しています。",
    },
    {
      name: "高橋知志",
      englishName: "Kazushi Takahashi",
      school: "渋谷教育学園渋谷高等学校",
      grade: "1年",
      position: "副代表 / マーケティング班長",
      image: "/images/people/Takahashi.JPG",
      introduction:
        "多分メンバーの中で一番入った経緯が謎の人間です。交わった道を最後まで歩ききった先に見える景色を求めています。この道を琵琶湖まで繋いで見せます。",
    },
    {
      name: "中嶋幹",
      englishName: "Motoki Nakajima",
      school: "St.Paul's School",
      grade: "11th Grade",
      position: "設計班長",
      image: "/images/people/nakajima.jpg",
      introduction: "現在は学業のためアメリカに滞在していますが、リモートで積極的に設計班長として機体設計を主導しています。幼い頃からエンジニアリングに深い情熱を持っており、ソフトウェアとハードウェアが組み合わさって複雑な問題を解決する仕組みに魅了されてきました。",
    },
    {
      name: "菊池嶺志",
      englishName: "Reishi Kikuchi",
      school: "角川ドワンゴ学園S高等学校",
      grade: "3年",
      position: "空力設計",
      image: "/images/people/Kikuchi.jpg",
      introduction: "大学進学後に滑空機製造を考えていたところでこのプロジェクトを知り、即断で飛び入り参加しました。航空機の操縦やシミュレーションに関してはある程度の実践知がある一方、工学は形だけ知っている状態なので、ここで創りながら学んでいきたいです。",
    },
    {
      name: "和田悠希",
      englishName: "Yuki Wada",
      school: "開成高校",
      grade: "1年",
      position: "製作班長",
      image: "/images/people/wada.jpg",
      introduction: "中学生の時に見た鳥人間コンテストに憧れてチームに入りました。",
    },
    {
      name: "Shawn Lian",
      englishName: "ショーン・リアン",
      school: "Seven Lakes High School",
      grade: "11th Grade",
      position: "設計班",
      image: "/images/people/Shawn.png",
      introduction: "当两位天才相遇时，他们必须结合彼此的想法，像志同道合的人一样，通过克服挑战取得进步，才能获得回报。在前往琵琶湖的旅途中，我们结识了许多新朋友，我们的团队将真正诠释“鸟人”的真谛。",
    },
    {
      name: "越智玲斗",
      englishName: "Reito Ochi",
      school: "広尾学園高校インターナショナルコース",
      grade: "2年",
      position: "マーケティング班 / ソフトウェア",
      image: "/images/people/Ochi.jpeg",
      introduction:
        "I do IT related stuff such as creating AIs and competitive programming as a hobby. I also love to play/create games, and do a little bit of basketball.",
    },
    {
      name: "服部明人",
      englishName: "Akito Hattori",
      school: "青稜高等学校",
      grade: "2年",
      position: "グラフィックデザイナー / 電装設計",
      image: "/images/unknown.png",
      introduction: "趣味の多さなら負けません。自分のできることを最大限頑張ってチームに貢献します。",
    },
    {
      name: "服部裕斗",
      englishName: "Yuto Hattori",
      school: "-",
      grade: "大学1年",
      position: "パイロット / メンター",
      image: "/images/unknown.png",
      introduction:
        "高校生ではないですが、チームで完成させた機体の性能を最大まで引き出せるよう頑張ります。",
    },
    {
      name: "野村恭平",
      englishName: "Kyohei Nomura",
      school: "山口県立山口高等学校",
      grade: "2年",
      position: "ブランディング",
      image: "/images/people/Nomura.jpg",
      introduction: "",
    },
    {
      name: "Daniel Kosukhin",
      englishName: "ダニエル・コスキン",
      school: "New York",
      grade: "11th Grade",
      position: "ソフトウェア",
      image: "/images/people/danny.jpg",
      introduction: "",
    },
    {
      name: "鈴木雄智",
      englishName: "Takemasa Suzuki",
      school: "筑波大学附属駒場高等学校",
      grade: "2年",
      position: "製作班",
      image: "/images/people/suzuki.jpg",
      introduction: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      {/* ページ上部のアクセントライン */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#369bff] to-[#0050a7]"></div>

      <div className="flex-grow py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* ページタイトル */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-b from-[#369bff] to-[#0050a7] bg-clip-text text-transparent">
            Members
          </h1>
          <p className="text-center text-gray-400 mb-16">メンバー紹介</p>

          {/* メンバーカードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-[#369bff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#369bff]/10"
              >
                {/* 顔写真（四角く縁取り） */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40 rounded-lg overflow-hidden border-2 border-[#369bff]/50">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                </div>

                {/* 役職バッジ */}
                <div className="flex justify-center mb-3">
                  <span className="px-4 py-1 bg-gradient-to-r from-[#369bff] to-[#0050a7] text-white text-sm font-semibold rounded-full">
                    {member.position}
                  </span>
                </div>

                {/* 氏名 */}
                <h2 className="text-2xl font-bold text-center mb-1">
                  {member.name}
                </h2>
                <p className="text-gray-400 text-center mb-4">
                  {member.englishName}
                </p>

                {/* 学校・学年 */}
                <div className="text-center text-sm text-gray-400 mb-4 space-y-1">
                  <p>
                    <span className="text-gray-500">School: </span>
                    {member.school}
                  </p>
                  <p>
                    <span className="text-gray-500">Grade: </span>
                    {member.grade}
                  </p>
                </div>

                {/* 区切り線 */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4"></div>

                {/* 意気込み・自己紹介 */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.introduction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#369bff] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0050a7] rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default MembersPage;

/* ====================================
 * ARCHIVED MEMBERS PAGE
 * ====================================
 *
 * Original members page content archived on 2025-11-05
 * To restore, uncomment the code below and replace the Coming Soon page above
 *
 * -----------------------------------

"use client";

import React, { useState } from "react";
import Image from "next/image";

const MembersPage = () => {
  const [danielLanguage, setDanielLanguage] = useState("japanese");
  const members = [
    {
      name: "入山輝大",
      englishName: "Terumasa Iriyama",
      position: "代表",
      school: "開成高等学校",
      grade: "2年生",
      image: "/images/Iriyama_kari.JPG",
      description:
        "航空宇宙エンジニアを志す開成高等学校2年生。航空機や流体力学の専門知識を深く追求し、流体解析や空力設計の最先端技術を習得している。また、Adobeソフトを駆使したクリエイティブな制作活動も行い、多角的な技術力を持つエンジニアである。\n\nIELTS7.5を取得し、ペンシルヴェニア大学のESAPプログラムに参加するなど、国際的な学術環境での経験も豊富で、グローバルな視点を兼ね備えている。\n\n「開成鳥人間の会」を立ち上げた経験を持ち、解散後もその志を継承。史上初の高校生有志鳥人間チーム「SOARA」のリーダーとしてチームを牽引。高度な技術力と卓越したリーダーシップで、プロジェクトを成功へと導く。",
    },
    {
      name: "中嶋幹",
      englishName: "Motoki Nakajima",
      position: "主任設計",
      school: "St.Pauls School",
      grade: "11th grade",
      image: "/images/Nakajima_kari.jpg",
      description:
        "設計・開発・解析のすべてを高いレベルで自在に操る天才高校生エンジニア。機体設計ではCADモデリングから空力・構造解析までを一手に担い、ソフトウェア開発においてもプログラム作成やタスク管理システム、ウェブサイト構築まで幅広くこなす。設計とコーディング、理論と実装を自由に行き来できる、類まれな才能の持ち主である。\n\nアメリカに留学中ながらも、日本の技術プロジェクトにリモートで深く関わり続け、マサチューセッツ工科大学（MIT）のサマースクールプログラムに参加するなど、その研鑽は留まることを知らない。国境を超えた挑戦は多くの仲間に刺激と信頼をもたらしている。\n\n史上初の高校生有志による鳥人間チーム「SOARA」に加わり、その卓越した設計力と実行力でチームの技術的基盤を支える重要な存在となっている。",
    },
    {
      name: "野村恭平",
      englishName: "Kyohei Nomura",
      position: "ブランディングマネージャー",
      school: "山口県立山口高等学校",
      grade: "2年生",
      image: "/images/Nomura.jpg",
      description:
        "山口県立山口高等学校理数科に在籍し、わずか2週間という短期間で高校生F1チーム「花-SAKURA-Racing」を立ち上げ、プロジェクトマネージャーとして組織の基盤を築き上げた。\n昨年は自身の所属していたオーケストラでの全国大会準優勝を果たし、現在はボウリングで全国大会に出場するなど、多方面で活躍を見せ続けている。こうした経験を活かし、複数の大規模プロジェクトを同時に推進するマネジメント能力を磨き続けている。\n「花-SAKURA-Racing」では日本代表としてSTEM RACING™︎の国際大会に出場予定であり、プロジェクトを通じて教育分野にも深い関心を持っている。特に、地元・山口における教育の不平等性などの課題解決に向けて、プロジェクトを通した積極的なアプローチを行なっている。\nまた、鳥人間チーム「SOARA」には、命をのせた滑空機を中高生が総力を尽くして創り上げるという高い教育的価値に強く共感し、その理念に惹かれて参加した。SOARAでの経験を通じて、技術だけでなく協働の重要性も深く学んでいる。\n多様な背景と経験を武器に、確かな成長を続けている。",
    },
    {
      name: "Daniel Kosukhin",
      englishName: "ダニエル・コスキン",
      position: "ソフトウェアエンジニア",
      school: "Located in New York",
      grade: "11th grade",
      image: "/images/danny.jpg",
      description:
        "無人車両システムまたはロボット工学ソフトウェア開発に関連するインターンシップを探している、情熱的なウェブ開発者兼プログラマー。FIRST Roboticsのリードプログラマーとして活動し、地元のウェブサイト開発クラブにおけるウェブサイト作成の先駆者としての役割を果たしてきた。過去数年間、自律システムや電気部品の分野で働いてきたほか、メカトロニクスに特化した個人ポートフォリオの制作にも取り組んできた。本ウェブサイトの開発も手掛ける。今後のSOARAチームとの協働を楽しみにしています！",
      englishDescription:
        "I'm Daniel Kosukhin, a passionate web developer and programmer looking for an internship related to unmanned vehicle systems or robotics software development. I specialize in FIRST Robotics as a lead programmer and pioneer in the creation of websites at our local website development club. I worked on autonomous systems and electrical components throughout the years, as well as personal portfolios focused on mechatronics. Looking forward to working with Soara in the future!",
    },
    {
      name: "高橋知志",
      englishName: "Kazushi Takahashi",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "越智玲斗",
      englishName: "Reito Ochi",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "鈴木雄智",
      englishName: "Takemasa Suzuki",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "片岡穣",
      englishName: "Jo Kataoka",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "服部明人",
      englishName: "Akito Hattori",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "ショーン・リアン",
      englishName: "Shawn Lian",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "和田悠希",
      englishName: "Yuki Wada",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "服部裕斗",
      englishName: "Yuto Hattori",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
    {
      name: "浅岡晃成",
      englishName: "Kosei Asaoka",
      position: "position",
      school: "school",
      grade: "grade",
      image: "/images/unknown.png",
      description:
        "ここに説明文。プロジェクトにおける役割や専門分野とか、これまでの経験、意欲的な取り組みなど"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">メンバー紹介</h1>

          <div className="space-y-32">
            {members.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full border-4 border-gray-600"
                      sizes="(max-width: 1024px) 256px, 320px"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <h3 className="text-xl text-gray-300 mb-2">
                      {member.englishName}
                    </h3>
                    <div className="inline-block px-4 py-2 text-black rounded-full text-lg font-semibold bg-white mb-3">
                      {member.position}
                    </div>
                    <div className="text-lg text-gray-300">
                      <div>
                        {member.school} / {member.grade}
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                    {member.name === "Daniel Kosukhin" ? (
                      <>
                        {(danielLanguage === "japanese" ? member.description : member.englishDescription)
                          .split("\n\n")
                          .map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        <button
                          onClick={() => setDanielLanguage(danielLanguage === "japanese" ? "english" : "japanese")}
                          className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors"
                        >
                          {danielLanguage === "japanese" ? "See in English" : "日本語で見る"}
                        </button>
                      </>
                    ) : (
                      member.description
                        .split("\n\n")
                        .map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  );
};

export default MembersPage;

 *
 * ==================================== */
