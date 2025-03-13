import { useEffect, useState } from "react";
import { useNavigation } from "./useNavigation.js";
import useFetch from "./useFetch.js";
// import jwt from 'jsonwebtoken';

export const useForm = () =>{
    const [user, setuser] = useState([]);
    const { fetchError, fetchData } = useFetch();
    const navigate = useNavigation();

    // const token = localStorage.getItem('token');
    // const decoded = jwt.decode(token);
    // if (decoded.isAdmin) {
    //     // Permitir acceso a rutas de administrador
    // }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetchData({
                    endpoint: '/user/login'
                })
                console.log('Response:', response);
                if (response && response.length > 0) {
                    setuser(response);
                } else {
                    console.error("Error en la respuesta del servidor:", fetchError);
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };
        fetchUser();
    }, []);
    
    return { user, navigate };
}