import pizzaImg from '../../assets/pizza.jpg'
import view from '../../assets/view.png'
import edit from '../../assets/edit.png'
import deleteicon from '../../assets/trash.png'
import { Link } from 'react-router-dom'
const FoodCard = () => {
    return (
        <div className="foodcard  bg-white w-52 mt-16  p-1  rounded-2xl shadow-xl">
            <div className="img  relative bottom-16 flex justify-center items-center"><img src={pizzaImg} alt="food" className='rounded-full w-36 h-36 shadow-2xl' /></div>
            <div className="body relative bottom-10">
                <h1 className="font-bold text-center pb-3">Spicy mozeralla with Barbeque</h1>
                <p className="text-center font-semibold"> <span className="text-green-500">Foods</span> / <span className="text-gray-800">Pizza</span> </p>


                <div className="actions flex gap-6 justify-center items-center mt-5">
                    <div className='flex flex-col justify-center items-center  gap-1'>
                        <img src={view} alt="view" className='w-8 p-1 cursor-pointer bg-green-300  rounded-md hover:bg-green-400' />
                        <Link to="/foodDetail"><p className='text-gray-500 text-sm hover:underline hover:font-bold'>View</p></Link>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img src={edit} alt="view" className='w-8 p-1 cursor-pointer bg-red-300 rounded-md hover:bg-red-400' />
                        <Link to="/editfood"><p className='text-gray-500 text-sm hover:underline hover:font-bold'>Edit</p></Link>

                    </div>

                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img src={deleteicon} alt="view" className='w-8 p-1 cursor-pointer bg-blue-300 rounded-md hover:bg-blue-400' />
                        <p className='text-gray-500 text-sm hover:underline hover:font-bold'>Delete</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FoodCard