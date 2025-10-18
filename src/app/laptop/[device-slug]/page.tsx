/* eslint-disable @next/next/no-img-element */
"use client"

import { DeviceProps } from "@/app/api/devices/type";
import { getDetailProduct, sendRating } from "@/lib/api";
import { useState, useEffect, use } from "react";
import { ProductInformation, TechnicalSpecifications, Price, WriteComment, CommonCarousel, Commitment } from "@/components/shared";
import Head from "next/head";
import { CustomButton } from "@/components/ui/custom-button";
import { validators } from "@/lib";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function LaptopDevice({ params }: { params: Promise<{ "device-slug": string }> }){
    const SpecificationsLabels = {
        cpu: "Chip xử lý (CPU)",
        ram: "RAM",
        memory: "Dung lượng lưu trữ",
        core: "Số nhân",
        threads: "Số luồng"
    };

    const [isLoading, setIsLoading] = useState(false)
    const [itemData, setItemData] = useState<DeviceProps | null>(null);
    const [tab, setTab] = useState('specifications')
    const resolvedParams = use(params);
    const slug = resolvedParams["device-slug"];
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const data = await getDetailProduct(slug);
                setItemData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
    };
        fetchData();
    }, [slug]);
    
    const onSendRating = async (numRate: number) => {
        try {
            const res = await sendRating(slug, numRate);
            toast.success("Gửi đánh giá thành công",{
                style:{
                    background: '#58a25a'
                }
            });
        } catch(error) {
            toast.error(error.response?.data?.error, {
                style: {
                    background: '#de5a50'
                }
            });
        }
    }

    return(
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <main className="min-h-screen">
            {isLoading && (
                <div className="flex justify-center items-center py-10">
                    <Loader2 className="w-6 h-6 animate-spin text-yellow-500" />
                    <span className="ml-2 text-yellow-600">Đang tải...</span>
                </div>
            )}
            <h1 className="font-bold size-10 w-full text-amber-950 mb-2.5 mt-2.5 pl-3.5">{itemData?.deviceName}</h1>
            {!isLoading && <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                <div className="space-y-6 w-[95%] mx-auto">
                    <CommonCarousel 
                        itemData={itemData}
                        deviceName={itemData?.deviceName}/>
                </div>

                <div className="rounded-2xl border bg-white w-[95%] mx-auto overflow-hidden">
                    <p className="font-bold pl-5 pt-5">
                        Chúng tôi cam kết
                    </p>
                    <Commitment 
                        commitment={validators.isNonEmptyObject ? itemData?.commitment : []}/>
                </div>
                
                
                <div className="space-y-10">
                    <Price 
                        price={validators.isNonEmptyObject ? itemData?.price : ""}
                        promotions={validators.isNonEmptyObject ? itemData?.promotions : []}
                     />
                </div>

                <div className="rounded-2xl border bg-white w-[95%] mx-auto">
                    <div className="flex justify-around py-7 px-5">
                    <CustomButton
                        label="Thông số kỹ thuật"
                        tab="specifications"
                        activeTab={tab}
                        onClick={() => setTab("specifications")}
                    />
                    <CustomButton
                        label="Thông tin sản phẩm"
                        tab="info"
                        activeTab={tab}
                        onClick={() => setTab("info")}
                    />
                    </div>
                    <div>
                        {tab === "specifications" ? 
                            <TechnicalSpecifications
                                SpecificationsLabels={SpecificationsLabels}
                                system={validators.isNonEmptyObject ? itemData?.system : {}}

                            /> : 
                            <ProductInformation 
                                description={validators.isNonEmptyObject ? itemData?.description : ""}/>}
                    </div>
                </div>
                <div className="ml-5">
                    <WriteComment
                            sendRating={onSendRating}
                    />
                </div>
            </div>}
        </main>
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold text-white">Future Tech Store</h2>
                    <p className="text-sm mt-2">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="hover:text-amber-400 transition-colors">
                        Chính sách bảo hành
                    </a>
                    <a href="#" className="hover:text-amber-400 transition-colors">
                        Liên hệ
                    </a>
                    <a href="#" className="hover:text-amber-400 transition-colors">
                        Về chúng tôi
                    </a>
                </div>
            </div>
        </footer>
    </>
    )
}