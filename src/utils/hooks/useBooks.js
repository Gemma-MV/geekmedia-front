// Importamos los hooks useEffect y useState
import { useEffect, useState } from "react";
// Importamos el hook de navegacion del archivo useNavigation.js que es el que contiene la libreria y la funcion para trabajar con enrutado
import { useNavigation } from "./useNavigation.js";
// Importamos el archivo useFetch que contiene la captura de errores y la solicitud de conexion HTTP
import useFetch from "./useFetch.js";

// Creamos un hook personalizado que vamos a exportar
export const useBooks = () => {
// Definimos la constante books con su actualizacion setbooks que recogera la actualizacion y el hook useState que manejara el estado de books
const [books, setbooks] = useState([]);
//Almacenamos los posibles errores y su actualizacion que ocurran en el fetch
const { fetchError, fetchData } = useFetch();
// Almacenamos en la constante navigate la funcion useNavigation para poder utilizar el enrutado
const navigate = useNavigation();

// Usamos el hook useEffect para poder realizar efectos secundarios en los componentes
useEffect(() => {
    // Aqui guardamos en la constante fetchBooks el fetch que se utilizará para obtener datos de libros desde el servidor
    const fetchBooks = async () => {
        try {
            // Guardamos en response el endpoint especificado ('/books/all-books') que realizara la solicitud HTTP y esperara la respuesta
            const response = await fetchData({
                endpoint: '/books/all-books'
            })
            console.log('Response:', response);
            // Si existe una respuesta y la respuesta es mayor que 0, es decir, que contiene datos le decimos que actualice books con setbooks que contendra la respuesta
            if (response && response.length > 0) {
                setbooks(response);
            } else {
                // Sino que nos muestre en la consola que hay un error y nos de el error con fetchError
                console.error("Error en la respuesta del servidor:", fetchError);
            }
        // Si no puede hacer el try que nos capture el error y nos lo muestre en consola
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };
    // Hacemos la llamada a la funcion fetchBooks que contiene los datos de los libros que estan en el endpoint /books/all-books
    fetchBooks();
}, []);


// El array vacío ([]) indica que el efecto solo debe ejecutarse una vez, cuando el componente se monte
// Retornamos un objeto que contiene books (el estado con la lista de libros) y navigate para el enrutado
return { books, navigate };
};