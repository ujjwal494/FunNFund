"use client"
import React, { useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        document.title = "Login - Fun&Fund!"
        if (session) {
            router.push('/dashboard')
        }
    }, [session, router])

    const socialProviders = [
        { name: 'Google', id: 'google', color: 'hover:border-blue-500', icon: (
            <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.32-1.92 4.36-1.04 1.04-2.6 1.92-5.92 1.92-5.4 0-9.84-4.4-9.84-9.8s4.44-9.8 9.84-9.8c2.92 0 5.12 1.12 6.88 2.8l2.32-2.32C19.04 1.12 16.12 0 12.48 0 5.6 0 0 5.6 0 12.4s5.6 12.4 12.48 12.4c3.68 0 6.48-1.2 8.64-3.48 2.24-2.24 3.12-5.4 3.12-8.04 0-.64-.04-1.24-.12-1.84h-11.64z"/>
            </svg>
        )},
        { name: 'Github', id: 'github', color: 'hover:border-purple-500', icon: (
            <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
        )},
        { name: 'Twitter', id: 'twitter', color: 'hover:border-blue-400', icon: (
             <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
             </svg>
        )}
    ]

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-[#111] border border-gray-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 blur-[80px] rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/10 blur-[80px] rounded-full"></div>

                <div className="relative">
                    <h2 className="text-center text-3xl font-black text-white tracking-tight">
                        Login to <span className="text-orange-500">Fun&Fund!</span>
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Choose your preferred way to continue
                    </p>
                </div>

                <div className="mt-8 space-y-4 relative">
                    {socialProviders.map((provider) => (
                        <button
                            key={provider.id}
                            onClick={() => signIn(provider.id)}
                            className={`flex items-center justify-center w-full bg-[#0a0a0a] border border-gray-800 text-white px-6 py-4 rounded-2xl text-sm font-bold transition-all transform hover:scale-[1.02] hover:bg-[#151515] ${provider.color} active:scale-95 shadow-lg`}
                        >
                            {provider.icon}
                            <span>Continue with {provider.name}</span>
                        </button>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                        New to the platform?
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to automatically create your creator profile.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login