import React from 'react'
import PageFooter from '../../components/PageFooter'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-48 px-6 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-sans font-extrabold text-responsive-lg text-center leading-relaxed">
            私たちの活動には皆様のご支援が不可欠です。<br />
            <br />SOARAはあらゆる形でのご援助を常時募集中ですので、ご興味をお持ちの方は本ページのContactsもしくは各SNSのダイレクトメッセージからご連絡ください。<br />
            <br />よろしくお願いいたします。
          </div>
        </div>
        <div className="pb-24"></div>
      </div>
    </div>
  )
}

export default page