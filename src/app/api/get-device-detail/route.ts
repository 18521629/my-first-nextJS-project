import { NextRequest } from "next/server";
import { MOCK_DATA_HEADSET } from "../devices/headset/route";
import { MOCK_DATA_LAPTOP } from "../devices/laptop/route";
import { MOCK_DATA_PHONES } from "../devices/phone/route";

const ALL_DEVICES = [
    ...MOCK_DATA_HEADSET,
    ...MOCK_DATA_LAPTOP,
    ...MOCK_DATA_PHONES
]

export async function GET (req: NextRequest) {
    const url = new URL(req.url);
    const deviceSlug = url.searchParams.get("device-slug");

    const device = ALL_DEVICES.find((d) => d.slug === deviceSlug)

    if(!device){
        return new Response(JSON.stringify({ error: "Not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
        })
    } else {
        return new Response(JSON.stringify(device), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        })
    }
}