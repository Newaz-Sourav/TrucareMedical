import React from 'react';

const Footer=()=>{
    return(
        <div class="flex flex-col gap-2 justify-center bg-zinc-800 sm:flex-col sm:gap-2 sm:justify-center md:flex-col md:gap-2 md:justify-center lg:flex-row lg:gap-4 lg:justify-center xl:flex-row xl:gap-6 xl:justify-center 2xl:flex-row 2xl:gap-6 2xl:justify-center">
            <div>
               
<div class="block max-w-sm p-6">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">About US</h5>
<p class="font-normal text-lg text-gray-700 text-white">The TruCare Medical and Diagnostic Center started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.</p>
</div>

            </div>

            <div>
               
<div class="block max-w-sm p-6 ">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Contact Info</h5>


                 <h3 class="text-white"><i class="fa-solid fa-location-crosshairs"></i> 23/2, Khilji Road, Block-B, Shyamoli, Dhaka-1207</h3>
                 <h3 class="text-white"><i class="fa-regular fa-envelope"></i> info@tru_caremedical.com</h3>

                 <h1 class="text-white"><i class="fa-solid fa-phone"></i> 1066</h1>

</div>

            </div>


            <div class="block max-w-sm p-6 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">Navigation</h5>
                <a href="/" class="text-xl font-medium text-white"><i class="fa-solid fa-chevron-right"></i> Home</a> <br />
                <a href="/about" class="text-xl font-medium text-white"><i class="fa-solid fa-chevron-right"></i> About</a> <br />
                <a href="/services" class="text-xl font-medium text-white"><i class="fa-solid fa-chevron-right"></i> Service</a> <br />
                <a href="/doctor" class="text-xl font-medium text-white"><i class="fa-solid fa-chevron-right"></i> Doctors</a> <br />
                
            </div>

            
        </div>
    )
}

export default Footer