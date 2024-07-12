import React from 'react';
import ImageSlider from './Helper/ImageSlider'
import { bannerImages } from './Helper/Banner';

const Slider = () => {
    return (
        <div className='mx-auto max-w-[700px]'>
            <ImageSlider images={bannerImages} />
        </div>
    );
};

export default Slider;
