import RegsiterForm from "../../components/Form/RegsiterForm"

const Register = () => {
    return (
        <div className="flex w-full h-screen">

            <div className=" hidden relative lg:flex items-center w-1/2 justify-center h-full bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
            <div className="w-full flex items-center justify-center lg:w-1/2 mt-10">
                <RegsiterForm />
            </div>



        </div>
    )
}

export default Register