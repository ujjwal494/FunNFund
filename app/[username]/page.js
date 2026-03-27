import React from 'react'
import PaymentPage from '@/components/paymentPage'
import { notFound } from 'next/navigation'
import connectDB from '../db/connectDb'
import User from "../models/user"

const Username = async ({ params }) => {
  const { username } = await params
  await connectDB()

  const u = await User.findOne({
    username: username
  })


  if (!u) {
    return notFound()
  }

  return <PaymentPage username={username} />
}

export default Username

export async function generateMetadata({ params }) {
  const {username} = await params
  return {
    title: `${username}'s funNfund | support them here`,
  }

}

