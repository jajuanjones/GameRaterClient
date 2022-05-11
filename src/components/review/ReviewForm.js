import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { createReview } from "./ReviewManager";

export const ReviewForm = () => {
    const {gameId} = useParams()
    const [currentReview, setCurrentReview] = useState({
        review: "",
        gameId: gameId
    })
    const history = useHistory()

    const changeReviewState = (domEvent) => {
        // TODO: Complete the onChange function
        const newReview = Object.assign({}, currentReview)
        // if statement check if target name categories
            // append into categories array
        newReview[domEvent.target.name] = domEvent.target.value
        setCurrentReview(newReview)
    }

    return(
        <form className="reviewForm">
            <h2 className="reviewForm__title">Write a Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Add your review: </label>
                    <textarea type="text" name="review" required autoFocus className="form-control"
                        value={currentReview.review}
                        onChange={changeReviewState}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const review = {
                        review: currentReview.review,
                        game: parseInt(currentReview.gameId)
                    }

                    // Send POST request to your API
                    createReview(review)
                        .then(() => history.push(`/games/${gameId}`))
                }}
                className="btn btn-primary">Submit</button>
        </form>
    )
}