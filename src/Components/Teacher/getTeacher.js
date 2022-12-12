import React, {useState, useEffect} from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import axios from "axios";
import { Link } from "react-router-dom";


function GetTeacher(){
    const[teacherData,setTeacherData] = useState([]);
    useEffect(()=>{
        async function getData(){
        const response = await axios.get("https://6341084520f1f9d7996b15ce.mockapi.io/teacherdata")
        setTeacherData(response.data)
      }
      getData();
    },[]);
    
    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure want to delete the selected data?")
        if(confirm){
        const response = await axios.delete(`https://6341084520f1f9d7996b15ce.mockapi.io/teacherdata/${id}`);
        const teacher = teacherData.filter((row) => row.id !== id);
        setTeacherData(teacher);
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
                        &nbsp; &nbsp;<Link to="/createteacher" type="button" class="btn btn-success">+ Create Teacher</Link>
                        </div>
                {teacherData.map((data)=>(                  
                    <div class="card" key={data.id} style={{width: "18rem", marginLeft:"100px", marginTop:"50px", display:"inline-block"}}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Name: </strong>{data.name}</li>
                        <li class="list-group-item"><strong>Age: </strong>{data.age}</li>
                        <li class="list-group-item"><strong>Email: </strong>{data.email}</li>
                        <li class="list-group-item"><strong>DOB: </strong>{data.experience}</li>
                    </ul>
                    <div class="card-body">
                        <Link to={`/createteacher/${data.id}`} type="button" class="btn btn-primary">Edit</Link> &nbsp; &nbsp;
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

export default GetTeacher;