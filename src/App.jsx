import { useState } from "react";
import './app.css'
import palito from './palito.png'
import fondo1 from './img/fondo1.jpg'
import fondo2 from './img/fondo2.jpg'
import fondo3 from './img/fondo3.jpg'

function App() {
  const [puntosA, setPuntosA] = useState([]);
  const [puntosB, setPuntosB] = useState([]);
  const [contadorB, setContadorB] = useState(0);
  const [contadorA, setContadorA] = useState(0);
  const [fondo, setFondo] = useState(fondo2);

  const sumaA= ()=>{
    setContadorA(contadorA + 1)
    setPuntosA([...puntosA,contadorA])
  }
  const sumaB= ()=>{
    setContadorB(contadorB + 1)
    setPuntosB([...puntosB,contadorB])
  }
  const restaA= ()=>{
    if(puntosA.length== 0){
      
    }else{
    const filter = puntosA.filter(x=>x!=puntosA[puntosA.length-1])
    setPuntosA(filter)
    } 
  }
  const restaB= ()=>{
    if(puntosB.length == 0){
      
    }else{
      const filter = puntosB.filter(x=>x!=puntosB[puntosB.length-1])
      setPuntosB(filter)
    }
  }

  return (
<>
        <div className="puntosContainer d-flex justify-content-evenly w-100 border-b">
          <h1 className="p-3  puntos">{puntosA.length}</h1>
          <h1 className="p-3  puntos">{puntosB.length}</h1>
        </div>
    <div className="container">
      <div className="row">
        <div className="col-6 text-light text-center d-flex justify-content-center mt-3 ps-5 border-r">
          
          <div className="palitosContainer">
            {puntosA && puntosA.map(el=>(
              <img key={el} className='palito' src={palito} alt="" />
              )) }
          </div>
        </div>
        <div className="col-6 text-light text-center mt-3 pe-5 d-flex justify-content-center border-l">
         
          <div className="palitosContainer">
            {puntosB && puntosB.map(el=>(
                <img key={el} className='palito' src={palito} alt="" />
              )) }
          </div>
        </div>
      </div>
      <button onClick={sumaA} className="btnSumaA btnPuntos">+</button>
      <button onClick={restaA} className="btnRestaA btnPuntos">-</button>
      <button onClick={sumaB} className="btnSumaB btnPuntos">+</button>
      <button onClick={restaB} className="btnRestaB btnPuntos">-</button>
      {/* <span onClick={handleFondo} className="btnFondo">Fondo</span> */}
      
      
    </div>
              </>
  );
}

export default App;
