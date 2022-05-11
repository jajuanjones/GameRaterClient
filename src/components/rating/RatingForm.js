import React, { useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom"
import { createRating } from "./RatingManager"

export const RatingForm = () => {
    const {gameId} = useParams()
    const [currentRating, setCurrentRating] = useState({
        rating: 0,
        game: gameId
    })
    const history = useHistory()

    const changeRatingState = (evt) => {
        const newRating = Object.assign({}, currentRating)
        newRating[evt.target.name] = evt.target.value
        setCurrentRating(newRating)
    }

    return(
        <form className="gameForm">
            <h2 className="gameForm__title">Rate Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Rating: </label>
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="1"
                        onChange={changeRatingState}
                    /> 1
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="2"
                        onChange={changeRatingState}
                    /> 2
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="3"
                        onChange={changeRatingState}
                    /> 3
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="4"
                        onChange={changeRatingState}
                    /> 4
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="5"
                        onChange={changeRatingState}
                    /> 5
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="6"
                        onChange={changeRatingState}
                    /> 6
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="7"
                        onChange={changeRatingState}
                    /> 7
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="8"
                        onChange={changeRatingState}
                    /> 8
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="9"
                        onChange={changeRatingState}
                    /> 9
                    <input type="radio" name="rating" required autoFocus className="form-control"
                        value="10"
                        onChange={changeRatingState}
                    /> 10
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const rating = {
                        rating: parseInt(currentRating.rating),
                        game: parseInt(currentRating.game),
                    }

                    // Send POST request to your API
                    createRating(rating)
                        .then(() => history.push(`/games/${gameId}`))
                }}
                className="btn btn-primary">Submit</button>
        </form>
    )
}