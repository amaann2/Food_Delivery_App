import warning from '../assets/warning.png'

const Error = ({ message, stack }) => {
    return (
        <div className="flex justify-center items-center h-screen font-extrabold ">
            <div className=' flex flex-col gap-5 justify-center items-center '>
                <img src={warning} alt="" className='h-48' />
                <h1 className='text-8xl'>Something went wrong</h1>
                <h1 className='text-red-500 text-3xl'>{message}</h1>
                {stack && (
                    <div>
                        <h2>Error Stack Trace:</h2>
                        <pre>{stack}</pre>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Error