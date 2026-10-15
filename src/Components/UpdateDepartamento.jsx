import React, { Component } from 'react'
import ServiceDepartamentos from '../ServiceDepartamentos';
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    service = new ServiceDepartamentos();
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }


    UpdateDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        this.service.UpdateDepartamento(departamento).then((result) => {
            this.setState({
                status: true
            })
        })
    }



    render() {
        return (
            <div>
                {
                    this.state.status == true &&
                    (<Navigate to="/" />)
                }
                <h1>Update Departamento</h1>
                <form>
                    <label>Id departamento</label>
                    <input type='number' defaultValue={this.props.id}
                        ref={this.cajaNumero} className='form-control' disabled />

                    <label>Nombre</label>
                    <input type='text' Defaultvalue={this.props.nombre}
                        ref={this.cajaNombre} className='form-control' />

                    <label>Localidad</label>
                    <input type='text' Defaultvalue={this.props.localidad}
                        ref={this.cajaLocalidad} className='form-control' />
                    <button onClick={this.UpdateDepartamento} className='btn btn-info'>Update</button>
                </form>
            </div>
        )
    }
}
