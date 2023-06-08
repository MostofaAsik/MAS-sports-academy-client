import React from 'react';
import Slider from './Slider/Slider';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import SportsSection from '../SportsSection/SportsSection';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <SportsSection></SportsSection>
        </>
    );
};

export default Home;