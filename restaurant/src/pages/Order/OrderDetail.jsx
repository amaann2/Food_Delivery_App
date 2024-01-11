
const OrderDetail = () => {
    return (
        <div className="container pt-10">
            <div className="topbar">
                <div className="left-topbar">
                    <h2 className="topbar-heading">Order ID #546454</h2>
                    <p className="topbar-desc">Orders / order details</p>
                </div>
                <div className="right-topbar">
                    <button>cancel order</button>
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

export default OrderDetail