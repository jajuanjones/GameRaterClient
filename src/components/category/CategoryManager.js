const host = "http://localhost:8000" 

export const getCategories = () => {
    return fetch(`${host}/categories`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const getCategoryById = (id) => {
    return fetch(`${host}/categories/${id}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const createCategory = () => {
    return fetch(`${host}/categories`, {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(res=>res.json())
}

export const deleteCategory = (id) => {
    return fetch(`${host}/categories/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}