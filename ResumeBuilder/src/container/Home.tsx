import  React,{FC} from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid";
import {useTheme,Button , Typography} from '@mui/material'
const columns: GridColDef[] = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field:"roles",
    headerName:"Role",
    width:85,
  },
  {
    field:'status',
    headerName:'Status',
    width:70,
    type:'boolean'
  },
  {
    field:'sticker',
    headerName:'Sticker',
    width:90
  },
  {
    field: "zipcode",
    headerName: "Zipcode",
    type: "number",
    width: 100,
    
  },
];

const rows = [
  {
    _id: "06358e9cf999e2a4c801af58f",
    roles: "Admin",
    firstName: "Muhammad",
    lastName: "Aqib",
    zipcode: 40060,
    status: true,
    sticker: 'black',
  },
  {
    _id: "06358e9cf999e2a4c801af58",
    roles: "Admin",
    firstName: "Muhammad",
    lastName: "Ali",
    zipcode: 40030,
    status: true,
    sticker: 'black',
  },
  {
    _id: "06358e9cf999e2a4c801af8f",
    roles: "Admin",
    firstName: "Muhammad",
    lastName: "Owais",
    zipcode: 40060,
    status: false,
    sticker: 'black',
  },
  {
    _id: "06358e9cf999e2a4c80af58f",
    roles: "Admin",
    firstName: "Muhammad",
    lastName: "Shahan",
    zipcode: 40060,
    status: true,
    sticker: 'black',
  },
  {
    _id: "06358ecf999e2a4c801af58f",
    roles: "Admin",
    firstName: "Muhammad",
    lastName: "Ahsan ",
    zipcode: 400231,
    status: false,
    sticker: 'black',
  },
  
];

// interface IHomeProps {
//     name:string;
// }

const Home =  ()=> {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
        {/* <h1> Welcome {name}</h1> */}
     
      <DataGrid
      getRowId={row=> row._id}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 20, 50, 100]}
        density="comfortable"
        checkboxSelection
        components={{Toolbar:GridToolbar}}
        componentsProps={{
            toolbar:{
                showQuickFilter:true,
            }
        }}
      />
    </Box>
  );
}

export default Home;