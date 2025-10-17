/* eslint-disable @next/next/no-img-element */
"use client";

import { HeadsetProps } from "@/app/api/devices/type";
import { getDetailProduct, sendRating } from "@/lib/api";
import { useState, useEffect, use } from "react";
import { ProductInformation, TechnicalSpecifications, Price, WriteComment, CommonCarousel } from "@/components/shared";
import Head from "next/head";
import { CustomButton } from "@/components/ui/custom-button";
import { validators } from "@/lib";
import { toast } from "sonner";

export default function MobileDevice({ params }: { params: Promise<{ "device-slug": string }> }) {
    const SpecificationsLabels = {
        battery: "Thời lượng pin tai nghe",
        caseBattery: "Thời lượng pin hộp sạc",
        chargingPort: "Cổng sạc",
        technologies: "Công nghệ âm thanh",
        utility: "Tiện ích"
    };

    const [itemData, setItemData] = useState<HeadsetProps | null>(null);
    const [tab, setTab] = useState('specifications')
    const resolvedParams = use(params);
    const slug = resolvedParams["device-slug"];
  
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailProduct(slug);
      setItemData(data);
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

  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <main className="min-h-screen">
            <h1 className="font-bold size-10 w-full text-amber-950 mb-2.5 mt-2.5 pl-3.5">{itemData?.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-6 w-[95%] mx-auto">
                    <CommonCarousel 
                        itemData={itemData}
                        deviceName={itemData?.name}/>
                </div>

                <div className="space-y-10">
                    <Price 
                        price={validators.isNonEmptyObject ? itemData?.price : ""}
                        promotions={validators.isNonEmptyObject ? itemData?.promotions : []}
                     />
                </div>

                <div>
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
                                system={validators.isNonEmptyObject ? itemData?.information : {}}

                            /> : 
                            <ProductInformation 
                                description={validators.isNonEmptyObject ? itemData?.description : ""}/>}
                    </div>
                </div>

                <WriteComment
                    sendRating={onSendRating}
                />
            </div>
        </main>
        <footer>
        </footer>
    </>
  );
}