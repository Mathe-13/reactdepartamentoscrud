import React, { Component } from 'react'
import loading from './../assets/loading.png';
import ServiceDepartamentos from '../ServiceDepartamentos';
import { NavLink } from 'react-router-dom';

export default class HomeComponent extends Component {
    service = new ServiceDepartamentos();
    state = {
        departamento: [],
        status: false
    }

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) => {
            this.setState({
                departamento: result,
                status: true
            })
        })

    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }


    render() {
        if (this.state.status == true) {
            return (<div>
                <table className='table table-info'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamento.map((dept, index) => {
                                return (<tr key={index}>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
                                        <NavLink className='btn btn-danger'
                                            to={"/delete/" + dept.numero}>
                                            Delete
                                        </NavLink>
                                        <NavLink className="btn btn-info"
                                            to={"/update/" + dept.numero
                                                + "/" + dept.nombre
                                                + "/" + dept.localidad
                                            }>
                                            Edit
                                        </NavLink>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
            )
        } else {
            return (<img src={loading} alt="loading..." />)
        }

    }
}
