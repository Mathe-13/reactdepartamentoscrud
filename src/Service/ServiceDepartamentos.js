import axios from 'axios';
import Global from '../Global';

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos";
            axios.get(url + request).then((response) => {
                console.log("Leyendo departamentos");
                resolve(response.data);
            })

        })
    }

    getDepartamento(idDepartamento) {
        let url = Global.urlApiDepartamentos;
        let request = "api/departamentos/" + idDepartamento;
        return axios.get(url + request).then((response) => response.data);
    }

    inserDepartamento(departamento) {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos"
            axios.post(url + request, departamento)
                .then((response) => {
                    console.log("insertando departamento");
                    resolve(response);
                }).catch((error) => {
                    console.log("Error insertado" + error);
                    reject(error);
                })
        })
    }

    UpdateDepartamento(departamento) {
        return new Promise(function (resolve) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos";
            axios.put(url + request, departamento).then((response) => {
                console.log("Actualizar departamento");
                resolve(response);
            })
        })
    }

    deleteDepartamento(idDepartamento) {
        let url = Global.urlApiDepartamentos;
        let request = "api/departamentos/" + idDepartamento;
        return axios.delete(url + request);
    }



}