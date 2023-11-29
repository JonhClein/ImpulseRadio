"use client"
import React, { useState } from 'react';
import { FaRadio } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/userSlice';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { v4 as uuidv4} from  "uuid"
import {auth} from "../../firebase"
import { getAuth , signInWithEmailAndPassword} from "firebase/auth";

import { useRouter } from 'next/navigation';

export default function Login ( ){
    const router = useRouter();
    const dispatch = useDispatch();

    const [user , setUser] = useState({
        email : "" ,
        password : "",
     });

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const setDataHandler = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };

    

      const handleLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Usuario inició sesión exitosamente
            const user = userCredential.user;
            console.log("CORRECTO BIEN LOGIN ")
          })
          .catch((error) => {
            // Manejo de errores
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("El error es " , errorMessage)
          });
      };

      const onSubmit = async (e) =>{
        e.preventDefault();
        console.log('Por el submit');
        try{ 
            console.log( "EL auht es " , auth);
            console.log("El email fue " , user.email);
            console.log("la clave es " , user.password)
            await signInWithEmailAndPassword(auth, user.email, user.password)
             
         // Signed in 
           console.log("Correcto login ")
         // ...
         }catch(error){
             console.log("Error en login 2  " , error)
         }

      }


    return (
        <div className="flex flex-col gap-10 items-center  bg-gray-100 w-[350px] h-[350px]  mx-auto mt-20">
      <div className="flex justify-center p-5 w-full bg-color5">
        <FaRadio className="text-white text-2xl mr-6" />
        <h1 className="text-white  font-bold text-center   ">Login USER</h1>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm ">
        
        <input
          className="border border-gray-200 rounded py-1 px-2 outline-none"
          type="email"
          name="email"
          placeholder="📩 Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-200 rounded py-1 px-2 outline-none"
          type="text"
          name="password"
          placeholder="🔑 Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-color6 py-1 text-white rounded shadow">Login</button>
      </form>
    </div>
    )
}