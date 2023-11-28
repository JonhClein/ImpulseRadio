 "use client"
import React, { useState } from 'react';
import { FaRadio } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/userSlice';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
export default function Register() {
  const userRegister = useSelector((state) => state.userRegisterReducer);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const setDataHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    console.log('Por el submit');

    try {
      console.log('El user es en register', user);
      await dispatch(registerUser(user))
      toast("registro bueno");
      

    } catch (error) {
      console.error('Error en onSubmit de register', error);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center  bg-gray-100 w-[350px] h-[350px]  mx-auto mt-20">
      <div className="flex justify-center p-5 w-full bg-color4">
        <FaRadio className="text-white text-2xl mr-6" />
        <h1 className="text-white  font-bold text-center   ">REGISTER USER</h1>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-4 max-w-sm ">
        <input
          className="border border-gray-200 rounded py-1 px-2 outline-none"
          type="text"
          name="name"
          placeholder="👤 Name"
          onChange={setDataHandler}
        />
        <input
          className="border border-gray-200 rounded py-1 px-2 outline-none"
          type="email"
          name="email"
          placeholder="📩 Email"
          onChange={setDataHandler}
        />
        <input
          className="border border-gray-200 rounded py-1 px-2 outline-none"
          type="password"
          name="password"
          placeholder="🔑 Password"
          onChange={setDataHandler}
        />
        <button className="bg-color3 py-1 text-white rounded shadow">Registrarse</button>
      </form>
    </div>
  );
}
