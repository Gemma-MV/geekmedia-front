import { useEffect, useState } from "react";
import { useNavigation } from "./useNavigation.js";
import useFetch from "./useFetch.js";

export const useMovies = () => {

const [movies, setmovies] = useState([]);
const { fetchError, fetchData } = useFetch();
const navigate = useNavigation();

useEffect(() => {

    const fetchMovies = async () => {

        try {
            const response = await fetchData({
                endpoint: '/movies/all-movies'
            })
            console.log('Response:', response);
            if (response && response.length > 0) {
                setmovies(response);
            } else {
                console.error("Error en la respuesta del servidor:", fetchError);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };
    fetchMovies();
}, []);

return { movies, navigate };
};