import React, { Component } from 'react'
import ServiceHospitales from '../Service/ServiceHospitales'
import TrabajadoresComponent from './TrabajadoresComponent';

export default class HospitalMultiples extends Component {
    service = new ServiceHospitales();
    selectHospitales = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    loadHospitales = async () => {
        let datos = await this.service.getHospitales();
        console.log(datos);
        this.setState({
            hospitales: datos
        })

    }

    componentDidMount = async () => {
        await this.loadHospitales();
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault();
        let aux = [];
        let options = this.selectHospitales.current.options;
        for (let option of options) {
            if (option.selected) {
                aux.push(option.value);
            }
        }
        console.log(aux);
        this.setState({
            hospitalesSeleccionados: aux
        })
    }


    render() {
        return (
            <div>
                <h1>Hospital Multiples</h1>
                <form>
                    <label>Seleccione Hospitales</label>
                    <select ref={this.selectHospitales} className='form-control'
                        size="6" multiple>
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (<option key={index} value={hospital.idHospital}>
                                    {hospital.nombre}
                                </option>)
                            })
                        }
                    </select>
                    <button onClick={this.getHospitalesSeleccionados}
                        className='btn btn-info'>
                        Mostrar trabajadores
                    </button>
                </form>
                {
                    this.state.hospitalesSeleccionados.length != 0 &&
                    (<TrabajadoresComponent idhospitales={this.state.hospitalesSeleccionados} />)
                }

            </div>
        )
    }
}
