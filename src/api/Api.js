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

export const ArtistRequest = async (artistId) => {
	try {
		const response = await baseRequest(
			'get',
			`${API_URL}/artists/${artistId}`,
			{}
		)

		return response
	} catch (error) {
		console.log(error)
	}
}

export const ArtistAlbumsRequest = async (artistId) => {
	try {
		const response = await baseRequest(
			'get',
			`${API_URL}/artists/${artistId}/albums?include_groups=album`,
			{}
		)

		return response
	} catch (error) {
		console.log(error)
	}
}

export const CheckUserAlbumsRequest = async (albumIds) => {
	try {
		const response = await baseRequest(
			'get',
			`${API_URL}/me/albums/contains?ids=${albumIds}`,
			{}
		)

		return response
	} catch (error) {
		console.log(error)
	}
}

export const RemoveUserAlbumsRequest = async (albumIds) => {
	try {
		const response = await baseRequest(
			'delete',
			`${API_URL}/me/albums?ids=${albumIds}`,
			{}
		)
		return response
	} catch (error) {
		console.log(error)
	}
}

export const AddUserAlbumsRequest = async (albumIds) => {
	try {
		const response = await baseRequest(
			'put',
			`${API_URL}/me/albums?ids=${albumIds}`,
			{}
		)
		return response
	} catch (error) {
		console.log(error)
	}
}

export const UserAlbumsRequest = async () => {
	try {
		const response = await baseRequest(
			'get',
			`${API_URL}/me/albums`,
			{}
		)
		return response
	} catch (error) {
		console.log(error)
	}
}