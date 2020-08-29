import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../Components/Comp-CSS/HP_Carousel.css';

const HP_Carousel = ()=>{
    return(
        <>
        <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
                <div className="carousel-img">
                    <img src="/carousel-images/1.jpg" />
                </div>
                <div>
                    <img src="/carousel-images/2.jpg" />
                </div>
                <div>
                    <img src="/carousel-images/3.jpg" />
                </div>
                <div>
                    <img src="/carousel-images/4.jpg" />
                </div>
                <div>
                    <img src="/carousel-images/5.jpg" />
                </div>
                <div>
                    <img src="/carousel-images/6.jpg" />
                </div>
            </Carousel>
        </>
    );
}

export default HP_Carousel;