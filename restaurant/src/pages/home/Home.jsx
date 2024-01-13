import './Home.css'
import deliveryIcon from '../../assets/delivery.png'
import cancelIcon from '../../assets/cancel.png'
import orderIcon from '../../assets/order.png'
import revenueIcon from '../../assets/revenue.png'
import Topbar from '../../components/Topbar/Topbar'

import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import "swiper/css/pagination";
import { useSelector } from 'react-redux'


const Home = () => {
    const { currentUser } = useSelector(state => state.user)

    const summary = [
        {
            id: 1,
            title: 'Total Order',
            value: 75,
            icon: orderIcon
        },
        {
            id: 2,
            title: 'Total Delivered',
            value: 725,
            icon: deliveryIcon
        },
        {
            id: 3,
            title: 'Total Canceled',
            value: 65,
            icon: cancelIcon
        },
        {
            id: 4,
            title: 'Total Revenue',
            value: '$128',
            icon: revenueIcon
        },
    ]
    return (
        <div className="container pt-10">
            <div className="topbar">
                <div className="left-topbar">
                    <h2 className="topbar-heading ">Dashboard</h2>
                    <p className="topbar-desc">Hi, {currentUser?.firstName}. Welcome back to foodIn dashboard</p>
                </div>
            </div>

            <div className="summaryCard">
                {summary.map((data) => (
                    <div className='card' key={data.id}>
                        <div className="icons"><img src={data.icon} alt="icons" className='card-icons' /></div>
                        <div className="data">
                            <h1 className="card-value">{data.value}</h1>
                            <p className='card-title'>{data.title}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className="charts">
                <div className="pie">pie chart </div>
                <div className="orderchart">order line chart</div>
            </div>

            <div className="linecharts">
                <div className="revenuechart">Revenue</div>
                <div className="customerchart">customer</div>
            </div>

            <Topbar heading="Customer Review" desc="Eum fuga consequerto utsadin et." />
            <Swiper navigation={true}
                grabCursor={true}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    800: { slidesPerView: 3 },
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <div className="topReview">
                    <SwiperSlide ><div className="topreviewcard">review</div></SwiperSlide>
                    <SwiperSlide ><div className="topreviewcard">review</div></SwiperSlide>
                    <SwiperSlide ><div className="topreviewcard">review</div></SwiperSlide>
                    <SwiperSlide ><div className="topreviewcard">review</div></SwiperSlide>
                    <SwiperSlide ><div className="topreviewcard">review</div></SwiperSlide>
                    <SwiperSlide ><div className="topreviewcard">review</div></SwiperSlide>

                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>
        </div >
    )
}

export default Home