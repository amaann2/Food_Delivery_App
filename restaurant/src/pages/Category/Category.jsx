
import { useEffect } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/category/categoryAction'
const Category = () => {
    const { category } = useSelector(state => state.category)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])
    return (
        <div className='container pt-10'>
            <Topbar heading={"Category"} desc="Have a look on category" />

            <div className='flex flex-wrap gap-8'>
                {category?.categories?.map((cat) => (
                    <div className='bg-white p-5 rounded-md shadow-slate-700 flex justify-center items-center flex-col gap-4 w-36 ' key={cat.id}>
                        <img src={cat?.image?.url} alt="category" width={40} />
                        <h2 className='font-bold '>{cat?.name}</h2>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Category