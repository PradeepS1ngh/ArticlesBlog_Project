import React, { useContext } from "react";
import AuthContext from "../../Context/Auth/AuthContext";

function Alert() {
    const authContext = useContext(AuthContext);
    const { error } = authContext;
    console.log(error);
    return (
        error !== null && (
            <div class="alert alert-warning" role="alert">
                {error}
            </div>
        )
    );
}

export default Alert;
