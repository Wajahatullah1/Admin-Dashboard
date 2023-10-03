import React from 'react'
import { DataGrid, GridColDef, } from '@mui/x-data-grid';
import { DeleteOutlineOutlined } from '@mui/icons-material'
import { userProducts} from '../../DummyData';
import { useState } from 'react';

const Product = () => {
    const [data, setData] = useState(userProducts);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        console.log('deleted')
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (prams) => {
                return (
                    <div className='flex items-center gap-4 outline-none'>
                        <img className="w-12 rounded-full" src={prams.row.avatar} alt="" />
                        {prams.row.username}
                    </div>
                )
            }
        },
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
            renderCell: (prams) => {
                return (
                    <>

                        <DeleteOutlineOutlined className='text-14  ml-2 cursor-pointer text-red-600 decoration-inherit' onClick={() => handleDelete(prams.row.id)} />
                    </>
                )
            }
        },

    ];

    return (
        <div className="products w-[80%] ">
            <div className="proNave flex items-center justify-between ">
                <div className="head">
                    <h1 className='text-[30px]'>Products</h1>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder='Search your product' className='outline-none border p-2 rounded-md text-[gray]' />
                </div>
            </div>
            <div className='my-10' style={{ width: '100%' }}>
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
        </div>
    )
}

export default Product