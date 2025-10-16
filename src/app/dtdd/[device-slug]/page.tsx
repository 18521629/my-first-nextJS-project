"use client";

import { DeviceProps } from "@/app/api/devices/type";
import { getDetailProduct } from "@/lib/api";
import { useState, useEffect } from "react";

export default function MobileDevice({ params }) {
  const [itemData, setItemData] = useState<DeviceProps | null>(null);

  const slug = params['device-slug'];
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetailProduct(slug);
      setItemData(data);
    };
    fetchData();
  }, [slug]); 

  return (
    <div>
      <header>
        <h1>hello hehee</h1>
      </header>
    </div>
  );
}