import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                            this.isAuthenticated
                            ? <Principal />
                            : <Login />
                        }/>
                        <Route path="/login" element={
                            this.isAuthenticated
                            ? <Principal />
                            : <Login />
                        }/>
                        <Route path="/cadastro" element={
                            this.isAuthenticated
                            ? <Principal />
                            : <Cadastro />
                        }/>
                        <Route path="/*" element={
                            this.isAuthenticated
                            ? <Principal />
                            : <Login />
                        }/>
                    </Routes>
                </BrowserRouter>
            </ AuthenticationContext.Provider>
        )
    }
}