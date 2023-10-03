import * as React from 'react';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import {DeleteOutlineOutlined} from '@mui/icons-material'
import { userRows } from '../../DummyData';
import {Link} from 'react-router-dom'
import { useState } from 'react';
export default function userList(){
const [data ,setData] = useState(userRows);
const handleDelete = (id) =>{
     setData(data.filter((item) => item.id !== id));
     console.log('deleted')
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100},
  { field: 'user', headerName: 'User', width: 200 , renderCell:(prams)=>{
    return(
      <div className='flex items-center gap-4 outline-none'>
      <img className="w-12 rounded-full"src={prams.row.avatar} alt="" />
      {prams.row.username}
      </div>
    )
  }},
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
 
    width: 150,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
 
    width: 150,
  },
  {
    field: 'action',
    headerName: 'Action',
 
    width: 150,
    renderCell:(prams) =>{
      return(
        <>
        <Link to={"/user/" + prams.row.id}>
        <button className='bg-green-600 text-[17px]  text-white px-2 rounded-md border-none' >Edit</button>
        </Link>
        <DeleteOutlineOutlined className='text-14  ml-2 cursor-pointer text-red-600 decoration-inherit' onClick={()=>handleDelete (prams.row.id)}/>
        </>
      )
    }
  },
 
];



  
  return (
    <div style={{  width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
      />
    </div>
  );
}

