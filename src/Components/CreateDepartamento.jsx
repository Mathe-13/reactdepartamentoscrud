import React, { Component } from 'react'
import ServiceDepartamentos from '../Service/ServiceDepartamentos'
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

    service = new ServiceDepartamentos();
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        mensaje: null,
        status: false
    }

    insertDepartamento = (event) => {
        event.preventDefault();
        //creamos objeto departamento
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        //Los errores se capturan igual e nun promesa (then..catch)
        this.service.inserDepartamento(departamento)
            .then((result) => {
                //cambiamos para la navegacion
                this.setState({
                    status: true
                })

            }).catch((error) => {
                this.setState({
                    mensaje: error
                })
            })

    }

    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    <h1>Create Departamento</h1>
                    {
                        this.state.mensaje &&
                        (<p style={{ color: "red", fontWeight: "bold" }}>
                            {this.state.mensaje}
                        </p>)
                    }

                    <form>
                        <label>Id departamento:</label>
                        <input type='number' className='form-control' ref={this.cajaNumero} />
                        <labe>Nombre:</labe>
                        <input type='text' className='form-control' ref={this.cajaNombre} />
                        <label>Localidad</label>
                        <input type='text' className='form-control' ref={this.cajaLocalidad} />
                        <button className='btn btn-warning' onClick={this.insertDepartamento}>Insetar</button>
                    </form>
                </div>
            )

        }

    }
}
