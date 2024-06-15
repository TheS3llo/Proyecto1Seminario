import React from 'react'
import { useState } from 'react'

export default function datos() {

    const [nombre,setnombre]=useState("german")
    const [i,seti]=useState(0)

 
function nombres(a){

    setnombre(a.target.value)

}

let inf=()=>{
    seti(1)
       validar(i)
}


const validar=()=>{
   
    
    // if(nombre=="camilo"){
        if(i==0){
            return null
        }else{
            // alert(nombre)
            
             
            return <h1>{nombre}</h1>
        }
        // setnombre(nombre)
        
    // }

    // return null
}
 
  return (
    <div>

    <input type="button" value="Saludar"  onClick={(e)=>{inf()}} />
        <input id="dato" type="text" value={nombre} onChange={(e=>{nombres(e)})} />

       {validar()} 
   
   
       
    </div>
  )
}
{/* {nombre == "germann" && (
        <h1>{nombre}</h1>
      )} */}
        