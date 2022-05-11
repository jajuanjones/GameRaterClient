const host = "http://localhost:8000"

export const getRatings = () => {
    return fetch(`${host}/ratings`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const getRatingById = (id) => {
    return fetch(`${host}/ratings/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const createRating = (rating) => {
    return fetch(`${host}/ratings`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rating)
    })
        .then(res=>res.json())
}