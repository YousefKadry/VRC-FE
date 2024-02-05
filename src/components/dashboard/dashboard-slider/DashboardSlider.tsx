import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { twJoin } from 'tailwind-merge';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';

import DashboardSliderImg from './DashboardSliderImg';

import DashboardEnterRoomImg from '../../../assets/images/dashboard-enter-room.png';
import DashboardBuildRoomImg from '../../../assets/images/dashboard-build-room.png';
import DashboardViewRoomImg from '../../../assets/images/dashboard-view-room.png';

import classes from './DashboardSlider.module.css';
import { useNavigate } from 'react-router-dom';
import { storeUISliceActions } from '../../../store/slices/ui/ui-slice';

const DashboardSlider: React.FC<{ activeSliderHandler: (activeSlider: number) => void }> = (props) => {
    const { activeSliderHandler } = props;

    const swiperRef = useRef<SwiperRef>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSwiperItemsClicking = (swiper: SwiperClass) => {
        const activeIndex = swiper.activeIndex;
        const clickedIndex = swiper.clickedIndex;

        if (activeIndex !== clickedIndex) {
            swiperRef.current?.swiper.slideTo(clickedIndex);
            return;
        }

        switch (activeIndex) {
            case 0:
                joinRoomHandler();
                break;
            case 1:
                createRoomHandler();
                break;
            case 2:
                viewMyRoomsHandler();
                break;
        }
    };

    const viewMyRoomsHandler = () => {
        navigate('/rooms');
    };

    const joinRoomHandler = () => {
        dispatch(storeUISliceActions.setIsEnterRoomPopupShown(true));
    };

    const createRoomHandler = () => {
        dispatch(storeUISliceActions.setIsCreateRoomModalShown(true));
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
                spaceBetween={15}
                slidesPerView={2.55}
                breakpoints={{
                    640: { spaceBetween: 30 },
                    990: { spaceBetween: 40 },
                }}
                centeredSlides={true}
                navigation={true}
                onSlideChange={(swiper) => activeSliderHandler(swiper.activeIndex)}
                onClick={handleSwiperItemsClicking}
                style={{ maxHeight: '80vh' } as any}
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
