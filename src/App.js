import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from "./Components/Login";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css";
import Dashboard from "./Components/Dashboard";
import GetStudent from "./Components/Student/getStudent";
import CreateStudent from "./Components/Student/createStudent";
import CreateTeacher from './Components/Teacher/createTeacher';
import GetTeacher from './Components/Teacher/getTeacher';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/getstudent" element={<GetStudent/>}/>
        <Route path="/createstudent" element={<CreateStudent/>}/>
        <Route path="/createstudent/:studentid" element={<CreateStudent/>}/>
        <Route path="/createteacher" element={<CreateTeacher/>}/>
        <Route path="/createteacher/:teacherid" element={<CreateTeacher/>}/>
        <Route path="/getteacher" element={<GetTeacher/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
