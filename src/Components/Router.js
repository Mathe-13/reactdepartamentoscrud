import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import CreateDepartamento from './CreateDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import CreateDepartamentoOtro from './CreateDepartamentoOtro'
import DeleteDepartamento from './DeleteDepartamento'

export default class Router extends Component {
    render() {
        function UpdateDepartamentoElement() {
            let { id, nombre, localidad } = useParams();
            return <UpdateDepartamento id={id} nombre={nombre} localidad={localidad} />

        }
        function DeleteDepartamentoElement() {
            let { id } = useParams();
            return <DeleteDepartamento iddepartamento={id} />
        }
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/create" element={<CreateDepartamento />} />
                    <Route path="/createotro" element={<CreateDepartamentoOtro />} />
                    <Route path="/update/:id/:nombre/:localidad" element={<UpdateDepartamentoElement />} />
                    <Route path="/delete/:id" element={<DeleteDepartamentoElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
