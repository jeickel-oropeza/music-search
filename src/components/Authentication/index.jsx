import { useEffect, useState } from "react"
import { redirect } from "react-router-dom"

export const Authentication = ({ children }) => {
	console.log('children', children)

	const [sessionToken, setSessionToken] = useState(null)
	const sessionTokenStorage = sessionStorage.getItem('token')

	useEffect(() => {
		const hash = window.location.hash
		if (hash) {
			let token = hash.substring(1).split('&').find(item => item.startsWith('access_token')).split('=')[1]
			setSessionToken(token)
			sessionStorage.setItem('token', token)
			window.location.hash = ''
		}
	}, [])

	if (!sessionToken && !sessionTokenStorage) {
		redirect('/login')
	}

	return (children)
}