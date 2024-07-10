import React from 'react';
import Slider from 'react-slick';

interface ImageSliderProps {
    images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const settings = {
        dots: true,
        speed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        pauseOnHover: true,
        autoplay: true,
    };

    return (
        <div className='w-full h-[700px] max-w-[700px] max-h-[700px] relative overflow-hidden'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='w-full h-full'>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className='w-full h-full object-cover'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
