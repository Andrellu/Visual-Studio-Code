import { Component } from "react";
import imagenTele from "./../../assets/images/television.jpg";

class Television extends Component{
    render(){
        return(
            <div>
                    <h1>Estoy en Television</h1>
                    <img src={imagenTele} style={{width : "350px", height:"300px"}}/>
            </div>
        );
    }
}
export default Television;