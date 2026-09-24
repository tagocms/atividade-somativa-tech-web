import React from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { SignUpInForm } from "../../components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../configuration/firebase";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };
        this.authenticateUser = this.authenticateUser.bind(this);
    }

    async authenticateUser(e, context) {
        if (!this.state.email.length > 0
            || !this.state.password.length > 0
        ) {
            this.setState({errorMessage: "E-mail e senha precisam preenchidos para fazer o login."});
            return;
        }

        try {
            await signInWithEmailAndPassword(firebaseAuth, this.state.email, this.state.password);
        } catch (e) {
            console.log("Error loging in: " + e);
            this.setState({errorMessage: "Erro ao entrar na conta. Tente novamente."});
        }

        
    }
    render() {
        return (
            <AuthenticationContext.Consumer>
                { context => {
                    return (
                        <div>
                            <SignUpInForm 
                                type="Login"
                                email={this.state.email}
                                setEmail={(newValue) => this.setState({email: newValue})}
                                password={this.state.password}
                                setPassword={(newValue) => this.setState({password: newValue})}
                                action={(e) => this.authenticateUser(e, context)}
                            />
                            {this.state.errorMessage.length > 0 &&
                                <div className="message-container">{this.state.errorMessage}</div>
                            }
                        </div>
                    )
                }}
            </AuthenticationContext.Consumer>
        );
    }
}