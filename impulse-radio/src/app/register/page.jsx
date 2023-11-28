"use client"

import React , {useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FaRadio } from "react-icons/fa6";
import toast from 'react-hot-toast';

export default function Register (){

    const [user , setUser] = useState({
        email:"",
        password:""
    })
    return (
        <div className="flex flex-col gap-10 items-center  bg-gray-100 w-[350px] h-[350px]  mx-auto mt-20">
            <div className=' flex justify-center p-5 w-full bg-color4'>
                <FaRadio className='text-white text-2xl mr-6' />
                <h1 className="text-white  font-bold text-center   ">
                    REGISTER USER 
                </h1>
            </div>
         <form  className= "flex flex-col gap-4 max-w-sm " >
         <input
                className = "border border-gray-200 rounded py-1 px-2 outline-none"
                type="email"
                placeholder=' 👤 Name'
               />
            <input
                className = "border border-gray-200 rounded py-1 px-2 outline-none"
                type="email"
                placeholder=' 📩 Email'
               />

            <input
                className = "border border-gray-200 rounded py-1 px-2 outline-none"
                type="password"
                placeholder='🔑 Password'
                

             />
            <button 
                className="bg-color3 py-1 text-white rounded shadow"
            >
                Registrarse
            </button>
        
         </form>
        
    </div>
    )
}