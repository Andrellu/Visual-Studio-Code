import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

export default class EjercicioEmpleado extends Component {

    state={

       empleadosTotal: [
            {
              "idEmpleado": 7369,
              "apellido": "SANCHEZ",
              "oficio": "EMPLEADO",
              "salario": 10876,
              "director": 7902
            },
            {
              "idEmpleado": 7499,
              "apellido": "ARROYO",
              "oficio": "VENDEDOR",
              "salario": 19370,
              "director": 7698
            },
            {
              "idEmpleado": 7521,
              "apellido": "SALA",
              "oficio": "VENDEDOR",
              "salario": 20915,
              "director": 7698
            },
            {
              "idEmpleado": 7566,
              "apellido": "JIMENEZ",
              "oficio": "DIRECTOR",
              "salario": 12312,
              "director": 7839
            },
            {
              "idEmpleado": 7589,
              "apellido": "CASALES",
              "oficio": "EMPLEADO",
              "salario": 6616,
              "director": 7919
            },
            {
              "idEmpleado": 7614,
              "apellido": "GUTIERREZ",
              "oficio": "ANALISTA",
              "salario": 4425,
              "director": 7919
            },
            {
              "idEmpleado": 7618,
              "apellido": "ALCALA",
              "oficio": "EMPLEADO",
              "salario": 6015,
              "director": 7782
            },
            {
              "idEmpleado": 7654,
              "apellido": "MARTINEZ",
              "oficio": "VENDEDOR",
              "salario": 17113,
              "director": 7698
            },
            {
              "idEmpleado": 7698,
              "apellido": "NEGRO",
              "oficio": "DIRECTOR",
              "salario": 11155,
              "director": 7839
            },
            {
              "idEmpleado": 7777,
              "apellido": "TORMO",
              "oficio": "VENDEDOR",
              "salario": 16949,
              "director": 7788
            },
            {
              "idEmpleado": 7782,
              "apellido": "CEREZO",
              "oficio": "DIRECTOR",
              "salario": 11630,
              "director": 7839
            },
            {
              "idEmpleado": 7788,
              "apellido": "GIL",
              "oficio": "ANALISTA",
              "salario": 4137,
              "director": 7566
            },
            {
              "idEmpleado": 7839,
              "apellido": "REY",
              "oficio": "PRESIDENTE",
              "salario": 3354,
              "director": 0
            },
            {
              "idEmpleado": 7844,
              "apellido": "TOVAR",
              "oficio": "VENDEDOR",
              "salario": 16240,
              "director": 7698
            },
            {
              "idEmpleado": 7876,
              "apellido": "ALONSO",
              "oficio": "EMPLEADO",
              "salario": 4259,
              "director": 7788
            },
            {
              "idEmpleado": 7900,
              "apellido": "JIMENO",
              "oficio": "EMPLEADO",
              "salario": 4062,
              "director": 7698
            },
            {
              "idEmpleado": 7902,
              "apellido": "FERNANDEZ",
              "oficio": "ANALISTA",
              "salario": 4134,
              "director": 7566
            },
            {
              "idEmpleado": 7919,
              "apellido": "SERRA",
              "oficio": "DIRECTOR",
              "salario": 11345,
              "director": 7839
            },
            {
              "idEmpleado": 7934,
              "apellido": "MUÑOZ",
              "oficio": "EMPLEADO",
              "salario": 2515,
              "director": 7782
            },
            {
              "idEmpleado": 7988,
              "apellido": "SANTIUSTE",
              "oficio": "ANALISTA",
              "salario": 2483,
              "director": 7919
            }
          ],
          empleadosOficio:[],
          cabecera:[],
          empleado:[]
    }

    Dato=React.createRef();
    id=React.createRef();
    apellido=React.createRef();
    director=React.createRef();
    oficio=React.createRef();
    salario=React.createRef();

    /*Este será el método para romper el envío de formulario tanto para formulario 1 como formulario 2 */
    recogerFormulario=(e)=>{

        e.preventDefault();

    };

    /*Cuando recoge el dato del input oficio, entonces lo que hacemos primero es vaciar las propiedades empleadosOficio y cabecera de la variable state (para que no concatene valores) y recorremos todos los objetos empleado recogiendo de ellos las etiquetas de sus propiedades (idEmpleado, salario, oficio...) y las vamos guardando en un array declarado además de añadir finalmente la palabra "accion" ya que será la última columna de la tabla. Si el oficio es igual a los oficios de los empleados entonces recoge dichos empleados y en diferentes filas recoge todos sus valores, añadiendo en las dos ultimas columnas los botones de modificar y eliminar. Tras montar la parte del tbody y recoger los valores que van a ir en el thead, entonces lo que hacemos es recorrer el array del que recogimos las etiquetas y vamos añadiendo en la propiedad de cabecera los diferentes valores para dejar así listo la cabecera que pueda aparecer de cada objeto. */

    cargarTabla=()=>{

        var valOficio=this.Dato.current.value;
        var recogerCabecera=[];

        this.state.empleadosOficio.splice(0,this.state.empleadosOficio.length);
        this.state.cabecera.splice(0,this.state.cabecera.length);

       this.state.empleadosTotal.map((empleado,index)=>{

            recogerCabecera=(Object.keys(empleado));
            recogerCabecera.push("Accion");
           
            if(valOficio.toUpperCase() == empleado.oficio){
                
                this.state.empleadosOficio.push(<tr key={index}>
                                                <td>{empleado.idEmpleado}</td>
                                                <td>{empleado.apellido}</td>
                                                <td>{empleado.director}</td>
                                                <td>{empleado.oficio}</td>
                                                <td>{empleado.salario}</td>
                                                <td><Button variant="success" id="modificar" onClick={()=>this.modificarDatos(empleado)}>Modificar</Button></td>
                                                <td><Button variant="danger" onClick={()=>this.eliminarDatos(index)}>Eliminar</Button></td>
                                                </tr>);
            }
       });

       for(var i=0;i<=recogerCabecera.length;i++){

            this.state.cabecera.push(<td key={i}>{recogerCabecera[i]}</td>);
       }
            

       this.setState({

           empleadosOficio: this.state.empleadosOficio,
           cabecera: this.state.cabecera
        
       });

    };

    /*En este método llamado por el botón creado dinámicamente arriba como el botón del segundo formulario, lo que hacemos es que dependiendo de qué parametro de entrada le pasemos hará una cosa u otra. Si el parámetro de entrada es un true entonces lo que hace es esconder el div del segundo formulario para dejar habilitado el del primero y recoger los valores que fueron añadidos en el segundo formulario para cambiarlos en el objeto que concuerde con el id de dicho objeto (el input de id no se puede modificar). Si el parámetro de entrada es un objeto entonces deshabilitamos el div del formulario 1 para habilitar el de segundo formulario mostrando en estos los valores de dicho objeto , para hacer esto lo que hago es añadir el parámetro de entrada en un atributo del state llamado empleado y tras actualizarlo lo recorro para así mostrar en los diferentes input los valores correspondientes de cada propiedad del objeto*/

    modificarDatos=(emp)=>{

        if(emp == true){

            console.log("he llamado desde el boton del formulario 2");

            document.getElementById("cont2").setAttribute("hidden",true);
            document.getElementById("cont1").removeAttribute("hidden");

            var id=document.getElementById("id").value;
            var apellido=document.getElementById("id").value;
            var director=document.getElementById("director").value;
            var oficio=document.getElementById("oficio").value;
            var salario=document.getElementById("salario").value;

            this.state.empleadosTotal.map((emplea,index)=>{

                if(id == emplea.idEmpleado){

                    emplea.apellido=apellido;
                    emplea.director=director;
                    emplea.oficio=oficio;
                    emplea.salario=salario;
                    this.cargarTabla();
                }

            });

            this.setState({

                empleadosTotal:this.state.empleadosTotal
            });


        }else{

            console.log("he llamado desde el boton creado dinamicamente");

            document.getElementById("cont1").setAttribute("hidden",true);
            document.getElementById("cont2").removeAttribute("hidden");
            this.state.empleado.splice(0,this.state.empleado.length);

            this.state.empleado.push(emp);

            this.setState({

                empleado:this.state.empleado

            });

            this.state.empleado.map((empl,index)=>{

                document.getElementById("id").value=empl.idEmpleado;
                document.getElementById("apellido").value=empl.apellido;
                document.getElementById("director").value=empl.director;
                document.getElementById("oficio").value=empl.oficio;
                document.getElementById("salario").value=empl.salario;

            });
        }

    };

    /*En este método lo que hago es pasarle el index del objeto que pulsó el botón eliminar y entonces lo elimino tanto del atributo de empleados oficio como el de empleados total y recargo la tabla */
    
    eliminarDatos=(index)=>{

        this.state.empleadosOficio.splice(index,1);
        this.state.empleadosTotal.splice(index,1);
        this.cargarTabla();
    };

    render() {

        return (

            <div>
                <div className="container-container-fluid" id="cont1">
                    <h1>Lista de Empleados por oficio</h1>

                    <form onSubmit={this.recogerFormulario}>

                        <label>Oficio: </label>

                        <InputGroup className="mb-3 mt-1">

                            <FormControl placeholder="Introduzca un oficio" aria-label="Oficio" aria-describedby="basic-addon1" ref={this.Dato}/>

                        </InputGroup>

                        <Button variant="primary" className="mb-3" onClick={this.cargarTabla}>Cargar Tabla</Button>

                    </form>
                </div>
                
                <div className="container-fluid" id="cont2" hidden>

                    <form onSubmit={this.recogerFormulario}>
                        <label>IdEmpleado: </label>

                        <InputGroup className="mb-1 mt-3">

                            <FormControl placeholder="Introduzca un IdEmpleado" aria-label="ID" aria-describedby="basic-addon1" id="id" ref={this.id} disabled/>

                        </InputGroup>
                        <br/>

                        <label>Apellido: </label>
                        <InputGroup className="mb-1 mt-3">
                            <FormControl placeholder="Introduzca un apellido" aria-label="apellido" aria-describedby="basic-addon1" id="apellido" ref={this.apellido}/>
                        </InputGroup>
                        <br/>

                        <label>Director: </label>
                        <InputGroup className="mb-1 mt-3">
                            <FormControl placeholder="Introduzca un director" aria-label="director" aria-describedby="basic-addon1" id="director" ref={this.director}/>
                        </InputGroup>
                        <br/>

                        <label>Oficio: </label>
                        <InputGroup className="mb-1 mt-3">
                            <FormControl placeholder="Introduzca un oficio" aria-label="oficio" aria-describedby="basic-addon1" id="oficio" ref={this.oficio}/>
                        </InputGroup>
                        <br/>

                        <label>Salario: </label>
                        <InputGroup className="mb-1 mt-3">
                            <FormControl placeholder="Introduzca un salario" aria-label="salario" aria-describedby="basic-addon1" id="salario" ref={this.salario}/>
                        </InputGroup>
                        <br/>

                        <Button variant="primary" className="mb-3" onClick={()=>this.modificarDatos(true)}>Modificar Datos</Button>
                    </form>
                </div>

                <Table>
                    <thead><tr>{this.state.cabecera}</tr></thead>
                    <tbody>{this.state.empleadosOficio}</tbody>
                </Table>
            </div>
        )
    }
}