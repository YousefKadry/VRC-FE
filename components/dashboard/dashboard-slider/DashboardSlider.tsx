import React, { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import { twJoin } from 'tailwind-merge';

import DashboardSliderImg from './DashboardSliderImg';

import DashboardEnterRoomImg from '../../../assets/images/dashboard-enter-room.png';
import DashboardBuildRoomImg from '../../../assets/images/dashboard-build-room.png';
import DashboardViewRoomImg from '../../../assets/images/dashboard-view-room.png';
import RightArrowIcon from '../../../assets/icons/right-arrow.svg';
import LeftArrowIcon from '../../../assets/icons/left-arrow.svg';

import classes from './DashboardSlider.module.css';

const DashboardSlider: React.FC<{ activeSliderHandler: (activeSlider: number) => void }> = (props) => {
    const { activeSliderHandler } = props;

    const swiperRef = useRef<SwiperRef>(null);

    const handleSwiperItemsClicking = (swiper: SwiperClass) => {
        const activeIndex = swiper.activeIndex;
        const clickedIndex = swiper.clickedIndex;

        if (activeIndex !== clickedIndex) {
            swiperRef.current?.swiper.slideTo(clickedIndex);
            return;
        }
    };

    return (
        <div
            className={twJoin(
                classes['dashboard-slider-container'],
                'relative overflow-hidden flex items-center'
            )}
        >
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={2.45}
                centeredSlides={true}
                navigation={true}
                onSlideChange={(swiper) => activeSliderHandler(swiper.activeIndex)}
                onClick={handleSwiperItemsClicking}
                style={
                    {
                        maxHeight: '80vh',
                        '--custom-swiper-btn-next': `url(${RightArrowIcon})`,
                        '--custom-swiper-btn-prev': `url(${LeftArrowIcon})`,
                    } as any
                }
            >
                <SwiperSlide>
                    <DashboardSliderImg imgSrc={DashboardEnterRoomImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <DashboardSliderImg imgSrc={DashboardBuildRoomImg} />
                </SwiperSlide>
                <SwiperSlide>
                    <DashboardSliderImg imgSrc={DashboardViewRoomImg} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DashboardSlider;
