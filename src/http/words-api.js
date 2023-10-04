import api from "./api"

const resource="/api/words"

export const allWords=()=> api.get(resource)