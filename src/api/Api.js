import axios from "axios"
import { API_URL } from "./KeyNames"

const baseRequest = async (method, url, data) => {
	try {
		const token = sessionStorage.getItem('token')
		let headers = { Authorization: `Bearer ${token}` }
		const config = { method, url, headers, data }
		const response = await axios(config)
		return response
	} catch (error) {
		console.log(error)
	}
}

export const SearchRequest = async (artist, offset = 0) => {
	try {
		const response = await baseRequest(
			'get',
			`${API_URL}/search?q=artist:${artist}&type=artist&offset=${offset}&limit=4`,
			{}
		)

		return response
	} catch (error) {
		console.log(error)
	}
}