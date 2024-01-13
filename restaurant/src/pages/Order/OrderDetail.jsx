import Topbar from "../../components/Topbar/Topbar"

const OrderDetail = () => {
    return (
        <div className="container pt-10">
            <Topbar heading='Order ID #546454' desc="" />
            <div className="orderDetail">
                <div className="customerbox orderdetailbox">customerbox</div>
                <div className="itembox orderdetailbox">itembox</div>
                <div className="statusbox orderdetailbox">statusbox</div>
                <div className="deliverybox orderdetailbox">delievrybox</div>
            </div>

        </div>
    )
}

export default OrderDetail