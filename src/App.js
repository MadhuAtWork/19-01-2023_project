import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import AssignTask from './pages/AssignTask';
import MyTaskDashboard from './pages/MyTaskDashboard';
import ApplicationDetails from './pages/ApplicationDetails';
import CrecUpdate from './pages/CrecUpdate';
import Migrate from './pages/Migrate';
import AddMeetingMaster from './pages/AddMeetingMaster';
import MyTaskDetailsDashboard from './pages/MyTaskDetailsDashboard';
import Section from './pages/Section';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} ></Route>
        <Route path="/index" element={<Dashboard />} >
          <Route path="/index/assignTask" element={<AssignTask />} />
          <Route path="/index/myTask" element={<MyTaskDashboard />} />
          <Route path="/index/addMeetingMaster" element={<AddMeetingMaster />} />
          <Route path="/index/crecBulkUpdate" element={<CrecUpdate />} />
          <Route path="/index/migrate" element={<Migrate />} />
          <Route path="/index/nfd" element={<Migrate />} />
          <Route path="/index/oppAuditTrail" element={<Migrate />} />
          <Route path="/index/meetingAuditTrail" element={<Migrate />} />
          <Route path="/index/appAuditTrail" element={<Migrate />} />
          <Route path="/index/addUser" element={<AddMeetingMaster />} />
          <Route path="/index/MyTask/MyTaskDetails" element={<MyTaskDetailsDashboard/>} >
          <Route path="/index/MyTask/MyTaskDetails/ApplicationDetails" element={<MyTaskDetailsDashboard/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);