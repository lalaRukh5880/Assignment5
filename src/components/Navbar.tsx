"use client";
import React from "react";

const Navbar =() => {
return (
    <div>
        <nav className="bg-black text-white h-15 py-5 px-5 flex justify-between items-center">
        
            <div>
                <img
                src="black logo.png" 
                className="w-15 h-20"
                />
                <h1 className='text-2xl font-semibold'>
                    <a href="#!"> </a>
                </h1>
            </div>
            <div>
                <ul className='flex space-x-4'>

                <li><a href="/" className="hover:text-red-600"> Search</a></li>
                    <li><a href="" className="hover:text-red-600"> New Cars</a></li>
                    <li><a href="" className="hover:text-red-600"> Auto Store</a></li>
                    <li><a href="" className="hover:text-red-600"> Bikes</a></li>
                    <li><a href="" className="hover:text-red-600"> Videos</a></li>
                   <li><a href="" className="hover:text-red-600"> Forms</a></li>
                    <li><a href="" className="hover:text-red-600"> Contact Us</a></li>
                    <li><a href="" className="hover:text-red-600"> Booking</a></li>
                    

                    
                    
                </ul>
            </div>
            <div>
                <ul className='flex space-x-2'>
                    <li className="px-4 py-6"><a href="#! "></a>Login</li>
                    <li className="px-4 py-6"><a href="#!"></a>Sign up</li>
                    <button className="py-4 px-8 bg-red-600 text-white"> Post an Ad</button>
                </ul>
            </div>

            
        </nav>
        

    </div>
)
}
export default Navbar
