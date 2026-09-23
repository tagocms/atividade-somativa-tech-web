import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login, Cadastro, Principal } from './screens'
import { AuthenticationContext } from "./context/AuthenticationContext";

export default class AppNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
        this.setIsAuthenticated = this.setIsAuthenticated.bind(this);
    }

    setIsAuthenticated(value) {
        this.setState({isAuthenticated: value});
    }

    render() {
        return (
            <AuthenticationContext.Provider value={{isAuthenticated: this.state.isAuthenticated, setIsAuthenticated: this.setIsAuthenticated}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            this.state.isAuthenticated
                            ? <Navigate to="/principal"/>
                            : <Navigate to="/login"/>
                        }/>
                        <Route path="/login" element={
                            this.state.isAuthenticated
                            ? <Navigate to="/principal"/>
                            : <Login />
                        }/>
                        <Route path="/cadastro" element={
                            this.state.isAuthenticated
                            ? <Navigate to="/principal"/>
                            : <Cadastro />
                        }/>
                        <Route path="/principal" element={
                            this.state.isAuthenticated
                            ? <Principal />
                            : <Navigate to="/login"/>
                        }/>
                        <Route path="/*" element={
                            this.state.isAuthenticated
                            ? <Navigate to="/principal"/>
                            : <Navigate to="/login"/>
                        }/>
                    </Routes>
                </BrowserRouter>
            </ AuthenticationContext.Provider>
        )
    }
}