import { DataGrid } from '@mui/x-data-grid'
import './order.css'
import Topbar from '../../components/Topbar/Topbar';
const OrderList = () => {
    const columns = [
        { field: 'orderId', headerName: 'Order ID', width: '200', headerClassName: 'customheader bg-green border-radius-left' },
        { field: 'date', headerName: 'Date', width: '250', headerClassName: ' bg-green customheader' },
        { field: 'customerName', headerName: 'Customer Name', width: '250', headerClassName: ' bg-green customheader' },
        { field: 'location', headerName: 'Location', width: '200', headerClassName: ' bg-green customheader' },
        { field: 'amount', headerName: 'Amount', width: '150', headerClassName: ' bg-green customheader' },
        { field: 'status', headerName: 'Status', width: '120', headerClassName: ' bg-green customheader border-radius-right' },
    ];
    const rows = [
        { orderId: '#342325', date: '27-12-2002', customerName: 'Alfred', location: 'Germany', amount: '239', status: 'delivered' },
        { orderId: '#342325', date: '27-12-2002', customerName: 'Alfred', location: 'Germany', amount: '239', status: 'delivered' },
        { orderId: '#342325', date: '27-12-2002', customerName: 'Alfred', location: 'Germany', amount: '239', status: 'delivered' },
        { orderId: '#342325', date: '27-12-2002', customerName: 'Alfred', location: 'Germany', amount: '239', status: 'delivered' },
        { orderId: '#342325', date: '27-12-2002', customerName: 'Alfred', location: 'Germany', amount: '239', status: 'delivered' },
        { orderId: '#342325', date: '27-12-2002', customerName: 'Alfred', location: 'Germany', amount: '239', status: 'delivered' },
        { orderId: '#342325', date: '27-12-2002', customerName: 'Alfred', location: 'Germany', amount: '239', status: 'delivered' },
    ];
    return (
        <div className="container pt-10">
            <Topbar heading='Order List' desc="This is your order data" />
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={row => row.orderId}
                pageSizeOptions={8}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 8
                        }
                    }
                }}
                autoHeight
            />

        </div>
    )
}

export default OrderList