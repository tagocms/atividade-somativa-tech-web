import React from "react";

export class SignUpInForm extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.email = props.email;
        this.setEmail = props.setEmail;
        this.password = props.password;
        this.setPassword = props.setPassword;
        this.action = props.action;
    }

    render() {
        return(
            <form>
                <h3>{this.title}</h3>
                <input type="email" placeholder="E-mail" value={this.email} onChange={(e) => this.setEmail(e)} />
                <input type="password" placeholder="Senha" value={this.password} onChange={(e) => this.setPassword(e)} />
                <button onClick={(e) => this.action(e)}>Ir para a página principal</button>
            </form>
        )
    }
}