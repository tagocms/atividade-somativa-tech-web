import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { firebaseAuth, usersCollectionReference } from "../../configuration/firebase";
import { signOut } from "firebase/auth";

export class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            surname: "",
            birthDate: new Date(),
            errorMessage: "",
            isLoading: true
        };

        this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await getDoc(doc(usersCollectionReference, firebaseAuth.currentUser.uid));
            if (response.exists()) {
                const data = response.data();

                this.setState({
                    email: firebaseAuth.currentUser.email,
                    name: data.name,
                    surname: data.surname,
                    birthDate: data.birthDate.toDate(),
                    isLoading: false
                });
            } else {
                console.log("Não foi possível carregar.");
            }
        } catch (e) {
            console.log("Error loading user data: " + e);
            this.setState({errorMessage: "Erro ao recuperar dados do usuário."});
        }
    }

    async logout() {
        try {
            await signOut(firebaseAuth);
        } catch (e) {
            console.log("Error signing out: " + e);
            this.setState({errorMessage: "Erro ao sair da conta. Tente novamente."});
        }
    }

    render() {
        return (
            <div>
                {!this.state.isLoading &&
                    <div>
                        <div className="principal-header">
                            <h1>Principal</h1>
                            <button onClick={this.logout}>Sair</button>
                        </div>
                        
                        <ul>
                            <li>E-mail: {this.state.email}</li>
                            <li>Nome: {this.state.name} {this.state.surname}</li>
                            <li>Data de nascimento: {this.state.birthDate.toLocaleDateString()}</li>
                        </ul>

                        <div className="message-container">{this.state.errorMessage}</div>
                    </div>
                }
            </div>
        )
    }
}