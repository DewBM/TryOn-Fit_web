import React from 'react';
import ImageSlider from './Helper/ImageSlider'
import { bannerImages } from './Helper/Banner';

const Slider = () => {
    return (
        // <div className='max-w-[2000px] max-h-[1000px]'>
            <ImageSlider images={bannerImages} />
        // </div>
    );
};

export default Slider;
