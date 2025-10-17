import { Button } from "./button";

interface CustomButtonProps {
    label: string;
    onClick: () => void;
    tab: string;
    activeTab: string
}

export function CustomButton({ label, onClick, tab, activeTab }: CustomButtonProps) {
    const isActive = activeTab === tab;
    return(
        <Button 
            className={`px-4 py-2 ${isActive ? "border-b-2 border-blue-500 text-blue-500 font-bold" :  "text-gray-500"}`}
            size="lg" 
            variant="outline"
            onClick={onClick}>
                {label}
        </Button>
    )
}