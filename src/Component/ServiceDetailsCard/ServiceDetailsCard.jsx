import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetailsCard=()=>{

    const {serviceId}=useParams()

    const [serviceSet,setserviceSet]=useState({})

    const url=`https://my-json-server.typicode.com/newaz-sourav/ServicesApi/posts/${serviceId}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setserviceSet(data))
    }),[serviceId]
    
    return(
        <div class="flex justify-center p-8">

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={serviceSet.img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{serviceSet.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{serviceSet.subtitle}</p>
        <p>USD: {serviceSet.price}</p>
        <br />
        <p>{serviceSet.description}</p>

        <br />

        <Link to={`/serviceForm/${serviceSet.id}`}><div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
            Place Order
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </div>
        </Link>
    </div>
</div>

        </div>
    )
}

export default ServiceDetailsCard
