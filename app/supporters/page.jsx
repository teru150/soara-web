import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-48 px-6 min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          {/* Special Partner Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">Special Partner</h2>
            <div className="bg-[#151515] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">東京理科大学鳥人間サークル鳥科</h3>
              <div className="flex gap-8 items-start">
                {/* Logo Space */}
                <a href="https://x.com/torica_official" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-48 h-48 hover:opacity-80 transition-opacity">
                  <img src="/images/torica_logo.png" alt="東京理科大学鳥人間サークル鳥科ロゴ" className="w-full h-full object-contain" />
                </a>
                {/* Description */}
                <div className="flex-1">
                  <p className="text-[#ededed] leading-relaxed">
                    東京理科大学鳥人間サークル鳥科は、鳥人間チーム最大規模の160名の部員を擁し、コンテスト出場常連の学生チームです。<br />
                    私たちSOARAに対し、設計・製作のノウハウのご提供、メンタリング、さらにはCFRP桁のご提供に至るまで、全面的なご支援を賜っております。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsor Recruitment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">ご支援者様の募集</h2>
            <div className="text-[#ededed] leading-relaxed text-lg mb-8">
              SOARAは「鳥人間を通じて同世代・次世代にものづくりへの興味を持ってもらい、未来を拓く」というビジョン、そして空へ挑む夢を掲げて活動しています。<br />
              このビジョンの実現には、高額な開発・製作資金、設計・試作における技術的なサポートなど、学生だけでは賄いきれない多くの支援が必要となります。<br />
              企業・団体の皆さまからのご支援を心よりお待ちしております。私たちと共に、次世代のものづくりを担う人材育成に貢献していただけませんか。
            </div>

            {/* Contact Section */}
            <div className="bg-[#151515] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">お問い合わせ</h3>

              {/* Contact Button */}
              <div className="flex justify-center mb-8">
                <a href="/contacts" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  お問い合わせフォームへ
                </a>
              </div>

              {/* SNS Links */}
              <div className="flex justify-center gap-8">
                <a href="https://www.instagram.com/soara.hpa/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                  <div className="w-16 h-16 mb-2">
                    <img src="/images/instagram_logo.png" alt="Instagram" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-white font-bold">@soara.hpa</span>
                </a>
                <a href="https://x.com/soara_hpa" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                  <div className="w-16 h-16 mb-2">
                    <img src="/images/x_logo_w.png" alt="X (Twitter)" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-white font-bold">@soara_hpa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  )
}

export default page;