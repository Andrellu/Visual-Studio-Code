<template>
    <div>
        <label>Nombre : </label>
        <input type="text" v-model="titulo"/> <br/>
        <label>Imagen : </label>
        <input type="text" v-model="imagen"/> <br/>
        <label>Descripción : </label>
        <input type="text" v-model="descripcion"/> <br/>
        <button @click="anadirComic">Insertar Comic</button><hr/>
        <div>
            <h1>{{comicFav.titulo}}</h1>
            <img :src="comicFav.imagen"/>
            <h2>{{comicFav.descripcion}}</h2><hr/>
        </div>
        <div v-for="(c, index) in comics" :key="index">
            <Comic :comic="c" :indice="index" 
            v-on:favorito="seleccionarFavorito" 
            v-on:eliminar="eliminarComic"
            v-on:modificar="modificarComic"/>
        </div>
    </div>
</template>
<script>
import Comic from "./Comic.vue";
    export default {
        name : "Comics",
        data(){
            return{
                comics : [
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
                        "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                    descripcion: "Murcielago"
                    }
                ],
                titulo : "",
                imagen : "",
                descripcion : "",
                comicFav : {}
            }
        }, components : {
            Comic
        }, methods : {
            anadirComic(){
                var comic = {
                    titulo : this.titulo,
                    imagen : this.imagen,
                    descripcion : this.descripcion
                };
                this.comics.push(comic);
            },
            seleccionarFavorito(comic){
                this.comicFav = {
                    titulo : comic.titulo,
                    imagen : comic.imagen,
                    descripcion : comic.descripcion
                };
            },
            modificarComic(index){
                //console.log(index);
                this.comics[index].titulo = this.titulo;
                this.comics[index].imagen = this.imagen;
                this.comics[index].descripcion = this.descripcion;
            },
            eliminarComic(index){
                //console.log(index);
                this.comics.splice(index, 1);
            }
        }
    }
</script>
<style scoped>
    img{
        width : 325px;
    }
</style>
