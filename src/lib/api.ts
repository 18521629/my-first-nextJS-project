import axios from "axios";

export async function getDetailProduct (slug: string) {
    try {
        const res = await axios.get(`/api/get-device-detail?device-slug=${slug}`);
        const data = await res.data;
        console.log("getDetailProduct success: ", data);
        return data;
    } catch (error) {
        console.log("getDetailProduct error: ", error);
        return null
    }
}

export async function sendRating (slug: string, numRate: number) {
    try {
        const res = await axios.post(`/api/post-rate`, {
            slug, numRate
        });
        const data = await res.data;
        console.log("sendRating success: ", data);
        return data;
    } catch(error){
        console.log("sendRating error: ", error);
        throw error;
    }
}
