// Importamos el hook useNavigate desde la librería react-router-dom. useNavigate es un hook que proporciona la funcionalidad para navegar programáticamente en una aplicación React que usa enrutamiento (routing)
import { useNavigate } from "react-router-dom";

// Metemos el useNavigate en una funcion exportable para poder utilizarla en otros componentes y asi poder trabajar con enrutamiento
export function useNavigation(){
    const navigate = useNavigate();
    return navigate;
}