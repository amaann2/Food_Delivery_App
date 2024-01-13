import { DataGrid } from '@mui/x-data-grid';
import './customer.css'
import Topbar from '../../components/Topbar/Topbar';
const Customer = () => {
    const rows = [
        { id: 1, JoinedDate: '2023-01-01', Name: 'John Doe', location: 'City A', totalspent: '$100', lastorder: '2023-02-15', edit: '' },
        { id: 2, JoinedDate: '2023-02-05', Name: 'Jane Smith', location: 'City B', totalspent: '$150', lastorder: '2023-03-20', edit: '' },
        { id: 3, JoinedDate: '2023-03-10', Name: 'Bob Johnson', location: 'City C', totalspent: '$200', lastorder: '2023-04-25', edit: '' },
        { id: 4, JoinedDate: '2023-04-15', Name: 'Alice Brown', location: 'City A', totalspent: '$120', lastorder: '2023-05-30', edit: '' },
        { id: 5, JoinedDate: '2023-05-20', Name: 'Chris Davis', location: 'City B', totalspent: '$180', lastorder: '2023-06-15', edit: '' },
        { id: 6, JoinedDate: '2023-06-25', Name: 'Eva White', location: 'City C', totalspent: '$250', lastorder: '2023-07-20', edit: '' },
        { id: 7, JoinedDate: '2023-07-30', Name: 'Sam Miller', location: 'City A', totalspent: '$90', lastorder: '2023-08-25', edit: '' },
        { id: 8, JoinedDate: '2023-08-05', Name: 'Linda Wilson', location: 'City B', totalspent: '$300', lastorder: '2023-09-30', edit: '' },
        { id: 9, JoinedDate: '2023-09-10', Name: 'Mike Taylor', location: 'City C', totalspent: '$180', lastorder: '2023-10-15', edit: '' },
        { id: 10, JoinedDate: '2023-10-15', Name: 'Emily Harris', location: 'City A', totalspent: '$200', lastorder: '2023-11-20', edit: '' },
    ];
    const columns = [
        { field: 'id', headerName: 'Customer ID', width: '200', headerClassName: 'customheader border-radius-left', },
        { field: 'JoinedDate', headerName: 'Joined Date', width: '250', headerClassName: 'customheader', },
        { field: 'Name', headerName: 'Customer Name', width: '200', headerClassName: 'customheader', },
        { field: 'location', headerName: 'Location', width: '230', headerClassName: 'customheader', },
        { field: 'totalspent', headerName: 'Total Spent', width: '120', headerClassName: 'customheader', },
        { field: 'lastorder', headerName: 'Last order', width: '120', headerClassName: 'customheader' },
        { field: 'edit', headerName: '', width: '55', headerClassName: 'customheader border-radius-right', },
    ]
    return (

        <div className="container pt-10">
            <Topbar heading={'General Customer'} desc={'Here is your general customer data'} />
       
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={row => row.id}
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

export default Customer