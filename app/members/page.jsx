"use client";

import React, { useState } from "react";
import Image from "next/image";
import contentData from "../../data/content.json";

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
    introduction:
      "現在は学業のためアメリカに滞在していますが、リモートで積極的に設計班長として機体設計を主導しています。幼い頃からエンジニアリングに深い情熱を持っており、ソフトウェアとハードウェアが組み合わさって複雑な問題を解決する仕組みに魅了されてきました。",
  },
  {
    name: "菊池嶺志",
    englishName: "Reishi Kikuchi",
    school: "角川ドワンゴ学園S高等学校",
    grade: "3年",
    position: "空力設計",
    image: "/images/people/Kikuchi.jpg",
    introduction:
      "大学進学後に滑空機製造を考えていたところでこのプロジェクトを知り、即断で飛び入り参加しました。航空機の操縦やシミュレーションに関してはある程度の実践知がある一方、工学は形だけ知っている状態なので、ここで創りながら学んでいきたいです。",
  },
  {
    name: "和田悠希",
    englishName: "Yuki Wada",
    school: "開成高等学校",
    grade: "1年",
    position: "製作班長",
    image: "/images/people/wada-new.JPG",
    introduction: "中学生の時に見た鳥人間コンテストに憧れてチームに入りました。",
  },
  {
    name: "水木勢",
    englishName: "Shawn Lian",
    school: "Seven Lakes High School",
    grade: "11th Grade",
    position: "設計班",
    image: "/images/people/Shawn.png",
    introduction:
      "当两位天才相遇时，他们必须结合彼此的想法，像志同道合的人一样，通过克服挑战取得进步，才能获得回报。在前往琵琶湖的旅途中，我们结识了许多新朋友，我们的团队将真正诠释“鸟人”的真谛。",
  },
  {
    name: "越智玲斗",
    englishName: "Reito Ochi",
    school: "広尾学園高校インターナショナルコース",
    grade: "2年",
    position: "マーケティング班 / ソフトウェア",
    image: "/images/people/ochi-aura.jpg",
    altImage: "/images/people/Ochi.jpeg",
    introduction:
      "I do IT related stuff such as creating AIs and competitive programming as a hobby. I also love to play/create games, and do a little bit of basketball.",
  },
  {
    name: "服部明人",
    englishName: "Akito Hattori",
    school: "青稜高等学校",
    grade: "2年",
    position: "グラフィックデザイナー / 電装設計",
    image: "/images/people/hattori.jpg",
    introduction:
      "設計とデザインの両方に関心があり、「考えたものを実際に形にする」ことを大切にしています。3D CADを用いた設計や、3Dプリンター・レーザー加工による制作を通して、構造面とデザイン面の両立を学んできました。SOARAでは、機体設計の一部やグラフィック制作を担当し、チームの挑戦を支える存在でありたいと考えています。",
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
    introduction: "史上初の鳥人間コンテスト高校生有志チーム「SOARA」に参加する運びとなりました！応援の程、どうぞよろしくお願いいたします！！",
  },
  {
    name: "Daniel Kosukhin",
    englishName: "ダニエル・コスキン",
    school: "New York",
    grade: "11th Grade",
    position: "ソフトウェア",
    image: "/images/people/danny.jpg",
    introduction: "I'm Daniel Kosukhin, a passionate web developer and programmer looking for an internship related to unmanned vehicle systems or robotics software development. I specialize in FIRST Robotics as a lead programmer and pioneer in the creation of websites at our local website development club. I worked on autonomous systems and electrical components throughout the years, as well as personal portfolios focused on mechatronics. Looking forward to working with Soara in the future!",
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
  {
    name: "浅岡晃成",
    englishName: "Takemasa Suzuki",
    school: "開成高等学校",
    grade: "2年",
    position: "製作班",
    image: "/images/unknown.png",
    introduction: "小さい時から歴史の授業が好きで、そこから現代史、第二次世界大戦、ミリタリーと流れ、その流れでプラモ作りを趣味としていまして、それが今のポジションに繋がっています。",
  },
];

const MembersPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10">
        <header className="space-y-3 rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Members
          </p>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            多様な背景が一つの翼になる
          </h1>
          <p className="text-lg text-gray-600">
            東京・山口・海外まで、{contentData.meta?.schools ?? 13}校から集まった{contentData.meta?.members ?? 21}名。役割も専門も異なる仲間が、同じ目標に向かって動いています。
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => {
            const displayImage =
              hoveredMember === member.name && member.altImage
                ? member.altImage
                : member.image;
            return (
            <div
              key={member.name}
              className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="mb-4 flex justify-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl ring-2 ring-[#e6f4ff]">
                  <Image
                    src={displayImage}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="rounded-full bg-[#e6f4ff] px-3 py-1 text-xs font-semibold text-[#0050a7]">
                  {member.position}
                </span>
              </div>
              <h2 className="mt-3 text-center text-2xl font-bold text-gray-900">
                {member.name}
              </h2>
              <p className="text-center text-sm text-gray-500">
                {member.englishName}
              </p>
              <div className="mt-3 text-center text-sm text-gray-600">
                <p>{member.school}</p>
                <p>{member.grade}</p>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                {member.introduction || "Coming soon..."}
              </p>
            </div>
            );
          })}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-8 shadow-soara ring-1 ring-[#369bff]/25">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Recruiting
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                ものづくりに挑みたい仲間を募集中
              </h3>
              <p className="text-base text-gray-700">
                設計・製作・電装・マーケティング・映像など、専門を問わず参画できます。
              </p>
            </div>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
            >
              加入・見学のご相談はこちらから
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
