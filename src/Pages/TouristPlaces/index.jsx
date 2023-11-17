import Layout from "../../Components/Layout"
import Card from '../../Components/Card';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TouristPlaces() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Tourist_Place/')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

  };

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


export default TouristPlaces;