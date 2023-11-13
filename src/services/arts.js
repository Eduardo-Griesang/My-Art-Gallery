import axios from "axios";

const artsAPI = axios.create({baseURL: "http://localhost:8000/art"})

function getArts() {
    const response = artsAPI.get('/')
    return response.data
}

export {
    getArts
}