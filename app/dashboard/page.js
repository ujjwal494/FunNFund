"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    
    // Refs for hidden file inputs
    const profileInputRef = useRef(null)
    const coverInputRef = useRef(null)

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } else {
            getData()
        }
    }, [session])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    // Logic to handle local file selection and convert to Base64
    const handleFileChange = (e, field) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setform({ ...form, [field]: reader.result })
                toast.info("Image selected! Don't forget to save.", { theme: "dark", autoClose: 2000 })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (formData) => {
        // We manually append the state values to ensure Base64 strings are included
        const data = new FormData()
        Object.keys(form).forEach(key => data.append(key, form[key]))
        
        await updateProfile(data, session.user.name)
        toast.success('Profile Updated Successfully!', {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <ToastContainer />
            
            <div className='container mx-auto py-12 px-6'>
                <div className="text-center mb-12">
                    <h1 className='text-4xl md:text-5xl font-black mb-4 tracking-tight'>
                        Creator <span className="text-orange-500">Dashboard</span>
                    </h1>
                    <p className="text-gray-400">Manage your profile, branding, and payment integrations</p>
                </div>

                <div className="max-w-3xl mx-auto bg-[#111] border border-gray-800 p-8 rounded-3xl shadow-2xl">
                    <form action={handleSubmit} className="space-y-6">
                        
                        {/* Section: Profile Image with Upload */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-400">Profile Identity</label>
                            <div className="flex flex-col md:flex-row gap-6 items-center bg-[#0a0a0a] p-6 rounded-2xl border border-gray-800">
                                <div 
                                    className="relative group cursor-pointer shrink-0" 
                                    onClick={() => profileInputRef.current.click()}
                                >
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500 bg-[#111] flex items-center justify-center">
                                        {form.profilepic ? (
                                            <img src={form.profilepic} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-gray-600 text-xs">No Image</span>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <span className="text-[10px] font-bold">UPLOAD</span>
                                    </div>
                                    <input type="file" ref={profileInputRef} className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'profilepic')} />
                                </div>
                                <div className="w-full">
                                    <input value={form.profilepic || ""} onChange={handleChange} type="text" name='profilepic' 
                                        className="w-full bg-[#111] border border-gray-800 text-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Or paste Profile Picture URL" />
                                </div>
                            </div>
                        </div>

                        {/* Section: Cover Image with Drag & Drop */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-gray-400">Cover Branding</label>
                            <div 
                                className="relative w-full h-40 rounded-2xl border-2 border-dashed border-gray-800 bg-[#0a0a0a] flex flex-col items-center justify-center group hover:border-orange-500/50 transition-all overflow-hidden cursor-pointer"
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    const file = { target: { files: e.dataTransfer.files } };
                                    handleFileChange(file, 'coverpic');
                                }}
                                onClick={() => coverInputRef.current.click()}
                            >
                                {form.coverpic ? (
                                    <>
                                        <img src={form.coverpic} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                                        <div className="relative z-10 font-bold text-xs bg-black/50 px-4 py-2 rounded-full border border-white/10">Click or Drop to replace cover</div>
                                    </>
                                ) : (
                                    <div className="text-center text-gray-500">
                                        <p className="font-bold text-sm">Drag & Drop or Click to Upload Cover</p>
                                    </div>
                                )}
                                <input type="file" ref={coverInputRef} className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'coverpic')} />
                            </div>
                            <input value={form.coverpic || ""} onChange={handleChange} type="text" name='coverpic' 
                                className="w-full bg-[#0a0a0a] border border-gray-800 text-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Or paste Cover Image URL" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-400">Display Name</label>
                                <input value={form.name || ""} onChange={handleChange} type="text" name='name' id="name" 
                                    className="w-full bg-[#0a0a0a] border border-gray-800 text-white rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Enter name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-400">Email Address</label>
                                <input value={form.email || ""} onChange={handleChange} type="email" name='email' id="email" 
                                    className="w-full bg-[#0a0a0a] border border-gray-800 text-white rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="email@example.com" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-bold text-gray-400">Username</label>
                            <input value={form.username || ""} onChange={handleChange} type="text" name='username' id="username" 
                                className="w-full bg-[#0a0a0a] border border-gray-800 text-white rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                        </div>

                        <div className="p-6 bg-[#1a1a1a] rounded-2xl border border-gray-800 border-l-4 border-l-orange-500">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="text-orange-500"></span> Payment Integration
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="razorpayid" className="block mb-2 text-xs font-bold uppercase text-gray-500">Razorpay ID</label>
                                    <input value={form.razorpayid || ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid" 
                                        className="w-full bg-[#0a0a0a] border border-gray-800 text-white rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="razorpaysecret" className="block mb-2 text-xs font-bold uppercase text-gray-500">Razorpay Secret</label>
                                    <input value={form.razorpaysecret || ""} onChange={handleChange} type="password" name='razorpaysecret' id="razorpaysecret" 
                                        className="w-full bg-[#0a0a0a] border border-gray-800 text-white rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button type="submit" 
                                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-4 rounded-full transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                                SAVE PROFILE SETTINGS
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;