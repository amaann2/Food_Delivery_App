
import { ColorRing } from 'react-loader-spinner'
const Loader = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#EC0061']}
        />
    )
}

export default Loader