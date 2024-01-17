import Topbar from "../../components/Topbar/Topbar"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom'
import './foods.css'
import FoodCard from "../../components/FoodCard/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMyFood } from "../../redux/food/foodAction";
import FoodCardSkeleton from "../../components/FoodCard/FoodCardSkeleton";
import { getAllCategory } from "../../redux/category/categoryAction";
const Foods = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('')
    const [limit] = useState(2)


    const dispatch = useDispatch()

    const { restaurant } = useSelector(state => state.restaurant)
    const { myFood, loading } = useSelector(state => state.food)


    // const loading = true

    useEffect(() => {
        dispatch(getMyFood(restaurant._id, currentPage, limit, search))
        dispatch(getAllCategory())

    }, [dispatch, restaurant, currentPage, limit, search])



    const totalPage = Math.ceil(myFood?.total / limit)
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const pageNumber = Array.from({ length: totalPage }, (_, i) => i + 1)


    return (
        <div className="container pt-10">
            <div className="topbar">

                <Topbar heading="Foods" desc="Here is your menu summary" />
                <div className="right-topbar flex  justify-center items-center">
                    <div className="flex mx-8 rounded bg-white w-96 h-16">
                        <input
                            className=" w-full border-none bg-transparent px-4   text-gray-400 outline-none  focus:outline-none rounded"
                            type="search"
                            name="search"
                            value={search}
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="m-2 rounded bg-green-500 px-4 py-1 text-white"

                        >
                            <svg
                                className="fill-current h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                viewBox="0 0 56.966 56.966"
                                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                                xmlSpace="preserve"
                                width="250px"
                                height="250px"
                            >
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                    <button className="buttonn"><PersonAddIcon /><Link to="/addfood" className="text-white"> &nbsp; New Menu</Link></button>
                </div>
            </div>

            <div className="foods flex flex-wrap  gap-8">
                {/* menu  */}

                {loading ? <FoodCardSkeleton /> : myFood && myFood?.restMenu?.map((menu) => (
                    <FoodCard key={menu._id} food={menu} />
                ))}

                {/* menu footer  */}
                <div className="flex w-full items-center  justify-between border-t  px-4 py-3 sm:px-6">
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700 font-bold">Showing {myFood?.result} from {myFood?.total} menus</p>
                        </div>
                        <div>
                            <div
                                className="isolate inline-flex -space-x-px rounded-xl  shadow-sm"
                                aria-label="Pagination"
                            >
                                <button className="relative inline-flex items-center rounded-l-md px-2  text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 text-3xl bg-white border-none"
                                    onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&#8249;</button>
                                {pageNumber.map((num) => (
                                    <button
                                        key={num}
                                        aria-current="page"
                                        className={`relative inline-flex items-center px-4  text-sm font-semibold  bg-white text-gray-900 ring-1  ${num === currentPage ? ' bg-gray-300' : 'text-gray-900'}  ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 border-none`}
                                        onClick={() => handlePageChange(num)}
                                    >
                                        {num}
                                    </button>
                                ))}
                                <button className="relative inline-flex items-center rounded-r-md px-2  text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 text-3xl border-none bg-white"
                                    onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPage}
                                >&#8250;</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Foods