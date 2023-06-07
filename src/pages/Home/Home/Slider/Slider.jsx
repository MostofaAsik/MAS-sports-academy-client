import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../../assets/images/slider/football.jpg'
import img2 from '../../../../assets/images/slider/cricket.jpg'
import img3 from '../../../../assets/images/slider/tenis.jpg'
import img4 from '../../../../assets/images/slider/carrom.jpg'
import img5 from '../../../../assets/images/slider/basket.jpg'
import img6 from '../../../../assets/images/slider/athletics.jpg'


const Slider = () => {
    return (
        <div className='text-center'>
            <Carousel autoPlay={1} infiniteLoop={1}>
                <div className='relative' >
                    <img src={img1} />
                    <p className='absolute top-10 text-red-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, modi!</p>
                </div>
                <div>
                    <img src={img2} />

                </div>
                <div>
                    <img src={img3} />

                </div>
                <div>
                    <img src={img4} />

                </div>
                <div>
                    <img src={img5} />

                </div>
                <div>
                    <img src={img6} />

                </div>
            </Carousel>
        </div>
    );
};

export default Slider;