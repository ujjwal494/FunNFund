import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "funNFund | Home",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">

      
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />

        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

       
        <div className="relative mb-8 inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 rounded-full px-5 py-2 text-sm font-semibold text-orange-400 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          0% Platform Fees — Creators Keep Everything
        </div>

        <h1 className="relative text-8xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-5xl">
          <span className="text-white">Have fun</span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-rose-400 bg-clip-text text-transparent">
            and Fund!
          </span>
        </h1>

        <p className="relative text-lg md:text-xl text-gray-500 max-w-xl mb-12 leading-relaxed font-medium">
          The creator economy's new home. Fund your favorite creators directly — no middlemen, no cuts.
        </p>

        <div className="relative flex flex-wrap gap-4 justify-center">
          <Link href="/login">
            <button className="group relative px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)]">
              Get started free
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 py-4 border border-white/10 hover:border-white/30 hover:bg-white/5 text-white font-bold rounded-full text-base transition-all duration-200">
              Learn more
            </button>
          </Link>
        </div>


        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white" />
        </div>
      </section>

      <section className="relative py-32 px-6">

        
        <div className="max-w-5xl mx-auto mb-20">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-orange-500 mb-4">Why funNfund</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Everything you need
            <br />
            to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-rose-400 bg-clip-text text-transparent">
              thrive
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="group relative bg-[#0c0c0c] border border-white/[0.06] hover:border-orange-500/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 group-hover:from-orange-500/5 to-transparent transition-all duration-500" />
            <div className="relative">
              <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight">Fund yourself</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Give your fans a direct and beautiful way to support your work consistently.
              </p>
            </div>
          </div>

          {/* Card 2*/}
          <div className="group relative bg-orange-500 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
            <div className="relative">
              <div className="w-14 h-14 bg-black/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-black/20 rounded-full px-3 py-1 text-xs font-bold text-white mb-3">
                ✦ Most popular
              </div>
              <h3 className="text-xl font-black mb-3 text-black tracking-tight">0% Platform Fees</h3>
              <p className="text-black/70 leading-relaxed text-sm font-medium">
                We believe creators should keep what they earn. You receive 100% of the funds your fans send.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#0c0c0c] border border-white/[0.06] hover:border-orange-500/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 group-hover:from-orange-500/5 to-transparent transition-all duration-500" />
            <div className="relative">
              <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-3 text-white tracking-tight">Instant Payouts</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                No waiting periods. Your funds are transferred to your account the moment they are received.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-orange-500 mb-4">Simple by design</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">3 steps to start earning</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Create your page", desc: "Sign up and set up your creator profile in under 2 minutes." },
              { step: "02", title: "Share your link", desc: "Send your fans to your funNfund page — anywhere, anytime." },
              { step: "03", title: "Get paid instantly", desc: "Fans fund you directly. Money hits your account immediately." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="group flex flex-col gap-4 p-8 rounded-3xl border border-white/[0.06] bg-[#0c0c0c] hover:border-orange-500/30 transition-all duration-300">
                <span className="text-5xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors tracking-tighter leading-none">{step}</span>
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-orange-500" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center text-black">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-black/50 mb-4">Join the movement</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
            Ready to start
            <br />
            your journey?
          </h2>
          <p className="text-xl font-medium mb-12 text-black/60">
            Join thousands of creators who are already earning.
          </p>
          <Link href="/login">
            <button className="group bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#111] transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl">
              Create your Page
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
