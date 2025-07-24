import React from 'react'
import PageFooter from '../../components/PageFooter'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">About Us<br>
        </br>〜なぜ、鳥人間なのか？〜</h1>
        
        <div className="space-y-12">          
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-200">Our Target</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              私たちの最大の目標は、万全の状態でプラットホームに立ち、事故を起こさずに湖岸に帰ってくることです。何百メートル飛べる機体、美しく飛ぶ機体を作りたいという意気もありますが、それよりもパイロットの安全性を第一にします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-200">The Reason</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              過去高校生として鳥人間コンテストに出場した団体は多くなく、それも殆どが高専や工業高校の生徒です。100m以上の記録を残したチームとなるとかなり限られます。私たちが最終的に目指すのは普通科の高校生として鳥人間コンテストに出場し、100m以上の滑空を記録することです。鳥人間コンテストの48年に渡る歴史に新たな1ページを刻むことができれば幸いです。
            </p>
          </section>
        </div>
      </div>
      </div>
      
      <PageFooter />
    </div>
  )
}

export default AboutPage