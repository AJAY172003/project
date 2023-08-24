import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import DepartmentsList from "./comp2.tsx";
function Comp1() {
const navigate=useNavigate();
 let check=false;
 const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(JSON.stringify(parsedData.savedEmail));
      if(parsedData.savedEmail==""||parsedData.savedName==""||parsedData.savedPhone==""){
      check=true;
      setTimeout(() => {
        navigate('/')
      }, 1500);
      }
 
    }
  useEffect(() => {
    // Fetch data from local storage 
    if (dataList.length === 0) {
      fetchData();
    }
  }, []);
    
  interface DataItem {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [dataList, setDataList] = useState<DataItem[]>([]);

  useEffect(() => {}, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<DataItem[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setDataList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let newdata = dataList.map((val, index) => ({
    id: val.id,
    userid: val.userId,
    title: val.title,
    body: val.body,
  }));

  const rows: GridRowsProp = newdata;
  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 150 },
    { field: "userid", headerName: "userid", width: 150 },
    { field: "title", headerName: "title", width: 150 },
    { field: "body", headerName: "body", width: 150 },
  ];
  return (
    <div>
   {check? <div> <p style={{color:"red"}}>Please fill all the fields!</p>
   <p>Redirecting back...</p>
   </div>: <div style={{ height: 300, width: "100%" }}>
   <DataGrid rows={rows} columns={columns} />
   <DepartmentsList/>
 </div> }
 </div>
  );
}

export default Comp1;
