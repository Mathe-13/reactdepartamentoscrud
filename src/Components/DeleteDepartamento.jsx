import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom';
import ServiceDepartamentos from '../ServiceDepartamentos';
import loading from './../assets/loading.png';

export default class DeleteDepartamento extends Component {
    service = new ServiceDepartamentos();

    state = {
        departamento: null,
        status: false,
        deleting: false,
        error: null
    }

    componentDidMount() {
        this.service.getDepartamento(this.props.iddepartamento)
            .then((departamento) => {
                this.setState({ departamento });
            })
            .catch((error) => {
                this.setState({ error: "No se pudo cargar el departamento." });
                console.error("Error al cargar el departamento:", error);
            });
    }

    deleteDepartamento = (event) => {
        event.preventDefault();
        this.setState({ deleting: true, error: null });
        this.service.deleteDepartamento(this.props.iddepartamento)
            .then(() => {
                this.setState({ status: true });
            })
            .catch((error) => {
                this.setState({
                    deleting: false,
                    error: "No se pudo eliminar el departamento."
                });
                console.error("Error al eliminar el departamento:", error);
            });
    }

    render() {
        if (this.state.status) {
            return <Navigate to="/" replace />
        }
        if (!this.state.departamento && !this.state.error) {
            return <img src={loading} alt="Cargando departamento..." />
        }
        return (
            <div>
                <h1>Confirmar eliminación</h1>
                {this.state.error ? (
                    <p className="text-danger" role="alert">{this.state.error}</p>
                ) : (
                    <>
                        <p>¿Seguro que quieres eliminar este departamento?</p>
                        <p><strong>Id:</strong> {this.state.departamento.numero}</p>
                        <p><strong>Nombre:</strong> {this.state.departamento.nombre}</p>
                        <p><strong>Localidad:</strong> {this.state.departamento.localidad}</p>
                        <button onClick={this.deleteDepartamento} className="btn btn-danger" disabled={this.state.deleting}>
                            {this.state.deleting ? "Eliminando..." : "Eliminar"}
                        </button>
                    </>
                )}
                {" "}
                <NavLink to="/" className="btn btn-secondary">Cancelar</NavLink>
            </div>
        )
    }
}
