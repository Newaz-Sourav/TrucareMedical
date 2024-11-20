import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Doctor=()=>{
    const [Data,setData]=useState([])

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/Newaz-Sourav/DoctorApi/post')
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])

    return(
        <div class="grid grid-cols-1 gap-4 p-8 sm:grid-cols-1 sm:gap-4 sm:p-10 md:grid-cols-2 md:gap-4 md:p-12 lg:grid-cols-2 lg:gap-4 lg:p-10 xl:grid-cols-3 xl:gap-4 xl:p-12 2xl:grid-cols-3 2xl:gap-6 2xl:p-20">
            {
                Data.map(data=><Card key={data.id} item={data}></Card>)
            }
        </div>
    )


}

export default Doctor