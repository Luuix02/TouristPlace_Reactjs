import { useRoutes , BrowserRouter } from 'react-router-dom'//Se usa para definir las rutas del proyecto.
import { NavigationProvider } from '../../Context/index.jsx';//Se usa para manejar el estado de navegación en el proyecto.
import Navbar from "../../Components/Navbar";// Se importa el componente Navbar como parte del menu o barra de navegación dentro del proyecto.
import Place from "../../Components/Place.jsx";
import Home from '../Home';
import TouristPlaces from '../TouristPlaces';
import Cities from '../Cities';
import Biography from '../Biography';
//Se hace una función de flecha llamada AppRoutes. En esta función, se utiliza el hook useRoutes para definir las rutas del proyecto.
const AppRoutes = () => {
    let routes = useRoutes ([
        {path: '/Cities' , element : <Cities/>},
        {path: '/TouristPlaces' , element : <TouristPlaces/>},
        {path: '/Home' , element : <Home/>},
        {path: '/Biography' , element : <Biography/>}

    ])
    return routes
}


const App = () => {
    return (
        <BrowserRouter>
        <NavigationProvider>
        <Navbar/>
        <Place/>
        <AppRoutes/>
        </NavigationProvider>
        </BrowserRouter>
    )
}
export default App