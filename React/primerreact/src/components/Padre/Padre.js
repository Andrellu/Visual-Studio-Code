import Matematicas from "../Matematicas/Matematicas";

function Padre(){
    const metodoPadreMates = (Numero) =>{
        var trople = parseInt(Numero)*3;
        console.log("El triple es " + trople);
    }

    return (
        <div className="App">
          {/* <Saludo Nombre="Andres" Edad="24" metodoPadre={metodoPadre}/>
          <Saludo Nombre="Sara" Edad="23" metodoPadre={metodoPadre}/> */}
          <Matematicas Valor="5" metodoPadreMates={metodoPadreMates}/>
          <Matematicas Valor="10" metodoPadreMates={metodoPadreMates}/>
          <Matematicas Valor="20" metodoPadreMates={metodoPadreMates}/>
        </div>
    );
}
export default Padre;