import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { validators } from "@/lib";

export default function TechnicalSpecifications({
    system,
    SpecificationsLabels
}){
    const [isShow, setIsShow] = useState(true)
    const toggleShow = () => {
        setIsShow(!isShow)
    }

    console.log("systemsystemsystem", system);
    
    
    return(
        <div className="">
            <div 
                className="flex-row flex justify-between bg-gray-300 w-full pt-2.5 pb-2.5 pl-2 rounded"
                onClick={() => toggleShow()}>
                <span  className="text-white">Cấu hình & Bộ nhớ</span>
                {!isShow ? <ChevronUp className="w-6 h-6 text-gray-500" /> : <ChevronDown className="w-6 h-6 text-gray-500"/>}
            </div>
            {isShow && <div className="mb-10 mt-2">
            {Object.keys(SpecificationsLabels).map((key, index) => (
                <div
                    key={key}
                    className={`hover:bg-gray-50 flex justify-between items-center py-2 px-4  ${
                    index !== Object.keys(SpecificationsLabels).length - 1
                        ? "border-b border-gray-200"
                        : ""
                    } ${index % 2 === 1 ? "text-blue-400" : "text-gray-400"}`}
                >
                    <span key={key}> {`${SpecificationsLabels[key as keyof typeof SpecificationsLabels]}: `}</span>
                    <span>
                        {!validators.isNonEmptyObject(system)? "" : 
                            validators.isArray(system?.[key]) ? 
                                system?.[key].map((item, index) => (<p key={index}>{item}</p>)) 
                                : system?.[key] || "Hãng không công bố"}
                    </span>
                </div>
            ))}
            </div>}
        </div>
    )
}