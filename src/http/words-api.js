import api from "./api"

const resource="/words"

export const allWords=()=> api.get(resource)