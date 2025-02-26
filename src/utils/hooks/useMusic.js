import { useEffect, useState } from "react";
import { useNavigation } from "./useNavigation.js";
import useFetch from "./useFetch.js";

export const useMusic = () => {

const [music, setmusic] = useState([]);
const { fetchError, fetchData } = useFetch();
const navigate = useNavigation();

useEffect(() => {

    const fetchMusic = async () => {

        try {
            const response = await fetchData({
                endpoint: '/music/all-music'
            })
            console.log('Response:', response);
            if (response && response.length > 0) {
                setmusic(response);
            } else {
                console.error("Error en la respuesta del servidor:", fetchError);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };
    fetchMusic();
}, []);

return { music, navigate };
};