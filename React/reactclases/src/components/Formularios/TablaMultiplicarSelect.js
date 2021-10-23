import React, { Component } from 'react'

export default class TablaMultiplicarSelect extends Component {
    
    optionSelecionado = React.createRef();

    state = {
        tabla : []
    }
    // Metodo para el formulario
    mostrarTabla = (e) =>{
        e.preventDefault();
        var num = parseInt(this.optionSelecionado.current.value);
        var datos = [];
        for(var i  = 0; i <= 10; i++){
            var multi = num * i;
            datos.push(<tr key={i}>
                <td>{ num + " * " + i }</td>
                <td>{multi}</td>
            </tr>);
        }

    }

    // Metodo para cargar los datos en el select al inicio
    cargarOption = () =>{
        var options = [];
        for(var i = 0; i <=5 ; i++){
            var random = parseInt(((Math.random() *50)+1));
            options.push(<option key={i} value={random}>{random}</option>);
        }
        return options;
    }
    
    render() {
        return (
            <div>
                <h1>Tabla de multiplicar con SELECT</h1>
                <form onSubmit={this.mostrarTabla}>
                    <label>Seleccion un número</label>
                    <select ref={this.optionSelecionado}>{this.cargarOption()}</select>
                    <button>Mostrar tabla</button>
                </form>
                <table border="2">
                    <tr>
                        <td>Operación</td>
                        <td>Resultado</td>
                    </tr>
                    <tbody>
                        {this.state.tabla.map((tan, index) =>{
                            <tr key={index}>
                                {tan}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
