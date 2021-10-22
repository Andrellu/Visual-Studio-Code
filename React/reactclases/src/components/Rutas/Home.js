import { Component } from "react";
import imagenCasa from "./../../assets/images/Casa.jpg";

class Home extends Component{
    render(){
        return (
            <div>
                <h1>Estoy en Casa</h1>
                <img src={imagenCasa} style={{width : "350px", height:"300px"}}/>
            </div>
        );
    }
}
export default Home;