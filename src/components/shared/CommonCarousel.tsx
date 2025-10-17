/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { validators } from "@/lib";

export default function CommonCarousel({
    itemData,
    deviceName
}){
    return(
        <div>        
            <Carousel 
                showThumbs={false} 
                infiniteLoop={false}
                autoPlay={true}>
                {validators.isNonEmptyArray(itemData?.imageUrl) && itemData?.imageUrl.map((url) => {
                    return(
                        <div key={url}>
                        <img
                            src={url}
                            alt={deviceName}
                            loading="eager"
                            style={{ width: "100%", height: "auto" }}
                        />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}