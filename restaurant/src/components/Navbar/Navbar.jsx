import { useSelector } from 'react-redux'
import './Navbar.css'
const Navbar = () => {
    const { currentUser } = useSelector(state => state.user)
    return (
        <>
            <div className="navbar">
                <div className="icons">
                    {/* all icons */}
                </div>
                <div className="profile">
                    <span>{currentUser?.firstName} {currentUser?.lastName}</span>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="user" className='profileimg' />
                </div>
            </div>
        </>
    )
}

export default Navbar