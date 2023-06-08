/* eslint-disable react/no-unescaped-entities */
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
                    <p className='absolute top-20 left-10 right-10 text-red-500 text-3xl'>Football, also known as soccer in some parts of the world, is the most popular sport globally, captivating the hearts of millions of fans. It is played on a rectangular field, commonly referred to as a pitch, with two teams consisting of 11 players each. The objective of the game is to score goals by maneuvering the ball into the opponent's net while defending one's own.

                        Football's origins can be traced back to ancient times, with various forms of the sport being played in different cultures. However, the modern game as we know it today evolved in England during the 19th century. It quickly gained popularity and spread throughout the world, becoming a unifying and thrilling sport.

                    </p>
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