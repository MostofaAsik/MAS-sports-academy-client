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
                    <div className='w-[500px] absolute top-40 left-1/2 '>
                        <h2 className='text-5xl text-red'>Football</h2>
                        <p className='text-2xl'>Football, also known as soccer, is a team sport played between two teams of 11 players each. It is played on a rectangular field, usually made of grass or artificial turf. The objective of the game is to score goals by maneuvering the ball into the opponent's net while preventing the opposing team from scoring in your own net.</p>
                        <button className='btn btn-warning'>Explore It</button>
                    </div>
                </div>
                <div>
                    <img src={img2} />
                    <div className='w-[500px] absolute top-40 left-1/2 text-red-400'>
                        <h2 className='text-5xl text-red'>Cricket</h2>
                        <p className='text-2xl'>
                            Cricket is a bat-and-ball game played between two teams of eleven players each. It is a sport that originated in England and has gained immense popularity in various countries around the world.The game is played on a grass field, usually in an oval shape, with a 22-yard-long pitch in the center. The pitch has three stumps at each end, and the objective of the game is for the batting team to score more runs than the opposition.he batting team has two batsmen on the field at a time, and their role is to score runs by striking the ball and running between the wickets. .</p>
                        <button className='btn btn-warning'>Explore It</button>
                    </div>
                </div>
                <div>
                    <img src={img3} />
                    <div className='w-[500px] absolute top-40 left-1/2 text-gray'>
                        <h2 className='text-5xl text-red'>Tennis</h2>
                        <p className='text-2xl'>
                            Tennis is an exhilarating and widely enjoyed individual sport that combines athleticism, skill, strategy, and mental fortitude. Played on a rectangular court divided by a net, tennis involves players using rackets to hit a rubber ball back and forth over the net, aiming to outmaneuver their opponents and score points.

                            The court, which can be made of different surfaces like grass, clay, or hard court, provides unique characteristics and affects the game's dynamics. Grass courts offer a fast and low-bouncing surface, while clay courts are slower with higher bounce. Hard courts provide a medium-paced playing experience.</p>
                        <button className='btn btn-warning'>Explore It</button>
                    </div>
                </div>
                <div>
                    <img src={img4} />
                    <div className='w-[500px] absolute top-40 left-1/2 '>
                        <h2 className='text-5xl text-red'>Carrom</h2>
                        <p className='text-2xl'>Carrom is a popular tabletop game that originated in the Indian subcontinent. It is enjoyed by players of all ages and is commonly played in homes, clubs, and tournaments. Carrom is known for its blend of skill, strategy, and precision. Here's a description of the gam </p>
                        <button className='btn btn-warning'>Explore It</button>
                    </div>
                </div>
                <div>
                    <img src={img5} />
                    <div className='w-[500px] absolute top-40 left-1/2 '>
                        <h2 className='text-5xl text-red'>BasketBal</h2>
                        <p className='text-2xl'>
                            Basketball is a dynamic and exhilarating sport that captivates millions of players and fans worldwide. Known for its fast-paced action, skillful maneuvers, and intense competition, basketball has become a global phenomenon. Here is an essay describing the essence of basketbal
                        </p>
                        <button className='btn btn-warning'>Explore It</button>
                    </div>
                </div>
                <div>
                    <img src={img6} />
                    <div className='w-[500px] absolute top-40 left-1/2 '>
                        <h2 className='text-5xl text-red'>Athletics</h2>
                        <p className='text-2xl'>Athletics, also known as track and field, is a sport that encompasses a wide range of individual and team events, showcasing the pinnacle of human physical performance. It combines speed, strength, agility, endurance, and technique, making it a comprehensive test of athletic prowess. </p>
                        <button className='btn btn-warning'>Explore It</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;