import { Link } from "react-router-dom"
import { useFormik } from 'formik'
import { loginSchema } from '../../utils/validationSchema'
import axios from "axios"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "../../redux/User/userAction"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
const initialValues = {
    email: "",
    password: ""
}

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, action) => {
            try {
                const response = await axios.post('/api/v1/users/login', values)
                if (response.data.user.role === 'owner') {
                    dispatch(setCurrentUser(response.data.user));
                    toast.success(response?.data?.status)
                } else {
                    toast.error('Invalid email and password')
                }
                navigate('/')
            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
            action.resetForm()
        }
    })



    return (
        <div className="bg-white p-10 py-20 rounded-3xl border-2 border-gray-200">
            <h1 className="text-4xl font-semibold">FoodIn-Restaurant</h1>
            <p className="font-medium text-lg text-gray-500 mt-2">Welcome Back ! please enter your details.</p>
            <form onSubmit={handleSubmit}>
                <div className="mt-8">
                    <div>
                        <label className="text-lg font-medium">Email</label>
                        <input type="text" className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors && <p className="text-sm mb-3">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="text-lg font-medium">Password</label>
                        <input type="password" className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent" placeholder="Enter your Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {errors && <p className="text-sm ">{errors.password}</p>}
                    </div>

                    <div className="flex mt-8 justify-between items-center">
                        <div>
                            <input type="checkbox" name="" id="remember" />
                            <label htmlFor="remember" className="ml-2 font-medium text-base">Remember me</label>
                        </div>

                        <button className="font-medium text-base text-green-500">Forgot Password</button>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                        <button type="submit" className="bg-green-500 text-white text-lg font-bold py-3 rounded-xl  active:scale-[.98] active:duration-75 transition-all  hover:scale-[1.01] ease-in-out">Sign In</button>
                    </div>
                    <div className="flex mt-8  justify-center items-center">
                        <p className="font-medium text-base">Dont have an Account?</p>
                        <Link to={'/register'} className="text-green-500 text-base font-medium ml-2">Sign up</Link>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default LoginForm