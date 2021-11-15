import React, { Component } from 'react';
import error from './../../assets/images/Error404/error404.jpg'
import "./imagenes.css";

export default class Error404 extends Component {
    render() {
        return (
            <div>
                <img src={error} alt="Error 404"/>
            </div>
        )
    }
}
