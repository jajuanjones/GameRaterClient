import React, { useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { Review } from "../review/Review";
import { getReviews } from "../review/ReviewManager";
import { getGameById } from "./GameManager";
import { Photo } from "./Photo";

export const GameDetails = () => {
    const [game, updateGame] = useState({categories:[], reviews:[ ]})
    const {gameId} = useParams()
    const history = useHistory()

    useEffect(()=> {
        getGameById(gameId).then(data=>updateGame(data))
    },[])

    return (
        <main>
            <section className="game_section">
                {/* We need a button that will push us to our review appview */}
                <button className="game_list_button" onClick={()=>history.push(`/games/${gameId}/review`)}>Create a Review</button>
                <button className="game_list_button" onClick={()=>history.push(`/games/${gameId}/rate`)}>Rate this Game</button>
                <button className="game_list_button" onClick={()=>history.push(`/games/${gameId}/edit`)}>Edit Game</button>
                <div className="game_container">
                    {/* Display all the properties of selected game */}
                    <div className="game__details">
                        <h2>Game Details</h2>
                        <p>Title: {game.title}</p>
                        <p>Description: {game.description}</p>
                        <p>Release Date: {game.year_released}</p>
                        <p>Player Count: {game.number_of_players}</p>
                        <p>Play Time: {game.time_to_play}</p>
                        <p>Age Recommendation: {game.age_recommendation}</p>
                        <p>Categories(s):</p>
                        {game?.categories.map(category=> <p key="game_category">{category.label}</p>)}
                        <p>Review(s):</p>
                        {game?.reviews.map(review=> <Review review={review}/>)}
                        <p>Ratings(s): {game.average_rating}</p>
                        <p>Photo(s):</p>
                        {game?.images.map(image=><Photo image={image}/>)}
                    </div>
                </div>
                <button className="game_list_button" onClick={()=>history.push(`/games/${gameId}/picture`)}>Add a Picture</button>
            </section>
        </main>
    )

}