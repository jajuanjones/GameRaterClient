import React, { useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { Review } from "../review/Review";
import { getReviews } from "../review/ReviewManager";
import { getGameById } from "./GameManager";

export const GameDetails = () => {
    const [game, updateGame] = useState({categories:[]})
    const {gameId} = useParams()
    const history = useHistory()
    const [reviews, updateReviews] = useState([])

    useEffect(()=> {
        getGameById(gameId).then(data=>updateGame(data))
        getReviews().then(data=>updateReviews(data))
    },[])

    return (
        <main>
            <section className="game_section">
                {/* We need a button that will push us to our review appview */}
                <button className="game_list_button" onClick={()=>history.push(`/games/${gameId}/review`)}>Create a Review</button>
                <button className="game_list_button" onClick={()=>history.push(`/games/${gameId}/edit`)}>Edit Game</button>
                <div className="game_container">
                    {/* Display all the properties of selected game */}
                    <div className="game__details">
                        <p>{game.title}</p>
                        <p>{game.description}</p>
                        <p>{game.year_released}</p>
                        <p>{game.number_of_players}</p>
                        <p>{game.time_to_play}</p>
                        <p>{game.age_recommendation}</p>
                        {game?.categories.map(category=> <p key="game_category">{category.label}</p>)}
                        {game.reviews.map(review=> <Review review={review}/>)}
                    </div>
                </div>
            </section>
        </main>
    )

}