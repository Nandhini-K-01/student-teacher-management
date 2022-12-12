import React, {useState, useEffect} from "react";
import { Navigate, useNavigate, useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import axios from "axios";

function CreateStudent(){
  let studentid = useParams();
  const navigate = useNavigate()
  // console.log(studentid.studentid)
    let formValues={ 
        id:"",
        name:"",
        age:"",
        email:"",
        dob:"",
        course:"",
        error:{
          name:"",
          age:"",
          email:"",
          dob:"",
          course:"",
        }
      }

    const[formData,setFormData] = useState(formValues)
    const[studentData,setStudentData] = useState([]);

    useEffect(()=>{
      async function getData(){
      const response = await axios.get(`https://6341084520f1f9d7996b15ce.mockapi.io/studentdata/${studentid.studentid}`)
      setFormData(response.data)
    }
    getData();
  },[]);
    // const onPopulateData = (id) => {
    //   const selectedData = studentData.filter((row)=>row.id===id);
    //   setFormData({...formData,...selectedData});
    //   }
      
    // {studentid ? onPopulateData(studentid) : <></>}
    
    const handleChange= (e) =>{
        let error = {...formData.error}
        if(e.target.value === ""){
        error[e.target.name] = `${e.target.name} is required`
        }else{
          error[e.target.name] = ""
        }
        setFormData({...formData,[e.target.name]:e.target.value,error}) //error:error
      }

      const handleSubmit= async (e) =>{
        // console.log("came")
          e.preventDefault();
          const errKeys = Object.keys(formData).filter((key)=>{
            if(formData[key] === "" && key!="error" && key!== "id"){
              return key
            }});
            if(errKeys.length>=1){
              alert("Please fill all the values and then click submit")
            }else{
              if(formData.id){
                //Update
                const response = await axios.put(`https://6341084520f1f9d7996b15ce.mockapi.io/studentdata/${formData.id}`,{
                name: formData.name,
                age: formData.age,
                email: formData.email,
                dob: formData.dob,
                course: formData.course,
              });
                let users = [...studentData]
                let index = studentData.findIndex((row)=>row.id===formData.id)
                users[index] = response.data; //or users[index] = formData;
                setStudentData(users);
                navigate("/getstudent")
            }
            else{
              //Create
                const response = await axios.post("https://6341084520f1f9d7996b15ce.mockapi.io/studentdata",{
                name: formData.name,
                age: formData.age,
                email: formData.email,
                dob: formData.dob,
                course: formData.course,
              })
              setStudentData([...studentData,response.data])
              navigate("/getstudent")
            }
              }
              setFormData(formValues) //for clearing values in form
            }
    return(
        <div>
            <div id="wrapper">
                    <Sidebar/>
            <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                    <Topbar/> 
        <div class="col-md-3" style={{marginLeft: "450px", marginTop:"50px"}}> 
        <div class="card">
               <form style={{padding: "20px"}}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{width:"50px"}}>Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    onChange={(e)=>handleChange(e)} value={formData.name} name="name"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{width:"50px"}}>Age</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     onChange={(e)=>handleChange(e)} value={formData.age} name="age"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{width:"50px"}}>Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     onChange={(e)=>handleChange(e)} value={formData.email} name="email"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{width:"50px"}}>DOB</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    onChange={(e)=>handleChange(e)} value={formData.dob} name="dob"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style={{width:"50px"}}>Course</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     onChange={(e)=>handleChange(e)} value={formData.course} name="course"/>
                </div>
                <Link to="/getstudent" type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</Link>
            </form>
               </div>
             </div>
           </div>
         </div>
      </div>
  </div>
    )
}

export default CreateStudent;