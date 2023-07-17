import { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { ItemList } from "../ItemList"
import { CheckUserAlbumsRequest, RemoveUserAlbumsRequest, AddUserAlbumsRequest } from "../../api/Api"
import { Button } from "@mui/material"

export const AlbumList = ({ albums, refreshAlbumsList }) => {
	const [enabledCheckAlbums, setEnabledCheckAlbums] = useState(true)
	const idArtistAlbums = albums.map(album => album.id)
	const [checkUserAlbums, setCheckUserAlbums] = useState([])

	const buttonAlbumHandleClick = async (action, albumId) => {
		if(action === 'remove') {
			await RemoveUserAlbumsRequest(albumId)
		} else {
			await AddUserAlbumsRequest(albumId)
		}
		refreshAlbumsList(true)
		setEnabledCheckAlbums(true)
	}

	let { data: artistAlbums } = useQuery(
		'CheckUserAlbumsRequest',
		async () => await CheckUserAlbumsRequest(idArtistAlbums.join()),
		{
			enabled: enabledCheckAlbums,
			refetchOnMount: true
		}
	)

	useEffect(() => {
		if (artistAlbums) {
			setCheckUserAlbums(artistAlbums.data)
			setEnabledCheckAlbums(false)
		}
	}, [artistAlbums])

	const generateButton = (savededAlbum, albumId) => {
		if (savededAlbum === true) {
			return (
				<Button error onClick={() => buttonAlbumHandleClick('remove', albumId)}>
					Remover album
				</Button>
			)
		} else {
			return (
				<Button onClick={() => buttonAlbumHandleClick('add', albumId)}>
					Agregar album
				</Button>
			)
		}
	}

	return (
		<>
			{(checkUserAlbums.length > 0) &&
				albums.map((album, index) => (
					<ItemList
						key={album.id}
						title={album.name}
						information={`Publicado: ${album.release_date}`}
						media={(album.images.length > 0) ? album.images[0].url : null}
						actions={true}
						button={() => generateButton(checkUserAlbums[index], album.id)}
					/>
				))
			}
		</>
	)
}