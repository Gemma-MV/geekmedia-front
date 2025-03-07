import { useEffect, useState } from "react";
import { useNavigation } from "./useNavigation.js";
import useFetch from "./useFetch.js";

export const useMusic = () => {

const [musicList, setmusicList] = useState([]);
const { fetchError, fetchData } = useFetch();
const navigate = useNavigation();

useEffect(() => {

    const fetchMusicList = async () => {

        try {
            const response = await fetchData({
                endpoint: '/music/all-music'
            })
            console.log('Response:', response);
            if (response && response.length > 0) {
                setmusicList(response);
            } else {
                console.error("Error en la respuesta del servidor:", fetchError);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };
    fetchMusicList();
}, []);

return { musicList, navigate };
};