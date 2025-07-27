import React from 'react'
import PageFooter from '../../components/PageFooter'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]">
      <div className="flex-grow py-48 px-6 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto">
          <div className="font-sans font-extrabold text-responsive-lg text-center leading-relaxed">
            私たちの活動には皆様のご支援が不可欠です。<br />
            <br />常時、SOARAはスポンサーを募集中ですので、ご興味がある方はContactsもしくはSNSのDMからご連絡ください。<br />
            <br />よろしくお願いいたします。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default page