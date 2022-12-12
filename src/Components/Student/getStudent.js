import React, {useState, useEffect} from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateStudent from "./createStudent";

function GetStudent(){
    const[studentData,setStudentData] = useState([]);
    useEffect(()=>{
        async function getData(){
        const response = await axios.get("https://6341084520f1f9d7996b15ce.mockapi.io/studentdata")
        setStudentData(response.data)
      }
      getData();
    },[]);
    
    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure want to delete the selected data?")
        if(confirm){
        const response = await axios.delete(`https://6341084520f1f9d7996b15ce.mockapi.io/studentdata/${id}`);
        const student = studentData.filter((row) => row.id !== id);
        setStudentData(student);
        }
    }

    return(
        <div id="wrapper">
                    <Sidebar/>
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">
                        <Topbar/> 
                        <div>
                        &nbsp; &nbsp;<Link to="/createstudent" type="button" class="btn btn-success">+ Create Student</Link>
                        </div>
                {studentData.map((data)=>(                  
                    <div class="card" key={data.id} style={{width: "18rem", marginLeft:"100px", marginTop:"50px", display:"inline-block"}}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Name: </strong>{data.name}</li>
                        <li class="list-group-item"><strong>Age: </strong>{data.age}</li>
                        <li class="list-group-item"><strong>Email: </strong>{data.email}</li>
                        <li class="list-group-item"><strong>DOB: </strong>{data.dob}</li>
                        <li class="list-group-item"><strong>Course: </strong>{data.course}</li>
                    </ul>
                    <div class="card-body">
                        <Link to={`/createstudent/${data.id}`} type="button" class="btn btn-primary">Edit</Link> &nbsp; &nbsp;
                        <button type="button" class="btn btn-danger" onClick={()=>handleDelete(data.id)}>Delete</button>
                    </div>
                    </div>                
                )
                )}
                     </div>
                 </div>
            </div>
    )
}

export default GetStudent;