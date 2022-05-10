const host = "http://localhost:8000"

export const getReviews = () => {
    return fetch(`${host}/reviews`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const createReview = (review) => {
    return fetch(`${host}/reviews`, {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
        .then(res=>res.json())
}