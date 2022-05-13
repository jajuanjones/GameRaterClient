const host = "http://localhost:8000"

export const getGames = () => {
    return fetch(`${host}/games`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const getGameById = (gameId) => {
    return fetch(`${host}/games/${gameId}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const createGame = (game) => {
    return fetch(`${host}/games`, {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    })
        .then(res=>res.json())
}

export const updateGame = (id) => {
    return fetch(`${host}/games/${id}`, {
        method: "PUT",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })
        .then(res=>res.json())
}

export const deleteGame = (id) => {
    return fetch(`${host}/games/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const createPictureForGame = (picture) => {
    return fetch(`${host}/photos`, {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(picture)
    })
        .then(res=>res.json())
}

export const searchGames = (search) => {
    return fetch(`${host}/games?q=${search}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const orderGames = (param) => {
    return fetch(`${host}/games?orderby=${param}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}