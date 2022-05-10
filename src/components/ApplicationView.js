import React from "react"
import { Route } from "react-router-dom"
import { GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"
import { GamesList } from "./game/GamesList"


export const ApplicationView = () => {
    return <>
        <Route exact path="/games">
            <GamesList/>
        </Route>
        <Route exact path="/games/:gameId(\d+)">
            <GameDetails/>
        </Route>
        <Route exact path="/games/new">
            <GameForm/>
        </Route>
        </>
    
}