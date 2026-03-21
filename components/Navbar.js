"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);

  return (
    <nav className='bg-[#050505]/80 backdrop-blur-md text-white flex justify-between px-6 md:px-12 h-20 items-center sticky top-0 z-50 border-b border-gray-800'>
      <Link href={"/"}>
        <div className="logo font-black text-2xl tracking-tighter flex items-center gap-2">
          Fun&Fund!
        </div>
      </Link>

      <div className='relative flex items-center gap-4'>
        {session && (
          <div className="relative">
            {session && (
              /* This 'relative' wrapper is the key fix */
              <div className="relative">
                <button
                  onClick={() => setShowdropdown(!showdropdown)}
                  onBlur={() => setTimeout(() => setShowdropdown(false), 300)}
                  className="flex items-center gap-2 bg-[#111] hover:bg-[#222] border border-gray-700 py-2 px-4 rounded-full transition-all"
                >
                  <img
                    src={session.user.image || "https://via.placeholder.com/30"}
                    alt="Profile"
                    className="w-6 h-6 rounded-full border border-orange-500"
                  />
                  <span className="font-semibold text-sm hidden md:block text-white">Account</span>
                  <svg className={`w-3 h-3 text-white transition-transform ${showdropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu - Now correctly aligned to the right edge of the button */}
                <div className={`absolute right-0 mt-2 w-48 bg-[#111] border border-gray-800 rounded-2xl shadow-2xl transition-all overflow-hidden z-50 ${showdropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                  <ul className="py-2 text-sm text-white">
                    <li>
                      <Link href="/dashboard" onClick={() => setShowdropdown(false)} className="block px-4 py-3 hover:bg-orange-500 hover:text-black transition-colors">Dashboard</Link>
                    </li>
                    <li>
                      <Link href={`/${session.user.name}`} onClick={() => setShowdropdown(false)} className="block px-4 py-3 hover:bg-orange-500 hover:text-black transition-colors">Your Page</Link>
                    </li>
                    <li>
                      <Link href={`/about`} onClick={() => setShowdropdown(false)} className="block px-4 py-3 hover:bg-orange-500 hover:text-black transition-colors">About Us</Link>
                    </li>
                    <li className="border-t border-gray-800 mt-1">
                      <button onClick={() => { setShowdropdown(false); signOut(); }} className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors">Sign out</button>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className={`absolute right-0 mt-3 w-48 bg-[#111] border border-gray-800 rounded-2xl shadow-2xl transition-all overflow-hidden ${showdropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
              <ul className="py-2 text-sm">
                <li>
                  {/* ADD: onClick={() => setShowdropdown(false)} to the Links as well */}
                  <Link
                    href='/dashboard'
                    onClick={() => setShowdropdown(false)}
                    className="block px-4 py-3 hover:bg-orange-500 hover:text-black transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    onClick={() => setShowdropdown(false)}
                    className="block px-4 py-3 hover:bg-orange-500 hover:text-black transition-colors"
                  >
                    Your Page
                  </Link>
                </li>
                <li className="border-t border-gray-800 mt-1">
                  <button
                    onClick={() => {
                      setShowdropdown(false);
                      signOut();
                    }}
                    className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {!session ? (
          <Link href={"/login"}>
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 active:scale-95 text-sm">
              Log in
            </button>
          </Link>
        ) : (
          <button
            onClick={() => signOut()}
            className="hidden md:block text-red-400 font-medium transition-all duration-300 hover:text-red-500 hover:drop-shadow-[0_0_10px_rgba(239,72,72,0.8)]"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar