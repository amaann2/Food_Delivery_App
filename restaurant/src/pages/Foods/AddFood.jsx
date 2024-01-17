import { Link } from "react-router-dom"
import Topbar from "../../components/Topbar/Topbar"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from "../../redux/category/categoryAction"

const AddFood = () => {
    const [foodData, setFoodData] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        image: ""
    })
    const handleChange = (e) => {
        setFoodData({
            ...foodData,
            [e.target.name]: e.target.value
        })
    }
    const handleCategoryChange = (e) => {
        setFoodData({
            ...foodData,
            category: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(foodData)
    }
    const dispatch = useDispatch()
    const { category } = useSelector(state => state.category)
    useEffect(() => {
        dispatch(getAllCategory())

    }, [dispatch])
    console.log(category.categories)
    return (
        <div className="container pt-10 ">
            <Link to="/foods"><p> &#8592; back</p></Link>
            <div className="flex flex-col items-center justify-center">
                <Topbar heading="Add Food" />


                <form className="w-full max-w-lg flex flex-col" onSubmit={handleSubmit}>
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
                            />
                        </div>
                    </div>
                    <button className="buttonn mtt-25" >create</button>
                </form>
            </div>

        </div>
    )
}

export default AddFood