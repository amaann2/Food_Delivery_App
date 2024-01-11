
const Customer = () => {
    return (
        <div className="container pt-10">
            <div className="topbar">
                <div className="left-topbar">
                    <h2 className="topbar-heading">General Customer</h2>
                    <p className="topbar-desc">Here is your general customer data</p>
                </div>
                <div className="right-topbar">
                    <select name="cars" id="cars">
                        <option value="volvo" selected>On delivery</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Customer