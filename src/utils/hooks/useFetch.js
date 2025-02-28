// Importamos el hook useState para poder manejar el estado en los componentes
import { useState } from 'react';

const useFetch = () => {
    // Aqui almacenamos cualquiere error que ocurra durante la solicitud de datos ( que ocurrira en useState) en fetchError y la actualizacion de lo sucedido la traemos con setFetchError y lo iniciamos como null ya que aun no ha cambiado de estado
    const [fetchError, setFetchError] = useState(null);
    const server = "localhost";
    const port = "3001";

    // Aqui hacemos una solicitud HTTP con los parametros endpoint, method, authorization que iniciamos en null pero despues contendra el token de autorizacion y body que sera el cuerpo de la solicitud
    const fetchData = async ({ endpoint = "/home", method = "GET", authorization = null, body = {} }) => {
    // if (isLoading) return; // Evitar múltiples consultas simultáneas
    // Reiniciamos el estado de fetchError a null para asegurarnos de que los errores anteriores no interfieran
    setFetchError(null);

    try {
        // Definimos los encabezados de la solicitud HTTP. El encabezado Content-Type se establece en application/json para indicar que estamos enviando datos en formato JSON
        const headers = {
            "Content-Type": "application/json",
        };

        // Aqui si se proporciona un token de autorización, se añade al encabezado de la solicitud
        if (authorization) {
            headers["Authorization"] = authorization;
        }

        // Aqui creamos un objeto fetchOptions (las opciones que contendra el fetch) que incluye el método HTTP y los encabezados que contienen el token
        const fetchOptions = {
            method,
            headers,
        };
        
        // Si el método HTTP no es GET, añadimos el cuerpo de la solicitud (convertido a JSON) a fetchOptions
        if (method !== "GET") {
            fetchOptions.body = JSON.stringify(body);
        }

        // Usamos fetch para realizar la solicitud HTTP al servidor y su puerto, utilizando el endpoint y fetchOptions que contienen el método, encabezados y cuerpo definidos
        const response = await fetch(`http://${server}:${port}/geekmedia${endpoint}`, fetchOptions);
        console.log('Fetching data from:', `http://${server}:${port}/geekmedia${endpoint}`);

        // Aqui si la respuesta no es exitosa nos retornara un array vacio 
        if (!response.ok) {
            // return [];
            throw new Error('Network response was not ok');
        }
        // Si la respuesta es exitosa la convertimos a un json y la retornamos 
        const data = await response.json();
        return data;
        // Si ocurre un error lo capturamos, actualizamos el fetchError con setFetchError con el mensaje del error y lanzamos el error con throw err
        } catch (err) {
            setFetchError(err.message);
            console.error("Fetch error:", err);
            throw err;
        }
    };
    // Retornamos el hook con el estado del fetchError y la función fetchData que se encarga de realizar una solicitud HTTP al servidor para obtener o enviar datos
    return { fetchError, fetchData };
};
// Exportamos la funcion useFetch que contiene la captura de errores y la solicitud de conexion HTTP
export default useFetch;