import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { getGames } from "./GameManager";
import { Link } from "react-router-dom"

export const GamesList = () => {
    const [games, updateGames] = useState([])
    const history = useHistory()

    useEffect(()=>{
        getGames().then((data)=>updateGames(data))
    },[])

    return(
        <section className="games_section">
            <button className="game_list_button" onClick={()=>history.push("/games/new")}>Register New Game</button>
            <div className="games_container">
                <div className="games__elements">
                    {
                        games.map((game)=>{
                            return <div key={game.id} className="game_element">
                                <Link to={`/games/${game.id}`}>{game.title}</Link>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}