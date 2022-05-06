import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { getGames } from "./GameManager";

export const GamesList = () => {
    const [games, updateGames] = useState([])

    useEffect(()=>{
        getGames().then((data)=>updateGames(data))
    },[])

    return(
        <section className="games_section">
            <div className="games_container">
                <div className="games__elements">
                    {
                        games?.map((game)=>{
                            return <div key={game.id} className="game_element">
                                <p>{game.description}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}