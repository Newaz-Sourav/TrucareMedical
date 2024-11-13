import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard/ServiceCard'

const Services=()=>{

    const[serviceData,setserviceData]=useState([])

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/nazim725/Services/posts')
        .then(res=>res.json())
        .then(data=>setserviceData(data))
    }),[]
    return(
       <div class="grid grid-cols-1 gap-2 p-10 sm:grid-cols-2 sm:gap-4 sm:p-12 md:grid-cols-2 md:gap-4 md:p-14 lg:grid-cols-2 lg:gap-4 lg:p-12 xl:grid-cols-3 xl:gap-6 xl:p-14 2xl:grid-cols-4 2xl:gap-6 2xl:p-14">
        {
            serviceData.map(item=><ServiceCard key={item.id} jinish={item}></ServiceCard>)
        }
       </div>
    )
}

export default Services;