import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/category/categoryAction'
import { Swiper, SwiperSlide } from 'swiper/react';
import './category.css'
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const dispatch = useDispatch()
    const { category  } = useSelector(state => state.category)

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800)

    useEffect(() => {
        dispatch(getAllCategory())
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch, setIsMobile])


    return (
        <div className='bg-gray-100 p-12'>
            <div className='flex gap-4 container'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={isMobile ? 3 : 6}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    loop={true}
                    modules={[Navigation]}
                >
                    {category?.categories?.map((cat) => (
                        <SwiperSlide key={cat._id} className='bg-white p-4 rounded-lg shadow-slate-700 w-96 flex justify-center items-center flex-col gap-2 cursor-pointer relative text-center'>
                            <Link to={`/cat/${cat._id}`}>
                                <img src={cat.image.url} alt="category" width={35} className=' m-auto' style={{ userSelect: 'none' }} />
                                <h1 className=" text-xl" style={{ userSelect: 'none' }}>{cat.name}</h1>
                            </Link>

                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

            </div>
        </div>
    )
}

export default Category