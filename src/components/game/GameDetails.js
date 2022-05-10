import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "./GameManager";

export const GameDetails = () => {
    const [game, updateGame] = useState({categories:[]})
    const {gameId} = useParams()

    useEffect(()=> {
        getGameById(gameId).then(data=>updateGame(data))
    },[])

    return (
            <section className="game_section">
                <div className="game_container">
                    <div className="game__details">
                        <p>{game.title}</p>
                        <p>{game.description}</p>
                        <p>{game.year_released}</p>
                        <p>{game.number_of_players}</p>
                        <p>{game.time_to_play}</p>
                        <p>{game.age_recommendation}</p>
                        {game?.categories.map(category=> <p key="game_category">{category.label}</p>)}
                    </div>
                </div>
            </section>
    )

}