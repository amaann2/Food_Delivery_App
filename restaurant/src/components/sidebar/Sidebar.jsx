import './Sidebar.css'
import { sidebarData } from './sidebarData'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='sidebar'>
            <div className="logo">
                <h2>FoodIn<span className="dot">.</span></h2>
                {/* <p>Restaurant Admin</p> */}
            </div>
            <ul className='sidebarList'>
                {sidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            onClick={() => { navigate(val.link) }}
                            className='row'
                            id={window.location.pathname === val.link ? 'active' : ''}
                        >
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
            {/* <div className="sidebarFooter">
                <h5 className='footer-heading'>FoodIn Restaurant admin dashboard</h5>
                <p className='footer-copyright'>@2024 All Rights Reserved</p>
            </div> */}
        </div>
    )
}

export default Sidebar