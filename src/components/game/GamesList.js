import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { getGames, orderGames, searchGames } from "./GameManager";
import { Link } from "react-router-dom"

export const GamesList = () => {
    const [search_text, updateSearch] = useState("")
    const [games, updateGames] = useState([])
    const history = useHistory()

    useEffect(()=>{
        if (search_text == "") {
            getGames().then((data)=>updateGames(data))
        } else {
            searchGames(search_text).then(data=>updateGames(data))
        }
    },[search_text])

    return(
        <section className="games_section">
            <button className="game_list_button" onClick={()=>history.push("/games/new")}>Register New Game</button>
            {/* make sure our url has 'q' in it */}
            <input type="text" onChange={(evt)=>{updateSearch(evt.target.value)}}></input>
            <select onChange={(evt)=>orderGames(evt.target.value).then(data=>updateGames(data))}>
                <option value="0" >Sort ⇅</option>
                <option value="year_released">Release Year</option>
                <option value="time_to_play">Play Time</option>
                <option value="designer">Designer</option>
            </select>
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