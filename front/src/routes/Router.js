import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";
import SignUp from "../components/SignUp";


const AppRouter = ({isLoggedIn}) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </>
                ) : (
                    <Route path="/" element={<SignUp/>}/>
                )}
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;