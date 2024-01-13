import { useState } from "react"
import { Link } from "react-router-dom"

const RegsiterForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'owner'
    })
    const hanleOnchange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // send the login data to server 

    }
    return (
        <div className="bg-white p-10 py-20 rounded-3xl border-2 border-gray-200 ">
            <h1 className="text-4xl font-semibold">FoodIn-Restaurant</h1>
            <p className="font-medium text-lg text-gray-500 mt-2">Register your account.</p>
            <div className="mt-5">
                <div>
                    <label className="text-lg font-medium">First Name</label>
                    <input type="text" className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your Email" name="firstName" value={formData.firstName} onChange={hanleOnchange} />
                </div>
                <div>
                    <label className="text-lg font-medium">Last Name</label>
                    <input type="text" className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your Email" name="lastName" value={formData.lastName} onChange={hanleOnchange} />
                </div>
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input type="text" className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your Email" name="email" value={formData.email} onChange={hanleOnchange} />
                </div>
                <div>
                    <label className="text-lg font-medium">Password</label>
                    <input type="password" className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your Password" name="password" value={formData.password} onChange={hanleOnchange} />
                </div>
                <div>
                    <label className="text-lg font-medium">Confirm Password</label>
                    <input type="password" className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your Password" name="confirmPassword" value={formData.confirmPassword} onChange={hanleOnchange} />
                </div>

                <div className="flex mt-8 justify-between items-center">
                    <div>
                        <input type="checkbox" name="" id="remember" />
                        <label htmlFor="remember" className="ml-2 font-medium text-base">Remember me</label>
                    </div>

                    <button className="font-medium text-base text-blue-500">Forgot Password</button>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                    <button className="bg-blue-500 text-white text-lg font-bold py-3 rounded-xl  active:scale-[.98] active:duration-75 transition-all  hover:scale-[1.01] ease-in-out" onClick={handleSubmit} >Sign Up</button>
                </div>
                <div className="flex mt-8  justify-center items-center">
                    <p className="font-medium text-base">Already have an Account?</p>
                    <Link to={'/login'} className="text-blue-500 text-base font-medium ml-2">login here</Link>
                </div>

            </div>
        </div>
    )
}

export default RegsiterForm