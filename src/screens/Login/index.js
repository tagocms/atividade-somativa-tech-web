import React from "react";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(e, context) {
        e.preventDefault();
        context.setIsAuthenticated(true)
    }
    render() {
        return (
            <AuthenticationContext.Consumer>
                { context => {
                    return (
                        <button onClick={(e) => this.authenticateUser(e, context)}>Authenticate!!</button>
                    )
                }}
            </AuthenticationContext.Consumer>
        )
    }
}