import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import './SportsSection.css'

import img1 from '../../../assets/images/xtra/img1.jpg'
import img2 from '../../../assets/images/xtra/img2.jpg'
import img3 from '../../../assets/images/xtra/img3.jpg'
import img4 from '../../../assets/images/xtra/img4.jpg'
import img5 from '../../../assets/images/xtra/img5.jpg'
import img6 from '../../../assets/images/xtra/img6.jpg'

const SportsSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-12">
            <div className="container mx-auto ">
                <h2 className="text-4xl font-bold text-white text-center mb-6">Sports Section</h2>
                <div className=" ">
                    <div className='w-96 mx-auto'>
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={img1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img5} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img6} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img6} />
                            </SwiperSlide>
                        </Swiper>
                        <div className='text-3xl font-bold mt-4'>
                            <h1>Swipe to More</h1>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SportsSection;
