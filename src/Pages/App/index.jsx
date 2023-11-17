import { useRoutes , BrowserRouter } from 'react-router-dom'
import { NavigationProvider } from '../../Context/index.jsx';
import Navbar from "../../Components/Navbar";
import Place from "../../Components/Place.jsx";
import Home from '../Home';
import TouristPlaces from '../TouristPlaces';
import Cities from '../Cities';
import Biography from '../Biography';

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