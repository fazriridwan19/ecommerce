import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { 
        field: 'user', 
        headerName: 'User', 
        width: 200,
        renderCell: params => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
    },
    {
        field: 'transaction',
        headerName: 'Transaction',
        width: 160,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: params => {
            return (
                <>
                    <button className="userListEdit">Edit</button>
                    <DeleteOutline className='userListDelete'/>
                </>
            )
        }
    },
];

const rows = [
    { 
        id: 1, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 2, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 3, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 4, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 5, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 6, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 7, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 8, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 9, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
    { 
        id: 10, 
        username: 'Jon Rod', 
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        email: 'jon@gmail.com', 
        status: 'active', 
        transaction: '$110,00' 
    },
  
];

export default function UserList() {
  return (
    <div className='userList'>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}