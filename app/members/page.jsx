import React from 'react'
import Image from 'next/image'
import PageFooter from '../../components/PageFooter'

const MembersPage = () => {
  const members = [
    {
      name: "入山輝大",
      englishName: "Terumasa Iriyama",
      position: "代表",
      school: "開成高等学校",
      grade: "2年生",
      image: "/images/iriyama_kari.JPG",
      description: "航空宇宙エンジニアを志す開成高等学校2年生。航空機や流体力学の専門知識を深く追求し、流体解析や空力設計の最先端技術を習得している。また、Adobeソフトを駆使したクリエイティブな制作活動も行い、多角的な技術力を持つエンジニアである。\n\nIELTS7.5を取得し、ペンシルヴェニア大学のESAPプログラムに参加するなど、国際的な学術環境での経験も豊富で、グローバルな視点を兼ね備えている。\n\n「開成鳥人間の会」を立ち上げた経験を持ち、解散後もその志を継承。史上初の高校生有志鳥人間チーム「SOARA」のリーダーとしてチームを牽引。高度な技術力と卓越したリーダーシップで、プロジェクトを成功へと導く。"
    },
    {
      name: "中嶋幹",
      englishName: "Motoki Nakajima",
      position: "主任設計",
      school: "St.Pauls School",
      grade: "11th grade",
      image: "/images/nakajima_kari.jpg",
      description: "設計・開発・解析のすべてを高いレベルで自在に操る天才高校生エンジニア。機体設計ではCADモデリングから空力・構造解析までを一手に担い、ソフトウェア開発においてもプログラム作成やタスク管理システム、ウェブサイト構築まで幅広くこなす。設計とコーディング、理論と実装を自由に行き来できる、類まれな才能の持ち主である。\n\nアメリカに留学中ながらも、日本の技術プロジェクトにリモートで深く関わり続け、マサチューセッツ工科大学（MIT）のサマースクールプログラムに参加するなど、その研鑽は留まることを知らない。国境を超えた挑戦は多くの仲間に刺激と信頼をもたらしている。\n\n史上初の高校生有志による鳥人間チーム「SOARA」に加わり、その卓越した設計力と実行力でチームの技術的基盤を支える重要な存在となっている。"
    },
    {
      name: "野村恭平",
      englishName: "Kyohei Nomura",
      position: "プロジェクトマネージャー",
      school: "山口県立山口高等学校",
      grade: "2年生",
      image: "/images/Nomura.jpg",
      description: "山口県立山口高等学校理数科に在籍し、わずか2週間という短期間で高校生F1チーム「花-SAKURA-Racing」を立ち上げ、プロジェクトマネージャーとして組織の基盤を築き上げた。\n昨年は自身の所属していたオーケストラでの全国大会準優勝を果たし、現在はボウリングで全国大会に出場するなど、多方面で活躍を見せ続けている。こうした経験を活かし、複数の大規模プロジェクトを同時に推進するマネジメント能力を磨き続けている。\n「花-SAKURA-Racing」では日本代表としてSTEM RACING™︎の国際大会に出場予定であり、プロジェクトを通じて教育分野にも深い関心を持っている。特に、地元・山口における教育の不平等性などの課題解決に向けて、プロジェクトを通した積極的なアプローチを行なっている。\nまた、鳥人間チーム「SOARA」には、命をのせた滑空機を中高生が総力を尽くして創り上げるという高い教育的価値に強く共感し、その理念に惹かれて参加した。SOARAでの経験を通じて、技術だけでなく協働の重要性も深く学んでいる。\n多様な背景と経験を武器に、確かな成長を続けている。"
    }
  ]

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
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Profile Image */}
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

                {/* Member Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <h3 className="text-xl text-gray-300 mb-2">{member.englishName}</h3>
                    <div className="inline-block px-4 py-2 text-black rounded-full text-lg font-semibold bg-white mb-3">
                      {member.position}
                    </div>
                    <div className="text-lg text-gray-300">
                      <div>{member.school} / {member.grade}</div>
                    </div>
                  </div>
                  
                  <div className="text-gray-300 leading-relaxed text-lg space-y-4">
                    {member.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  )
}

export default MembersPage