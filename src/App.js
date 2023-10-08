import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numeroClics, setNumClics] = useState(0); //EL VALOR CERO ES EL VALOR INICIAL DEL numeroClics


  //Defino una funcion aqui:
  const contadorClic = () => {
    setNumClics(numeroClics +1);
  }

  const reiniciarContador = () => {
    
    setNumClics(0); //USO LA FUNCION setNumClics y le paso el valor CERO.
    }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src= {freecodecamplogo}
        alt= 'Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClics = {numeroClics} />
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={contadorClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  
  );
}

export default App;
