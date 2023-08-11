
import React from "react";
import {useNavigate} from "react-router-dom";
import {authService} from "../fbase";


export default () => {
    const history = useNavigate();
    const onLogOutClick = () => {
        authService.signOut();
        useNavigate.push("/");
    };
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};