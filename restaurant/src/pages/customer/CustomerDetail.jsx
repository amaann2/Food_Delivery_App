import Topbar from "../../components/Topbar/Topbar"

const CustomerDetail = () => {
    return (
        <div className="container pt-10">
            <Topbar heading="Customer Details" desc="Here is your customer detail data" />
            <div className="customerdetail">
                <div className="detailbox">detailbox</div>
                <div className="balancebox">balancebox</div>
            </div>
            <div className="customeranalytics">

            <div className="mostorderbox">mostorderbox</div>
            <div className="mostlikedbox">mostlikedbox</div>
            </div>
        </div>
    )
}

export default CustomerDetail