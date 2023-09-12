import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    dispatch(
                        login({
                            name: "Titann",
                            age: 4,
                            email: "titann@email.com",
                        })
                    );
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    dispatch(
                        logout({
                            name: "Titann",
                            age: 4,
                            email: "titann@email.com",
                        })
                    );
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Login;
