export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const getCategoryById = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`, {
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}

export const createCategory = () => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        }
    })
        .then(res=>res.json())
}

export const deleteCategory = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization" : `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res=>res.json())
}