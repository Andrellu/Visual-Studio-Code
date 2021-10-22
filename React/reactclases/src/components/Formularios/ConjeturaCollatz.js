import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {
    
    cajaNumero = React.createRef();
    state = {
        numeros : []
    }
    
    recibirDatos = (e) =>{
        e.preventDefault();
        var aux = parseInt(this.cajaNumero.current.value);
        var datos = [];
        //console.log(aux);
        while(aux != 1){
            if(aux % 2 == 0){
                aux = aux / 2;
                //console.log(aux);
            } else {
                aux = (aux * 3) + 1;
                //console.log(aux);
            }
            datos.push(aux);
            //console.log(aux);
        }
        this.setState({
            numeros : datos
        });
    }

    render() {
        return (
            <div>
                <h1 style={{color:"green"}}>Práctica conjetura de Collatz</h1>
                <ul>
                    {this.state.numeros.map((nums, index) => {
                        return(<li>{nums}</li>);
                    })}
                </ul>
                <form onSubmit={this.recibirDatos}>
                    <label>Introduce un número : </label>
                    <input type="number" ref={this.cajaNumero}/> <br/><br/>
                    <button>Enviar Datos</button>
                </form>
            </div>
        )
    }
}
