import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
// import { Line } from 'react-chartjs-2';
// import { Doughnut } from 'react-chartjs-2';
// import unDrawPostingPhoto from "../img/undraw_posting_photo.svg";



function Dashboard(){
    return(
        <div id="wrapper">
            <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">
                <Topbar/>
        <div class="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Student</h5>
                            <p class="card-text">To manage student data, click on the button below</p>
                            <Link to="/getstudent" href="#" class="btn btn-primary">Get Student Data</Link>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Teacher</h5>
                            <p class="card-text">To manage teacher data, click on the button below</p>
                            <Link to="/getteacher" href="#" class="btn btn-primary">Get Teacher Data</Link>
                        </div>
                        </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard;