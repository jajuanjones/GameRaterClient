export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const getGameById = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const createGame = () => {
    return fetch(`http://localhost:8000/games`, {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(res=>res.json())
}

export const deleteGame = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}