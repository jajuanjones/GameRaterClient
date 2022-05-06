import React from "react"
import { Route } from "react-router-dom"
import { GamesList } from "./game/GamesList"


export const ApplicationView = () => {
    return <>
        <Route exact path="/games">
            <GamesList/>
        </Route>
        </>
    
}