import { Component } from "react";
import Comic from "./Comic";
import './Comics.css'

class Comics extends Component {

    state = {
        comics: [
            {
              titulo: "Spiderman",
              imagen:
                "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
              descripcion: "Hombre araña"
            },
            {
              titulo: "Wolverine",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
              descripcion: "Lobezno"
            },
            {
              titulo: "Guardianes de la Galaxia",
              imagen:
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
              descripcion: "Yo soy Groot"
            },
            {
              titulo: "Avengers",
              imagen:
                "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              descripcion: "Los Vengadores"
            },
            {
              titulo: "Spawn",
              imagen:
                "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              descripcion: "Al Simmons"
            },
            {
              titulo: "Batman",
              imagen:
                "https://images-na.ssl-images-amazon.com/images/I/81800sY+GTL.jpg",
              descripcion: "Murcielago"
            }
      ], favorito : null
    };

    seleccionarFavorito = (comic) =>{
        this.setState({
            favorito : comic
        });
    }

    // eliminarComic = () =>{
    //     // splice recibe 2 paramatero un indice y los elementos a eliminar
    //     this.state.comics.splice(0,1);
    //     this.setState({
    //         comics : this.state.comics
    //     });
    // }
    eliminarComic = (index) =>{
        //     splice recibe 2 paramatero un indice y los elementos a eliminar
        console.log(index);
        this.state.comics.splice(index,1);
        this.setState({
            comics : this.state.comics
        });
    }

    insertarComic = () =>{
        var titulo = document.getElementById('cajaTitulo').value;
        var image = document.getElementById('cajaImagen').value;
        var descrip = document.getElementById('cajaDescripcion').value;

        var comic = {
            titulo : titulo,
            imagen : image,
            descripcion : descrip
        };

        this.state.comics.push(comic);
        this.setState({
            comics : this.state.comics
        });
    }

    modificarComic = () =>{
        var titulo = document.getElementById('cajaTitulo').value;
        var image = document.getElementById('cajaImagen').value;
        var descrip = document.getElementById('cajaDescripcion').value;
    }

    render() {
        return (
            <div style={{backgroundColor:"#333333 "}}>
                {/* <button onClick={this.eliminarComic}>Eliminar</button> */}
                <h1 style={{color:"fuchsia"}}>Ejemplo comics Objetos/Colecciones</h1>
                
                <hr/>
                    <label>Titulo : </label>
                    <input type="text" id="cajaTitulo"/><br/>
                    <label>Imagen : </label>
                    <input type="text" id="cajaImagen"/><br/>
                    <label>Descripción : </label>
                    <input type="text" id="cajaDescripcion"/><br/>

                    <button onClick={this.insertarComic}>Insertar Comic</button>

                <hr/>
                
                <hr/>
                    {this.state.favorito && (
                        <div className="App" style={{backgroundColor:"#F38630 "}}>
                            <h1>{this.state.favorito.titulo}</h1>
                            <img src={this.state.favorito.imagen}></img>
                    </div>)}
                <hr/>
                {this.state.comics.map((comic, index) => {
                  //console.log(index);
                  return (<Comic comic={comic} key={index} metodoPadre={this.seleccionarFavorito} index={index} metodoEliminar={this.eliminarComic}/>);
                })}
            </div>
        );
    }
}
export default Comics;