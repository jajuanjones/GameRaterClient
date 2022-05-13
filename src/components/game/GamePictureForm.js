import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { createPictureForGame } from "./GameManager";

export const PictureForm = () => {
    const {gameId} = useParams()
    const history = useHistory()
    const [currentGameImage, setCurrentGameImage] = useState({
        image: "",
        game: gameId
    })

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    
    const createGameImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);
            // Update a component state variable to the value of base64ImageString
            const newImage = Object.assign({}, currentGameImage)
            newImage[event.target.name] = event.target.value
            setCurrentGameImage(newImage)
        });
    }

    return(
        <div>
            <input type="file" id="game_image" onChange={createGameImageString} />
            <input type="hidden" name="game_id" value={gameId} />
            <button onClick={() => {
                // Upload the stringified image that is stored in state
                const image = {
                    image: currentGameImage.image,
                    game: currentGameImage.game
                }
                createPictureForGame(image)
                    .then(()=>history.push(`/games/${gameId}`))
            }}>Upload</button>
        </div>
    )
}