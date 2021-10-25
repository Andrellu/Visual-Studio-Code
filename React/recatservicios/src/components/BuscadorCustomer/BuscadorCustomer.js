import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global'

export default class BuscadorCustomer extends Component {
    
    urlAPI = Global.urlnorthwind;
    cajaIDref = React.createRef();

    state = {
        customer : {}, 
        status : false
    }

    buscarCustomer = (e) =>{
        e.preventDefault();
        var idCustomer = this.cajaIDref.current.value;
        var request = "customers/" + idCustomer;
        var url = this.urlAPI+request;
        // console.log(url);
        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({
                customer : res.data.customer,
                status : true
            });
            // console.log("Estoy Aqui");
            // console.log(this.state.customer);
        });
    };

    
    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCustomer}>
                    <label>Introduzca ID customer</label>
                    <input type="text" ref={this.cajaIDref} required/>
                    <button>Buscar Customer</button>
                </form>
                {this.state.status == true && (
                    <div>
                        <h1 style={{color:"red"}}>Empresa : {this.state.customer.companyName}</h1>
                        <h1>Contacto : {this.state.customer.contactName}</h1>
                        <h1>Titulo : {this.state.customer.contactTitle}</h1>
                        <h1>Ciudad : {this.state.customer.city}</h1>
                    </div>
                )}
            </div>
        )
    }
}
