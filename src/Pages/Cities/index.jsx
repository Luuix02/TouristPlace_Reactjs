import Layout from "../../Components/Layout"
import Card1 from "../../Components/Card1"
import { useEffect, useState } from 'react'//Se importan los hooks useEffect y useState desde la biblioteca React. useEffect se utiliza para manejar efectos secundarios en componentes funcionales, y useState para gestionar el estado del componente.

function Cities() {

  const [items, setItems] = useState(null)
  useEffect(() => {
    fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/City/')//Realiza una solicitud GET a la URL proporcionada de la API.
      .then(response => response.json())//Después de realizar la solicitud, convierte la respuesta a formato JSON.
      .then(data => setItems(data))//Actualiza el estado items con los datos obtenidos de la API.



  })
  return (
    <>
      <Layout>

        <div className='grid gap-40 grid-cols-5 w-full'>
          {
            items?.map(item => (
              <Card1 key={item.id} data={item} />
            ))
          }
        </div>
      </Layout>
    </>
  )
}




export default Cities;