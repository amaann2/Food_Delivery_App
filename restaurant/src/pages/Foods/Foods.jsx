const Foods = () => {
    return (
        <div className="container pt-10">
            <div className="topbar">
                <div className="left-topbar">
                    <h2 className="topbar-heading">Foods</h2>
                    <p className="topbar-desc">Here is your Menu summary</p>
                </div>
                <div className="right-topbar">
                    <input type="text" placeholder="search menu" />
                    <button>New Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Foods