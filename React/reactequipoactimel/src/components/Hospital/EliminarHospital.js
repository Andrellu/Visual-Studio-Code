import React, { Component } from 'react';
import axios from "axios";
import Global from "../../Global";
import { Redirect } from 'react-router';

export default class EliminarHospital extends Component {
    
    cajaID =React.createRef();

    state = {
        status : false
    };

    eliminarHospital = (e) =>{
        e.preventDefault();
        var id = parseInt(this.cajaID.current.value);
        var request = "/webresources/hospitales/delete/" + id;
        var url = Global.urlHospital + request;
        axios.delete(url).then(res =>{
            this.setState({
                status : true
            });
        });
    };

    render() {
        return (
            <div>
                <h1>Eliminar Hospital</h1>
                <form onSubmit={this.eliminarHospital}>
                    <div className="form-group row">
                        <label>ID: </label>
                        <input
                        type="number"
                        className="form-control"
                        ref={this.cajaID}
                        />
                    </div>
                    <button className="btn btn-info">Eliminar Hospital</button>
                </form>
                {this.state.status == true && (
                    <Redirect to='/mostrarHospital'/>
                )}
                {/* {this.state.status == true ? ( */}
                    {/* <Redirect to='/mostrarHospital'/> */}
                {/* ):( */}
                    {/* <h1 style={{color:"red"}}>ID no encontrado</h1> */}
                {/* )} */}
            </div>
        )
    }
}
