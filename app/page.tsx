export default function Home() {
  const faqs = [
    {
      q: 'What types of content can I scan?',
      a: 'Blog posts, articles, marketing copy, social media content, and any text-based documents up to 50,000 words.'
    },
    {
      q: 'How accurate is the copyright detection?',
      a: 'Our AI compares your content against millions of published works and trademark databases, flagging similarities with risk scores so you can make informed decisions.'
    },
    {
      q: 'Do I need a lawyer to interpret the results?',
      a: 'No. Each report includes plain-English explanations and actionable recommendations so you can fix issues yourself before publishing.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Content Creators &amp; Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Prevent plagiarism lawsuits{' '}
          <span className="text-[#58a6ff]">before you publish</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Upload your content and get an instant AI-powered report on copyright violations, trademark conflicts, and risk scores — so you publish with confidence, not anxiety.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $8/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[['99%', 'Accuracy rate'], ['2M+', 'Sources checked'], ['< 60s', 'Scan time']].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$8</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to publish safely</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited content scans',
              'Copyright similarity detection',
              'Trademark conflict alerts',
              'Risk score per paragraph',
              'Actionable fix recommendations',
              'PDF & DOCX upload support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started — $8/mo
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} ClearPublish. All rights reserved.
      </footer>
    </main>
  )
}
