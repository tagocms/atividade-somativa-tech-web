import React from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { SignUpInForm } from "../../components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firebaseAuth, usersCollectionReference } from "../../configuration/firebase";

export class Cadastro extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                email: "",
                password: "",
                name: "",
                surname: "",
                birthDate: new Date(),
                errorMessage: ""
            };
            this.createUser = this.createUser.bind(this);
        }
    
        async createUser(e, context) {
            if (!this.state.email.length > 0 
                || !this.state.password > 0
                || !this.state.name > 0
                || !this.state.surname > 0
                || !this.state.birthDate
            ) {
                this.setState({errorMessage: "Todos os campos devem ser preenchidos para o cadastro."});
                return;
            }

            try {
                const response = await createUserWithEmailAndPassword(firebaseAuth, this.state.email, this.state.password);
                await setDoc(doc(usersCollectionReference, response.user.uid), {
                    name: this.state.name,
                    surname: this.state.surname,
                    birthDate: this.state.birthDate
                });
            } catch (e) {
                console.log("Error signing up: " + e);
                this.setState({errorMessage: "Erro ao cadastrar. Tente novamente."});
            }
            
        }
        render() {
            return (
                <AuthenticationContext.Consumer>
                    { context => {
                        return (
                            <div>
                                <SignUpInForm 
                                    type="Cadastro"
                                    email={this.state.email}
                                    setEmail={(newValue) => this.setState({email: newValue})}
                                    password={this.state.password}
                                    setPassword={(newValue) => this.setState({password: newValue})}
                                    action={(e) => this.createUser(e, context)}
                                >
                                    <input type="text" placeholder="Primeiro nome" onChange={(e) => this.setState({name: e.target.value})}/>
                                    <input type="surname" placeholder="Sobrenome" onChange={(e) => this.setState({surname: e.target.value})}/>
                                    <input type="date" onChange={(e) => this.setState({birthDate: e.target.valueAsDate})}/>
                                </SignUpInForm>
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