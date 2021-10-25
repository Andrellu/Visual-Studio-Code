import React, { Component } from 'react'
import axios from "axios";
import Global from '../../Global';

export default class ServicioCustomers extends Component {
    // Almacenamos la url del servicio
    urlcustomers = Global.urlnorthwind;

    state = {
        customers : []
    };

    cargarCustomers = () =>{
        var request = "customers?format=json";
        axios.get(this.urlcustomers + request).then(res => {
            console.log(res.data);
            this.setState({
                customers : res.data.results
            });
        });
    };

    // SOLO QUEREMOS LEER LOS DATOS CUANDO CARGA LA PAGINA
        componentWillMount = () =>{
            this.cargarCustomers();
        }
    
    render() {
        return (
            <div>
                <h1>Servicio API customers</h1>
                {this.state.customers.map((emple, index) => {
                    return(<h2 key={emple.id}>{emple.contactName}</h2>);
                })}
            </div>
        )
    }
}
