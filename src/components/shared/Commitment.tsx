import { Package, RefreshCw, ShieldCheck } from "lucide-react";

export default function Commitment({
    commitment
}){
    const icons = [Package, RefreshCw, Package, ShieldCheck];
    return(
        <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitment?.map((text, index) => {
                const Icon = icons[index] || Package;
                return (
                <div
                    key={index}
                    className={`flex items-start gap-3 pb-4 ${
                    index % 2 === 0 ? "md:pr-6" : ""
                    }`}
                >
                    <Icon className="text-blue-500 w-6 h-6 mt-1 shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                </div>
                );
            })}
        </div>
    )
}