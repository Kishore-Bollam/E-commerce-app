import { Carousel } from "react-bootstrap";
import { BannerCoroueslConfig } from "./banner-corousel-config";

import './banner-corousel.css'


const BannerCorouesl = () =>{

    return (
        <Carousel>
            {BannerCoroueslConfig.corouselImages.map(corousel => 
                 <Carousel.Item>
                 <img
                   className="d-block w-100"
                   src={corousel.imageSrc}
                   alt="First slide"
                 />
                 <Carousel.Caption>
                   <h3>{corousel.title}</h3>
                   <p>{corousel.caption}</p>
                 </Carousel.Caption>
               </Carousel.Item>
                )}
       
        
      </Carousel>
    )
}
export default BannerCorouesl;