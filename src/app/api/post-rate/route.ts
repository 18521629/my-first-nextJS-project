import { NextRequest, NextResponse } from "next/server";

const productRetings: {
    [ slug: string ]: { product: string; numRate: number }
} = {};

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { slug, numRate } = body;

    if(!slug){
        return NextResponse.json(
            { error: "Slug error" },
            { status: 500 }
        )
    }

    if(typeof numRate !== "number" || numRate < 1 || numRate > 5) {
        return NextResponse.json(
            { error: "Please enter number from 1 to 5" },
            { status: 500}
        )
    }

    productRetings[slug] = { product: slug, numRate: numRate }

    return NextResponse.json({
        message: "Rating successfully!",
        data: productRetings[slug]
    })
}