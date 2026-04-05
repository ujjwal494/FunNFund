"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchuser, fetchPayments, initiate } from '@/app/actions/userAction';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
    const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") === "true") {
            toast.success('🎉 Payment Succeeded! Thank you for the support.', {
                position: "top-center",
                autoClose: 5000,
                theme: "dark",
                transition: Bounce,
            });
        }
    }, [searchParams])

    const getData = async () => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayment = await fetchPayments(username)
        setPayments(dbpayment)
    }

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "Fun&Fund!",
            "description": `Supporting @${username}`,
            "image": currentUser.profilepic,
            "order_id": orderId,
            "handler": async function (response) {
                const formData = new FormData();
                formData.append("razorpay_payment_id", response.razorpay_payment_id);
                formData.append("razorpay_order_id", response.razorpay_order_id);
                formData.append("razorpay_signature", response.razorpay_signature);

                const res = await fetch("/api/razorpay", {
                    method: "POST",
                    body: formData,
                });

                const data = await res.json();

                if (data.success) {
                    window.location.href = data.redirectUrl;
                } else {
                    toast.error("Payment verification failed");
                }
            },
            "theme": { "color": "#f97316" } 
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <div className="bg-[#050505] min-h-screen text-white pb-20">
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

            {/* Cover image section */}
            <div className='cover w-full relative'>
                
                <img className='object-cover w-full h-96' src={currentUser.coverpic} alt="" />
                <div className='absolute right-[39.5%] md:right-[47.5%] -bottom-10 border-2 border-white h-20 rounded-full'>
                    <img className='rounded-full object-contain' src={currentUser.profilepic} width={80} height={80} alt="" />
                </div>
            </div>

            {/* Creator Info */}
            <div className='info flex justify-center items-center mt-12 mb-10 flex-col gap-1'>
                <div className='text-lg font-bold'>@{username}</div>
                <p className='text-gray-400 text-lg'>Helping {currentUser.name || username} create more magic</p>
                <div className='flex gap-4 mt-2 text-sm font-medium'>
                    <span className="bg-[#111] border border-gray-800 px-4 py-1 rounded-full text-orange-500">
                        {payments.length} Contributions
                    </span>
                    <span className="bg-[#111] border border-gray-800 px-4 py-1 rounded-full text-green-400">
                        ₹{payments.reduce((a, b) => a + b.amount, 0)} Raised
                    </span>
                </div>

            </div>

    
            <div className="container mx-auto mt-16 px-4 md:px-10 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 h-[500px] flex flex-col">
                        <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
                            Recent Supporters
                        </h2>
                        <div className="overflow-y-auto pr-2 flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#0a0a0a]
                            [&::-webkit-scrollbar-thumb]:bg-orange-500
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:border
                            [&::-webkit-scrollbar-thumb]:border-gray-800
                            [scrollbar-width:thin]
                            [scrollbar-color:black_#111]">
                            {payments.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500 italic">
                                    No support yet. Be the first!
                                </div>
                            ) : (
                                payments.map((p) => (
                                    <div key={p._id.toString()} className='flex gap-4 p-4 bg-[#0a0a0a] rounded-2xl border border-gray-800 hover:border-orange-500/30 transition-all'>
                                        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-xl">☕</div>
                                        <div>
                                            <p className='font-bold text-gray-200'>
                                                {p.name} <span className="text-orange-500 font-black ml-1">₹{p.amount}</span>
                                            </p>
                                            <p className='text-gray-400 text-sm mt-1 italic'>"{p.message}"</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Payment box */}
                    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 flex flex-col">
                        <h2 className='text-2xl font-bold mb-6'>Send some <span className="text-orange-500">Love</span></h2>
                        <div className='space-y-4'>
                            <input
                                type="text"
                                name='name'
                                required
                                onChange={handleChange}
                                value={paymentform.name}
                                placeholder='Your Name'
                                className='w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none'
                            />
                            <textarea
                                name='message'
                                onChange={handleChange}
                                required
                                value={paymentform.message}
                                placeholder='Message (Min 4 chars)'
                                rows="3"
                                className='w-full bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none resize-none'
                            />
                            <div className='flex gap-3'>
                                <input
                                    type="number"
                                    name='amount'
                                    onChange={handleChange}
                                    value={paymentform.amount}
                                    placeholder='Amount'
                                    className='flex-1 bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 outline-none'
                                />
                                <button
                                    onClick={() => pay(Number.parseInt(paymentform.amount * 100))}
                                    disabled={!paymentform.name || paymentform.message.length < 4 || !paymentform.amount}
                                    className="px-8 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-800 disabled:text-gray-500 text-black font-black rounded-xl transition-all"
                                >
                                    PAY
                                </button>
                            </div>
                        </div>

                        {/*Quick pay*/}
                        <div className='mt-10'>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Quick Support</p>
                            <div className='grid grid-cols-3 gap-3'>
                                {[10, 20, 50].map((val) => (
                                    <button
                                        key={val}
                                        onClick={() => pay(val * 100)}
                                        className='py-3 bg-[#1a1a1a] border border-gray-800 rounded-xl hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all font-bold'
                                    >
                                        ₹{val}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default PaymentPage;
