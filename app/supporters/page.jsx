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
              <h3 className="text-2xl font-bold text-white mb-6">東京理科大学鳥人間サークル鳥科 様</h3>
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
              SOARAは、前例のない有志高校生チームとして鳥人間コンテストに挑み、またその過程でものづくりの面白さを同・次世代に広めることを目指し、活動しています。<br />
              しかしこれらの実現には、高額な開発・製作資金、設計・試作における技術的なサポートなど、高校生だけでは困難なことが多数存在しており、多くの方々のご支援が必要となります。<br />
              私たちの目指す夢と目標にご共感いただいた皆さまからのご支援を、心よりお待ちしております。<br />
              何卒よろしくお願い申し上げます。
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