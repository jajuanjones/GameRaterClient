import React from "react"
import { Route } from "react-router-dom"
import { GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"
import { PictureForm } from "./game/GamePictureForm"
import { GamesList } from "./game/GamesList"
import { UpdateGameForm } from "./game/UpdateGameForm"
import { RatingForm } from "./rating/RatingForm"
import { ReviewForm } from "./review/ReviewForm"


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
        <Route exact path="/games/:gameId(\d+)/edit">
            <UpdateGameForm/>
        </Route>
        <Route exact path="/games/:gameId(\d+)/review">
            <ReviewForm/>
        </Route>
        <Route exact path="/games/:gameId(\d+)/rate">
            <RatingForm/>
        </Route>
        <Route exact path="/games/:gameId(\d+)/picture">
            <PictureForm/>
        </Route>
        </>
    
}