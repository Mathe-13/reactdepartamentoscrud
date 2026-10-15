import axios from 'axios';
import Global from './Global';

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
        return new Promise(function (resolve) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos"
            axios.delete(url + request).then((response) => {
                console.log("Departamento eliminado:" + idDepartamento);
                resolve(response);
            })
        })
    }

}