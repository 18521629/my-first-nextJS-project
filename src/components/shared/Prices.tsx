import { validators } from "@/lib";
import { formatMoney } from "@/lib/formatters";

export default function Price({
    price,
    promotions
}){
    return(
        <div className="w-[95%] rounded-2xl border mx-auto bg-white">
            <p className="px-6 py-2 font-bold text-2xl text-red-900">
                {formatMoney(price)}
            </p>
            <div className="px-6 py-2">
            {validators.isNonEmptyArray(promotions) && promotions.map((item, index) => (
                <div className="flex items-start gap-3 py-2" key={index}>
                    <div 
                        className="w-6 aspect-square flex items-center justify-center rounded-full bg-amber-600 text-white text-sm font-bold shrink-0">
                        {index + 1}
                    </div>
                    <p className="flex-1">{item}</p>
                </div>
            ))}
            </div>
        </div>
    )
}