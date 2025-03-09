import { NextResponse, NextRequest } from "next/server"
import connect from "@/lib/database/connect"
import Product, { IProduct } from "@/lib/models/Product"

await connect()

export async function GET(req: Request) {
    try {
        const id = new URL(req.url).searchParams.get("id")

        if (!id) {
            return NextResponse.json({
                message: "Not found!"
            }, {
                status: 404
            })
        }

        const product = await Product.findById(id)
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ message: "Success!", product })

    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, {
            status: 500,
        })
    }
}


export async function POST(req: Request) {
    try {
        const product: IProduct = await req.json();

        const newProduct = await Product.create(product)

        if (!newProduct) {
            return NextResponse.json({
                message: "Server can't create product sorry!"
            })
        }

        return NextResponse.json({
            message: "Product created",
            product: newProduct
        }, {
            status: 201
        })

    } catch (error) {
        return NextResponse.json({ error_message: 'Error adding product', error }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');


    const productinfo = await req.json();

    if (!id) {
        return NextResponse.json({ error: 'ID parameter is missing' }, { status: 400 });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                $set: productinfo
            },
            { new: true }
        );

        if (!updatedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Product updated successfully', product: updatedProduct }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating product' }, { status: 500 });
    }
}


export async function DELETE(req: Request) {
    try {
        const url = new URL(req.url)
        const id = url.searchParams.get("id")
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, {
            status: 500,
        })
    }
}

