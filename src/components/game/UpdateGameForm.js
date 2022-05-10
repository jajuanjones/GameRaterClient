import React, {useState, useEffect} from "react";
import { useParams,useHistory } from "react-router-dom";
import { getCategories } from "../category/CategoryManager";
import { getGameById, updateGame } from "./GameManager";

export const UpdateGameForm = () => {
    const history = useHistory()
    const [categories, updateCategories] = useState([])
    const [currentGame, updateCurrentGame] = useState({
        title: "",
        designer: "",
        description: "",
        yearReleased: "",
        numberOfPlayers: 0,
        timeToPlay: 0,
        ageRecommendation: 0,
        categories: []
    })
    const {gameId} = useParams()

    useEffect(()=>{
        getGameById(gameId).then(data=>updateCurrentGame(data))
        getCategories().then(data=>updateCategories(data))
    },[])

    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        const newGame = Object.assign({}, currentGame)
        // if statement check if target name categories
            // append into categories array
        domEvent.target.name == "categories" ? newGame[domEvent.target.name].push(parseInt(domEvent.target.value)) : newGame[domEvent.target.name] = domEvent.target.value
        updateCurrentGame(newGame)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yearReleased">Year Released: </label>
                    <input type="text" name="yearReleased" required autoFocus className="form-control"
                        value={currentGame.yearReleased}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Player Count: </label>
                    <input type="number" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="timeToPlay">Average Hours: </label>
                    <input type="number" name="timeToPlay" required autoFocus className="form-control"
                        value={currentGame.timeToPlay}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ageRecommendation">Age: </label>
                    <input type="number" name="ageRecommendation" required autoFocus className="form-control"
                        value={currentGame.ageRecommendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <select name="categories"
                        value={currentGame.categories}
                        onChange={changeGameState}>

                        <option value="0">Select a Game Type</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.label}
                            </option>
                        ))}
                    </select>  
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        title: currentGame.title,
                        description: currentGame.description,
                        designer: currentGame.designer,
                        time_to_play: parseInt(currentGame.timeToPlay),
                        number_of_players: parseInt(currentGame.numberOfPlayers),
                        year_released: currentGame.yearReleased,
                        age_recommendation: parseInt(currentGame.ageRecommendation),
                        categories: currentGame.categories,
                    }

                    // Send POST request to your API
                    updateGame(game)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Save</button>
        </form>
    )
}