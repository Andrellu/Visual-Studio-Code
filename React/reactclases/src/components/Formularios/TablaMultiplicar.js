import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    
    numero = React.createRef();
    state = {
        tabla : []
    };

    multiplicarTabla = (e) =>{
        e.preventDefault();
        var num = parseInt(this.numero.current.value);
        var tab = [];
        // var total = 0;
        //console.log(num);
        for(var i = 0; i <= 10; i++){
            var total = num*i;
            //console.log(total);
            // tab.push( this.numero.current.value + "x" + i + "=" + total);
            tab.push(<li key={i}>{this.numero.current.value + "x" + i + "=" + total}</li>);
            //console.log(this.numero.current.value + "x" + i + "=" + num);
        }
        this.setState({
            tabla : tab
        });
    };

    render() {
        return (
            <div>
                <h1>Las tablas de multiplicar</h1> <hr/>
                <ul>
                    {/* {this.state.tabla.map((tabla, index) => {
                        return(<li key={index}>{tabla}</li>);
                    })} */}
                    {this.state.tabla}
                </ul>
                <hr/>
                <form onSubmit={this.multiplicarTabla}><hr/>
                    <h1>Mi formulario</h1>
                    <label>Pon un número : </label>
                    <input type="number" ref={this.numero}/> <br/><br/>
                    <button>Enviar datos</button><hr/>
                </form>
            </div>
        )
    }
}
