const Review = () => {
    return (
        <div className="container pt-10">
            <div className="topbar">
                <div className="left-topbar">
                    <h2 className="topbar-heading">Review</h2>
                    <p className="topbar-desc">Customer review</p>
                </div>
                <div className="right-topbar">
                    <select name="cars" id="cars">
                        <option value="volvo" selected>Filter period</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Review