import Layout from "../../Components/Layout"
import Card from '../../Components/Card';//Se importó el componente Card para almacenar el consumo de la API. 
import { useEffect, useState } from 'react';
import Slider from 'react-slick';// Se importó el componente Slider de la librería react-slick, que es una librería para crear carruseles de imágenes.
import 'slick-carousel/slick/slick.css';//Importa estilos CSS básicos para el componente Slider.
import 'slick-carousel/slick/slick-theme.css';

function TouristPlaces() {
  const [items, setItems] = useState(null);
//Se hace un estado llamado items utilizando el hook useState. Items se inicializa como null, y setItems es la función para actualizar ese estado.
  useEffect(() => {
    fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Tourist_Place/')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
//Se usa el hook useEffect para realizar una llamada a la API cuando el componente se inserta en el DOM y se vuelve visible a los demás usuarios.

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

  };
//Se hace un objeto settings que contiene opciones de configuración para el componente Slider. Esto incluye la cantidad de puntos (dots), si es infinito, la velocidad, la cantidad de elementos a mostrar y la cantidad de elementos para desplazarse.
  return (
    <Layout>
      <div className='lg:max-w-7xl xl:max-w-8xl 2xl:mt-[-630px] mx-auto mt-[-250px] '>
        <Slider {...settings}>
          {items?.map((item) => (
            <div key={item.id}>
              <Card data={item} />
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  );
}
//Se renderiza el componente Slider con las opciones de configuración definidas en settings. Luego se utiliza el método map para iterar sobre los elementos en el estado items (obtenidos de la API). Se renderiza un componente Card para cada elemento.

export default TouristPlaces;