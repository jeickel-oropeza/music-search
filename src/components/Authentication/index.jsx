import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Authentication = ({ children }) => {
	const navigate = useNavigate()
	const [sessionToken, setSessionToken] = useState(null)
	const sessionTokenStorage = sessionStorage.getItem('token')

	useEffect(() => {
		const hash = window.location.hash
		if (hash) {
			let token = hash.substring(1).split('&').find(item => item.startsWith('access_token')).split('=')[1]
			setSessionToken(token)
			sessionStorage.setItem('token', token)
			window.location.hash = ''
			navigate('/')
		}
	}, [])

	if (!sessionTokenStorage) {
		navigate('/login')
	}

	return (children)
}