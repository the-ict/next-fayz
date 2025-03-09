import { NextResponse } from "next/server"
import Discount from "@/lib/models/Discount"
import connect from "@/lib/database/connect"

await connect()

export async function POST(req: Request) {
    try {
        const discountReq = await req.json()
        const newDiscount = await Discount.create(discountReq)

        if (!newDiscount) {
            return NextResponse.json({
                message: "do not created!"
            }, {
                status: 300
            })
        }

        return NextResponse.json({ message: "Created", discount: newDiscount })
    } catch (error) {
        NextResponse.json({
            error,
        }, { status: 500, })
    }
}


export async function PUT(req: Request) {
    try {
        const id = new URL(req.url).searchParams.get("id")

        console.log("id: ", id)

        const updatedDiscount = await Discount.findByIdAndUpdate(id, {
            $set: await req.json(),
        }, { new: true })

        if (!updatedDiscount) {
            return NextResponse.json({
                message: "do not updated!"
            }, {
                status: 300
            })
        }

        return NextResponse.json({ message: "New Discount!", discount: updatedDiscount })
    } catch (error) {
        NextResponse.json({
            error,
        }, { status: 500, })
    }
}


export async function GET(req: Request) {
    try {
        const allDiscount = await Discount.find()

        return NextResponse.json({ message: "New Discount!", discount: allDiscount })
    } catch (error) {
        NextResponse.json({
            error,
        }, { status: 500, })
    }
}



export async function DELETE(req: Request) {
    try {
        const id = new URL(req.url).searchParams.get("id")

        await Discount.findByIdAndDelete(id)

        return NextResponse.json({ message: "Your discount succussfully deleted!" })
    } catch (error) {
        NextResponse.json({
            error,
        }, { status: 500, })
    }
}
