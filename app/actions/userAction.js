"use server"

import Razorpay from "razorpay"
import Payment from "../models/payment"
import connectDB from "../db/connectDb"
import mongoose from "mongoose"
import Username from "../[username]/page"
import User from "../models/user"
import payment from "../models/payment"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    //fetch the secret of the user who is getting the secret
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret
    const id = user.razorpayid

    var instance = new Razorpay({ key_id: id, key_secret: secret })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object that shows the pending payment in the database

    await Payment.create({ oid: x.id, amount: (amount / 100), to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x;
}

export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username })
    if (!u) {
        return null;
    }
    const user = u.toObject({ flattenObjectIds: true });
    //Ensure all internal Mongoose symbols are gone
    return JSON.parse(JSON.stringify(user));
}

export const fetchPayments = async (username) => {
    await connectDB();
    //fint all payments sorted by decreasing order of amount and flatten object
    let p = await payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean()
    //Convert to plain objets (specifically fixing the _id and dates)
    const plainPayments = p.map(payment => ({
        ...payment,
        _id: payment._id.toString(), // Convert ObjectId to String
        createdAt: payment.createdAt.toISOString(),
        updatedAt: payment.updatedAt.toISOString(),
    }));

    return plainPayments;


}
export const updateProfile = async (data, oldUsername) => {
    await connectDB();
    let ndata = Object.fromEntries(data)
    //If the user is being updated , check if it already exists
    if (oldUsername != ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "username already exists" }

        }
        await User.updateOne({email: ndata.email}, ndata)
        //Now update all the username in the Payments table
        await Payment.updateMany({ to_user: oldUsername }, { to_user: ndata.username })
    }
    else{
        return User.updateOne({ email: ndata.email }, ndata)
    }
    

}

