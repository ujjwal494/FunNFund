import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/app/models/payment";
import connectDB from "@/app/db/connectDb";
import Razorpay from "razorpay";
import User from "@/app/models/user";


export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    //check if the razorpayOrderId is present on the server

    let p = await payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: false, message: "Order id not present" })
    }

    //fetch the secret of the user who is getting the payment 
    const user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    //verify payment
    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)

    if (xx) {
        //update the payment status
        const updatedPayment = await payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true })
        return NextResponse.json({
            success: true,
            redirectUrl: `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`,
        });
    }
    else {
        return NextResponse.json("Payment verification failed")
    }
}