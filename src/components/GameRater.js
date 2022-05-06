import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationView } from "./ApplicationView"
import { Navbar } from "./nav/Navbar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const GameRater = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("gr_token")) {
                return <>
                    <Route>
                        <Navbar />
                        <ApplicationView />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)
