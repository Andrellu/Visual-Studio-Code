import { Component } from "react";

class Comic extends Component{

    seleccionFavorito = () =>{
        var seleccionado = this.props.comic;
        this.props.metodoPadre(seleccionado);
    }

    elimnarComic = () =>{
        var indice = this.props.index;
        //console.log(indice);
        this.props.metodoEliminar(indice);
    }

    modificarComic = () =>{
        var seleccionado = this.props.index;
        this.props.metodoModificar(seleccionado);
    }

    render () {
        return (
            <div style={{backgroundColor:"#69D2E7"}}>
                <hr/>
                <button style={{backgroundColor : "#F8CA00"}} onClick={this.seleccionFavorito}>Favorito</button>
                <button style={{backgroundColor:"#C02942"}} onClick={this.elimnarComic}>Eliminar</button>
                <button style={{backgroundColor:"#53777A"}} onClick={this.modificarComic}>Modificar</button>
                <h1 style={{color:"Blue"}}>{this.props.comic.titulo}</h1>
                <h6 style={{color:"#031634"}}>{this.props.comic.descripcion}</h6>
                <img src={this.props.comic.imagen}/>
            </div>

        );
    }
}
export default Comic;