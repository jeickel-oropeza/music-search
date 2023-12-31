const SPOTIFY_AUTH_URL = import.meta.env.VITE_SPOTIFY_AUTH_URL
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const SPOTIFY_REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
const SPOTIFY_RESPONSE_TYPE = import.meta.env.VITE_SPOTIFY_RESPONSE_TYPE
const SPOTIFY_API_URL = import.meta.env.VITE_SPOTIFY_API_URL

export const AUTH_URL = `${SPOTIFY_AUTH_URL}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${SPOTIFY_REDIRECT_URI}&response_type=${SPOTIFY_RESPONSE_TYPE}&scope=user-library-read user-library-modify`
export const API_URL = SPOTIFY_API_URL