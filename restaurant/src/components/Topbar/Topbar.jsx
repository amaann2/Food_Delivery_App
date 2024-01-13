import './topbar.css'
const Topbar = ({ heading, desc }) => {
    return (
        <div className="topbar">
            <div className="left-topbar">
                <h2 className="topbar-heading">{heading}</h2>
                <p className="topbar-desc">{desc}</p>
            </div>
      

        </div>
    )
}

export default Topbar