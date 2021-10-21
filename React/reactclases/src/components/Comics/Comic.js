import { Component } from "react";

class Comic extends Component{

    seleccionFavorito = () =>{
        var seleccionado = this.props.comic;
        this.props.metodoPadre(seleccionado);
    }

    elimnarComic = () =>{
        var indice = this.props.comic.indice;
        this.props.metodoEliminar(indice);
    }

    render () {
        return (
            <div style={{backgroundColor:"#69D2E7"}}>
                <h1 style={{color:"Blue"}}>{this.props.comic.titulo}</h1>
                <h6 style={{color:"orange"}}>{this.props.comic.descripcion}</h6>
                <img src={this.props.comic.imagen}/>
                <button onClick={this.seleccionFavorito}>Favorito</button>
                <button onClick={this.elimnarComic}>Eliminar</button>
            </div>

        );
    }
}
export default Comic;