import React from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { SignUpInForm } from "../../components";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        }
        this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(e, context) {
        e.preventDefault();
        // TODO: Implementar autenticação
        context.setIsAuthenticated(true)
    }
    render() {
        return (
            <AuthenticationContext.Consumer>
                { context => {
                    return (
                        <div>
                            <SignUpInForm 
                                title="Login"
                                email={this.state.email}
                                setEmail={(e) => this.setState({email: e.target.value})}
                                password={this.state.password}
                                setPassword={(e) => this.setState({password: e.target.value})}
                                action={(e) => this.authenticateUser(e, context)}
                            />
                            {this.state.errorMessage.length > 0 &&
                                <div className="message-container">{this.state.errorMessage}</div>
                            }
                        </div>
                    )
                }}
            </AuthenticationContext.Consumer>
        )
    }
}