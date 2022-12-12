import React,{useState} from "react";
import {Collapse} from "bootstrap";
import {Link} from "react-router-dom";
// import undrawRocketImage from "../img/undraw_rocket.svg"

function Sidebar(){
    const[toggleComponents, setToggleComponents] = useState(false);
    const[toggleUtilities, setToggleUtilities] = useState(false);
    const[togglePages, setTogglePages] = useState(false);

    const handleCollapseComponent = () => {
        setToggleComponents(!toggleComponents);
        var myCollapse = document.getElementById("collapseComponents")
        var bsCollapse  = new Collapse(myCollapse);
        toggleComponents ? bsCollapse.show() : bsCollapse.hide();
    }

    const handleToggleUtilities = () => {
        setToggleUtilities(!toggleUtilities);
        var myCollapse = document.getElementById("collapseUtilities")
        var bsCollapse  = new Collapse(myCollapse);
        toggleComponents ? bsCollapse.show() : bsCollapse.hide();
    }

    const handleTogglePages = () => {
        setTogglePages(!togglePages);
        var myCollapse = document.getElementById("collapsePages")
        var bsCollapse  = new Collapse(myCollapse);
        toggleComponents ? bsCollapse.show() : bsCollapse.hide();
    }
    return(
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* <!-- Sidebar - Brand --> */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Student Teacher Management</div>
            </a>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li class="nav-item active">
                <Link class="nav-link" to="/dashboard">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div class="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" onClick={handleCollapseComponent} data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    {/* <i class="fas fa-fw fa-cog"></i> */}
                    <span style={{cursor:"pointer"}}>Students</span>
                </a>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li class="nav-item">
                <a class="nav-link collapsed" onClick={handleToggleUtilities} data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    {/* <i class="fas fa-fw fa-wrench"></i> */}
                    <span style={{cursor:"pointer"}}>Teachers</span>
                </a>
            </li>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider"/>
            </ul>
           )
}

export default Sidebar;