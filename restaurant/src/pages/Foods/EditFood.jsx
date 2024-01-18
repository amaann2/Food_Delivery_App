import { Link, useParams } from "react-router-dom"
import Topbar from "../../components/Topbar/Topbar"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../redux/category/categoryAction"
import toast from "react-hot-toast"
import axios from "axios"
import { getSingleFood } from "../../redux/food/foodAction"

const EditFood = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { food } = useSelector(state => state.food)
    useEffect(() => {
        dispatch(getSingleFood(id));
    }, [dispatch, id])


    const [foodData, setFoodData] = useState({
        name: food?.menu?.name || '',
        description: food?.menu?.description || '',
        category: food?.menu?.category || '',
        price: food?.menu?.price || '',
    })

    const [image, setImageData] = useState(food?.menu?.image || '')

    const handleChange = (e) => {
        setFoodData({
            ...foodData,
            [e.target.name]: e.target.value
        })

    };

    const handleCategoryChange = (e) => {
        setFoodData({
            ...foodData,
            category: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', foodData.name);
        formData.append('description', foodData.description);
        formData.append('category', foodData.category);
        formData.append('price', foodData.price);
        // formData.append('image', image);

        try {
            const { data } = await axios.patch(`/api/v1/menu/${id}`, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            if (data.status === 'Success') {
                toast.success(data?.status)
            }
        } catch (error) {
            toast.error(error.reponse.data.message)
        }
    }
    const { category } = useSelector(state => state.category)
    useEffect(() => {
        dispatch(getAllCategory())

    }, [dispatch])
    return (
        <div className="container pt-10 ">
            <Link to="/foods"><p> &#8592; back</p></Link>
            <div className="flex flex-col items-center justify-center">
                <Topbar heading="Edit Food" />


                <form className="w-full max-w-lg flex flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="name"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={foodData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Description
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password"
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={foodData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="price"
                            >
                                price
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="price"
                                type="number"
                                placeholder="Price"
                                name="price"
                                value={foodData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-state"
                            >
                                Category
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state" value={foodData.category} onChange={handleCategoryChange}
                                >
                                    <option value="" selected>select category</option>
                                    {category?.categories?.map((cat) => (
                                        <option value={cat._id} key={cat._id}>{cat.name}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="image"
                            >
                                Image
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="image"
                                type="file"
                                onChange={(e) => setImageData(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <button className="buttonn mtt-25" >create</button>
                </form>
            </div>

        </div>
    )
}

export default EditFood