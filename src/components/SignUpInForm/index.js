import React from "react";
import { Link } from "react-router-dom";

export class SignUpInForm extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.type;
        this.email = props.email;
        this.setEmail = props.setEmail;
        this.password = props.password;
        this.setPassword = props.setPassword;
        this.action = props.action;
        this.children = props.children;
    }

    render() {
        return(
            <div>
                <div className="header">
                    <h3>{this.type}</h3>
                    <div className="link-group">
                        <Link to="/login">Login</Link>
                        <Link to="/cadastro">Cadastro</Link>
                    </div>
                </div>
            <form action={(e) => this.action(e)}>
                {this.children}
                <input type="email" placeholder="E-mail" onChange={(e) => this.setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" onChange={(e) => this.setPassword(e.target.value)} />
                <button type="submit">{this.type === "Login" ? "Acessar página principal" : "Cadastrar e acessar página principal"}</button>
            </form>
            </div>
        );
    }
}