import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twJoin } from 'tailwind-merge';

import DashboardSliderImg from './DashboardSliderImg';

import DashboardEnterRoomImg from '../../../assets/dashboard-enter-room.png';
import DashboardBuildRoomImg from '../../../assets/dashboard-build-room.png';
import DashboardViewRoomImg from '../../../assets/dashboard-view-room.png';

import classes from './DashboardSlider.module.css';

const DashboardSlider = () => {
    return (
        <div
            className={twJoin(
                classes['dashboard-slider-container'],
                'relative overflow-hidden flex items-center'
            )}
        >
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={2.5}
                centeredSlides={true}
                navigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ maxHeight: '75vh' }}
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
