import { useState } from "react"
import { Label, Input, Button } from "../ui"
export default function WriteComment({
    sendRating
}){
    const [score, setScore] = useState("");

    return(
        <div className="ml-10 md:ml-1">
            <Label htmlFor="rating">Viết đánh giá về sản phẩm này</Label>
            <Input 
                className="mt-5 py-5 w-[50%] bg-white" 
                id="rating" 
                type="number" 
                value={score}
                onChange={(e) => setScore(e.target.value)}
        />
            <Button 
                onClick={() => sendRating(Number(score))}
                className="ml-5 py-5 mb-10">
                    Gửi đánh giá
            </Button>
        </div>
    )
}