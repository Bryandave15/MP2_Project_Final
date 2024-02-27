// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainDashboard from './components/projectDashboard';
import React from 'react'; 
import Home from './components/home'
import Drawing from './pages/drawing';
import InspectionList from './pages/inspectFinal'
import Login from './pages/login';
import Meeting from './pages/meetings';
import Structural from './pages/innerpage/drawingSubpages/structural';
import Schedule from './pages/schedule';
import Report from './pages/reports';
import Register from './pages/register';
import ForgotPassword from './pages/forgotPass';
import ProfilePage from './pages/innerpage/dashboardpages/useracoount';





const MainComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="home" element={<Home />} />
            <Route path="inspection" element={<InspectionList />} /> 
            <Route path="drawing" element={<Drawing />} />  
            <Route path="login" element={<Login />} /> 
            <Route path="login" element={<Login />} /> 
            <Route path="meeting" element={<Meeting />} /> 
            <Route path="structural" element={<Structural />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="report" element={<Report />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="profile-page" element={<ProfilePage />} />

            
        </Routes>
    </BrowserRouter>


  );
}

export default MainComponent;

