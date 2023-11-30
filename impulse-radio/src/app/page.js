"use client"
import { useEffect } from "react";
import {signOut } from "firebase/auth";
import {auth} from "../firebase";
import {useState} from "react";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import {loginUser } from '../Redux/userSlice';
import Main from "@/components/Main"
  
  
export default function  Home () {
  const dispatch = useDispatch();
  const router = useRouter();
  const valueLogin = useSelector((state) => state.userRegister.valueLogin);
  console.log("El REDUCER ES ", valueLogin);
  const [currentPage, setCurrentPage] = useState(1);
  const divsPerPage = 6; // 2 filas x 3 columnas
  const [isLoading, setIsLoading] = useState(true)
  const totalDivs = 20;
  const totalPages = Math.ceil(totalDivs / divsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    console.log("Se hizo clik en boton Siguiente");
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    console.log("Se hizo click en el boton Anterior");
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Usuario cerró sesión exitosamente.');
      await dispatch(loginUser(false));
      toast.promise(
        Promise.resolve('Cerraste Sesión!'),
        {
          loading: 'Cargando...',
          success: (resolved) => {
            // Verificar si se está ejecutando en el lado del cliente antes de redirigir
            if (typeof window !== "undefined") {
              router.push('/login');
            }
            return resolved;
          },
        }
      );
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  useEffect(() => {
    // Cargar el estado almacenado en localStorage
    const storedState = JSON.parse(localStorage.getItem('userRegister'));
    if (storedState) {
      dispatch(loginUser(storedState.valueLogin));
    }
  }, [dispatch]);

  // Redirigir a /login si no está autenticado
  useEffect(() => {
    if (!valueLogin && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [valueLogin, router]);

  // Agregar un efecto para manejar la carga inicial
  useEffect(() => {
    setIsLoading(false); // Marcar la carga inicial como completa
  }, []);

  // Renderiza Main solo si está autenticado
  return (
    <div>
      {!isLoading && valueLogin ? (
        <Main
          handleSignOut={handleSignOut}
          currentPage={currentPage}
          divsPerPage={6}
          totalPages={Math.ceil(20 / 6)}
          handleClickPrev={() => setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage))}
          handleClickNext={() => setCurrentPage((prevPage) => (prevPage < 4 ? prevPage + 1 : prevPage))}
        />
      ) : (   
         <div className="flex justify-center items-center">
            <h1 className="mt-[200px] text-2xl">Autenticando...</h1>
         </div>
         )}
    </div>
  );
};


  

  

  

