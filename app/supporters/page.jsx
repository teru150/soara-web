export default function SupportersPage() {
  return (
    <div className="relative flex flex-col px-6 pb-20 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 soara-grid pointer-events-none" aria-hidden />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-14">
        <header className="rounded-3xl bg-white/90 p-8 shadow-soara ring-1 ring-gray-200">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Supporters
          </p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                ご支援者様のご紹介
              </h1>
              <br/>
              <p className="text-lg text-gray-600">
                チームをご支援いただいている企業・団体様をご紹介いたします。<br/>
                資金面のご支援だけでなく、メンタリング・物品提供・PR連携など様々な形でのご協力を歓迎しております。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-5 py-3 text-base font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
              >
                お問い合わせ
                <span aria-hidden>→</span>
              </a>
              <a
                href="/about#goals"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                目標を見る
              </a>
            </div>
          </div>
        </header>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Special Partner
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                東京理科大学鳥人間サークル鳥科 様
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                東京理科大学鳥人間サークル鳥科は、鳥人間チーム最大規模の160名の部員を擁し、コンテスト出場常連の学生チームです。2025年の第47回大会では準優勝を果たしました。設計・製作のノウハウのご提供、メンタリング、さらにはCFRP桁のご提供に至るまで、全面的にご支援いただいています。
              </p>
              <a
                href="https://x.com/torica_official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0050a7]"
              >
                X（旧Twitter）を見る →
              </a>
            </div>
            <div className="flex w-full max-w-md justify-center rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
              <img
                src="/images/torica_logo.png"
                alt="東京理科大学鳥人間サークル鳥科ロゴ"
                className="h-40 w-40 object-contain"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            ご支援いただきたい内容
          </p>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {[
            {
              title: "技術連携",
              detail: "設計・製作レビュー、材料/設備の提供、メンタリング",
            },
            {
              title: "資金・物品サポート",
              detail: "製作費・渡航費のご支援、工具や機材のご提供",
            },
            {
              title: "広報・コラボ",
              detail: "共同イベント、講演、メディア露出、採用ブランディング",
            },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-gray-700">
            SOARAは、前例のない有志高校生チームとして鳥人間コンテストに挑み、またその過程でものづくりの面白さを同・次世代に広めることを目指して活動しています。<br/>
            しかしこれらの実現には、高額な開発・製作資金、設計・試作における技術的なサポートなど、高校生だけでは困難なことが多数存在しており、<br/>多くの方々のご支援が必要となります。
          </p>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-[#e6f4ff] via-white to-[#f5f7fa] p-8 shadow-soara ring-1 ring-[#369bff]/25">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Contact
              </p>
              <h2 className="text-3xl font-bold text-gray-900">ご相談はこちらから</h2>
              <p className="text-base text-gray-700">
                高校生チームだからこそ学びに真摯で、動きが速いのが強みです。<br/>
                貴社・貴団体の強みと結びつく形での連携をご提案します。
              </p>            
              私たちの目指す夢と目標にご共感いただいた皆さまからのご支援を、心よりお待ちしております。
              <br/>
              何卒よろしくお願い申し上げます。
              <br/>
              
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="text-sm font-semibold text-gray-600">SNS</p>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/soara.hpa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-[#369bff] hover:text-[#0050a7]"
                >
                  <img
                    src="/images/instagram_logo.png"
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                  @soara.hpa
                </a>
                <a
                  href="https://x.com/soara_hpa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-[#369bff] hover:text-[#0050a7]"
                >
                  <img src="/images/x_logo_w.png" alt="X" className="h-4 w-4 invert" />
                  @soara_hpa
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                活動の様子や技術解説を週次で発信予定です。<br/>
                是非フォローをお願いします。
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-gray-200 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-700">
              ご相談はこちらから。フォームまたはEメールでご連絡ください。
            </p>
            <div className="flex flex-wrap items-center gap-3 md:flex-nowrap">
              <a
                href="/contacts"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0050a7] px-4 py-2.5 text-sm font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                お問い合わせフォームへ
              </a>
              <a
                href="mailto:soara.hpa@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#0050a7] ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0050a7]"
              >
                soara.hpa@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
