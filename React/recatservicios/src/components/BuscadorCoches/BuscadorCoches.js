import React, { Component } from 'react';
import "./BuscadorCoches.css"
import axios from 'axios';
import Global from '../../Global';

export default class BuscadorCoches extends Component {
    
    urlCoches = Global.urlCoches;
    cajaModeloCoche = React.createRef();

    state = {
        coches : [],
        temp : [],
        status : null
    };

    prevenirEvento = (e) =>{
        e.preventDefault();
    };

    buscarCoche = () =>{
        var marca = this.cajaModeloCoche.current.value;
        var datos = this.state.temp;
        var filtro = datos.filter(car => car.marca.toLowerCase().includes(marca));
        this.setState({
            coches : filtro
        });    
    };

    cargarCoches = () =>{
        axios.get(this.urlCoches).then(res => {
            console.log(res.data);
            this.setState({
                coches : res.data,
                temp : res.data,
                status : true
            });
            console.log(this.state.coches);
        });
    };

    // Carga los coches nada mas recargar la pagina
    componentWillMount = () =>{
        this.cargarCoches();
        console.log("mont");
    }
    
    render() {
        return (
            <div>
                <h1>Buscador Coches</h1>
                <form onSubmit={this.prevenirEvento}>
                    <label>Modelo :{" "}</label>
                    <input type="text" required ref={this.cajaModeloCoche}/> <br/><br/>
                    <button onClick={this.buscarCoche}>Buscar Coche por Marca</button>
                    <button onClick={this.cargarCoches}>Cargar Coches</button>
                </form> <br/><br/>
                {this.state.status == true && (
                    <table border="2">
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Conductor</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.coches.map((coche, index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{coche.marca}</td>
                                        <td>{coche.modelo}</td>
                                        <td>{coche.conductor}</td>
                                        <td><img src={coche.imagen}/></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}
