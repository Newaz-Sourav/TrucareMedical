import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DoctorDetails=()=>{

    const {doctorId}=useParams()

    const [doctor,setDoctorinfo]=useState({})

    const url=`https://my-json-server.typicode.com/nazim725/Doctors/posts/${doctorId}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDoctorinfo(data))
        .catch((error) => console.error("Error fetching doctor data:", error));
    }),[doctorId]

    return(
        <div class="flex flex-col justify-center gap-4 p-4 sm:flex-col sm:gap-4 sm:p-4 md:flex-col md:gap-4 md:p-6 lg:flex-row lg:gap-4 lg:p-4 xl:flex-row xl:gap-4 xl:p-8 2xl:flex-row 2xl:gap-6 2xl:p-14">
            <div class="w-5/6 flex justify-center">
                <img class="w-full h-5/6" src={doctor.img} alt="" />
            </div>

            <div >
                    <h3 class="text-lg font-bold sm:text-lg md:text-lg lg:text-lg xl:text-2xl 2xl:text-6xl">{doctor.name}</h3>
                    <br />
                    <h5 class="text-md font-medium sm:text-md md:text-md lg:text-md xl:text-xl 2xl:text-4xl">{doctor.Designation}</h5>
                    <br />
                    <p class="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl">Email:{doctor.email}</p>
                    <br />
                    <p class="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl">Cell:{doctor.phone}</p>
                    <br />
                    <p class="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl">Address:{doctor.address}</p>
                    <br />
                    <p class="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl">{doctor.description}</p>
                    <br />
                    <p class="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl">Consultation Fee: ${doctor.fee}</p>
                    <br />

                    <Link to={`/doctorApoint/${doctor.id}`}><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg">Appointment {doctor.name}</button>
                    </Link>
                    
            </div>

           
        </div>
    )
}

export default DoctorDetails;