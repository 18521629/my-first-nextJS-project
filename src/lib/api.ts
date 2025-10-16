import axios from "axios";

export async function getDetailProduct (slug: string) {
    try {
        const res = await axios.get(`/api/get-device-detail?device-slug=${slug}`);
        const data = await res.data;
        console.log("getDetailProduct success", data);
        return data;
    } catch (error) {
        console.log("getDetailProduct error", error);
        return null
    }
}