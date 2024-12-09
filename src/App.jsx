import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Doctor from './Component/Doctor/Doctor';
import DoctorDetails from './Component/DoctorDetails/DoctorDetails';
import DoctorApoint from './Component/DoctorApoint/DoctorApoint';
import ServiceDetailsCard from './Component/ServiceDetailsCard/ServiceDetailsCard';
import ServiceForm from './Component/ServiceForm/ServiceForm';
import CavinForm from './Component/CavinForm/CavinForm';
import Cavin from './Component/Cavin/Cavin';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';



const App=()=>{

  return(

    <div>
      <Navbar></Navbar>

      <div>
        
       
        <Routes>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/Cavin' element={<Cavin></Cavin>}></Route>
      <Route path='/serviceForm/:formId' element={<ServiceForm></ServiceForm>}></Route>
      <Route path='/serviceDetailsCard/:serviceId' element={<ServiceDetailsCard></ServiceDetailsCard>}></Route>
      <Route path='/doctor' element={<Doctor></Doctor>}></Route>
      <Route path='/doctorApoint/:doctorId' element={<DoctorApoint></DoctorApoint>}></Route>
      <Route path='/doctorDetails/:doctorId' element={<DoctorDetails></DoctorDetails>}></Route>
      <Route path='/cavinForm/:cavinId' element={<CavinForm></CavinForm>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
        
      </Routes>
       
      
      </div>
      

      <Footer></Footer>
      
    </div>
  )

}

export default App;