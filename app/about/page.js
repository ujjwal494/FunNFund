import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen pb-20 font-sans">
      {/* 1. Hero Section with Brand Gradient */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Built for <br />
            <span className="bg-gradient-to-r from-orange-500 to-rose-400 bg-clip-text text-transparent">
              Independent Creators
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Welcome to <span className="text-white font-semibold italic">Fun&Fund!</span> 
            We've stripped away the complexity of traditional crowdfunding. No algorithms, no middle-men—just a direct, beautiful way to connect with your true fans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(249,115,22,0.3)]">
              Start Your Page
            </button>
            <button className="bg-[#111] border border-gray-800 hover:bg-gray-800 text-white px-10 py-4 rounded-full font-bold transition-all">
              Explore Creators
            </button>
          </div>
        </div>
        
        {/* Decorative Brand Glows */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-orange-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-600/5 blur-[150px] rounded-full"></div>
      </section>

      {/* 2. Interactive Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-3xl bg-[#111] border border-gray-800 hover:border-orange-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Hyper-Fast Launch</h3>
              <p className="text-gray-400 leading-relaxed">
                Go from idea to live campaign in under 5 minutes. Our interface 
                removes the technical hurdles so you can focus on your craft.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-3xl bg-[#111] border border-gray-800 hover:border-orange-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Direct Connection</h3>
              <p className="text-gray-400 leading-relaxed">
                Build a community that you own. No algorithms, no gatekeepers. 
                Just you and your most dedicated supporters, forever.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-3xl bg-[#111] border border-gray-800 hover:border-orange-500/50 transition-all duration-500">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <svg className="w-8 h-8 text-orange-500 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Platform Fees</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe creators should keep their earnings. We charge 0% platform fees, 
                ensuring 100% of fan support reaches you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The "Why Fun&Fund" Section */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-rose-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#111] rounded-3xl aspect-video flex items-center justify-center border border-gray-800 overflow-hidden">
                <div className="text-orange-500/10 font-black text-9xl select-none italic tracking-tighter">F&F</div>
                <div className="absolute inset-0 flex items-center justify-center">
                     <p className="bg-gray-900/90 px-6 py-3 rounded-full border border-gray-700 text-sm font-bold text-orange-500">
                       Platform_Preview.v1
                     </p>
                </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Designed for the <span className="text-orange-500 italic">Creator's Economy</span></h2>
            <div className="space-y-6">
              {[
                { title: "Transparent Earnings", desc: "No hidden charges or complex payout math." },
                { title: "Real-time Support", desc: "Get notified the second a fan supports your work." },
                { title: "Your Brand, Your Rules", desc: "Customize your page to match your aesthetic." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 mt-1 flex items-center justify-center text-black text-[10px] font-bold">✓</div>
                  <p className="text-gray-300"><span className="text-white font-bold">{item.title}:</span> {item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Final CTA */}
      <section className="py-32 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">Ready to fund your <br/> next big project?</h2>
        <button className="px-14 py-6 bg-orange-500 text-black font-black rounded-full hover:bg-orange-400 transition-all transform hover:scale-110 shadow-[0_20px_60px_rgba(249,115,22,0.2)]">
            CREATE YOUR PAGE NOW
        </button>
      </section>
    </div>
  );
};

export default AboutPage;

export const metadata = {
  title: "about us - funNFund",
}