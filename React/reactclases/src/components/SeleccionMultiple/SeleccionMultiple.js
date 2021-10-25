import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    
    selectMultiple = React.createRef();

    state = {
        seleccionados : ""
    }

    dibujarOptions = () =>{
        var option = [];
        for(var i = 1; i <=10; i++){
            option.push(
                <option key={i} value={"Elemento : " + i}>{"Elemento : " + i}</option>
            );
        }
        return option;
    };

    mostrarSeleccionados = (e) =>{
        console.log("estoy aqui");
        e.preventDefault();
        var options = this.selectMultiple.current.options;
        var dato = "";
        console.log(options);
        for(var i = 0; i < options.length; i++){
            //console.log("entre");
            if(options[i].selected == true){
                dato += options[i].value + ", ";
            }
            console.log(dato);
        }
       
        this.setState({
            seleccionados : dato
        });
    };
    
    render() {
        return (
            <div>
                <h1>Seleccion multiple de elementos</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <select size="10" multiple ref={this.selectMultiple}>{this.dibujarOptions()}</select>
                    <button>Mostar seleccionados</button>
                </form>
                <h1 style={{color:"blue"}}>{this.state.seleccionados}</h1>
            </div>
        )
    }
}
