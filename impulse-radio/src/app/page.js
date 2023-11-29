"use client"
import { useEffect } from "react";
import {signOut } from "firebase/auth";
import {auth} from "../firebase";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import {loginUser } from '../Redux/userSlice';
export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const valueLogin = useSelector(state => state.userRegister.valueLogin);
  console.log("El REDUCER ES " , valueLogin);


  useEffect(() => {
    // Verifica el valor de valueLogin y redirige si es necesario
    if (!valueLogin) {
      
            router.push('/login'); 
           
    }
  }, [valueLogin, router]);

  const handleSignOut = async  ()=>{
    try {
      await signOut(auth);
      // Aquí puedes realizar acciones adicionales después de cerrar sesión si es necesario
      console.log('Usuario cerró sesión exitosamente.');
      await dispatch(loginUser(false))
      toast.promise(
        Promise.resolve('Cerraste Sesion!'), // Resuelve la promesa cuando la notificación se cierra
        {
          loading: 'Cargando...',
          success: (resolved) => {
            router.push('/login'); // Redirige a la página 'home' después de que la notificación se cierre
            return resolved;
          },
        }
      );
    
  

    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  }
  return (
    <div>
    {valueLogin ? (
      <div>
        <h1>Estas en Home</h1>
        <button
          onClick={handleSignOut}
        >Log Out</button>
      </div>
    ) : (
      <div>
          <p>Uino no estas Logueado</p>
      

      </div>
    )}
  </div>
);
  
  
}
