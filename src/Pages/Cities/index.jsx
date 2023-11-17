import Layout from "../../Components/Layout"
import Card1 from "../../Components/Card1";
import { useEffect, useState } from 'react'

function Cities() {
  
        const [items,setItems]= useState(null)

        useEffect(() =>{
        // https://fakeapi.platzi.com/
          fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/City/')
          .then(response => response.json() )
          .then(data => setItems(data) )
          
        
          
        })
        return (
            <>
          <Layout>
            
            
            <div className='grid gap-40 grid-cols-5 w-full'>
              {
                items?.map(item =>(
                  <Card1 key={item.id} data = {item}/>
                ))
              }
            </div>
          </Layout>
            </>
            )
          }
          



export default Cities;