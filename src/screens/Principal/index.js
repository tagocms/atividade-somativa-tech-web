import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { firebaseAuth, usersCollectionReference } from "../../configuration/firebase";

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
    }

    async componentDidMount() {
        try {
            const response = await getDoc(doc(usersCollectionReference, firebaseAuth.currentUser.uid));
            if (response.exists()) {
                const data = response.data;

                this.setState({
                    email: firebaseAuth.currentUser.email,
                    name: data.name,
                    surname: data.surname,
                    birthDate: data.birthDate,
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

    render() {
        return (
            <div>
                {!this.state.isLoading &&
                    <div>
                        <h1>Principal</h1>
                        <ul>
                            <li>{this.state.email}</li>
                            <li>{this.state.name} {this.state.surname}</li>
                            <li>{this.state.birthDate}</li>
                        </ul>
                    </div>
                }
            </div>
        )
    }
}