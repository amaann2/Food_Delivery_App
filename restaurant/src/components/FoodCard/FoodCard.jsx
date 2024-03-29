import view from '../../assets/view.png'
import edit from '../../assets/edit.png'
import deleteicon from '../../assets/trash.png'
import { Link } from 'react-router-dom'

const FoodCard = ({ food, deleteMyFood }) => {


    return (
        <div className="bg-white w-52 mt-16  p-1  rounded-2xl shadow-xl">
            {/* image  */}
            <div className="relative bottom-16 flex justify-center items-center"><img src={food?.image?.url} alt="food" className='rounded-full w-36 h-36 shadow-2xl' /></div>
            {/* body  */}
            <div className="relative bottom-10">
                <h1 className="font-bold text-center pb-3">{food?.name}</h1>
                <p className="text-center font-semibold"> <span className="text-green-500">Foods</span> / <span className="text-gray-800">{food?.category?.name}</span> </p>



                {/* actions  */}
                <div className="flex gap-6 justify-center items-center mt-5">

                    <div className='flex flex-col justify-center items-center  gap-1'>
                        <Link to={`/foodDetail/${food?._id}`}><img src={view} alt="view" className='w-8 p-1 cursor-pointer bg-green-300  rounded-md hover:bg-green-400' /></Link>
                        <p className='text-gray-500 text-sm '>View</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-1'>
                        <Link to={`/editfood/${food._id}`}><img src={edit} alt="view" className='w-8 p-1 cursor-pointer bg-red-300 rounded-md hover:bg-red-400' /></Link>
                        <p className='text-gray-500 text-sm '>Edit</p>

                    </div>

                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img src={deleteicon} alt="view" className='w-8 p-1 cursor-pointer bg-blue-300 rounded-md hover:bg-blue-400' onClick={() => deleteMyFood(food._id)} />
                        <p className='text-gray-500 text-sm ' >Delete</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FoodCard