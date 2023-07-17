import { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { ArtistRequest, ArtistAlbumsRequest } from "../../api/Api"
import { Container, Grid, Typography } from "@mui/material"
import { AlbumList } from "../../components/AlbumList"

export const Artist = () => {
	const { artistId } = useParams()

	const [enabledArtistRequest, setEnabledArtistRequest] = useState(true)
	const [enabledAlbumRequest, setEnabledAlbumRequest] = useState(true)
	const [artistData, setArtistData] = useState(null)
	const [albumsData, setAlbumsData] = useState(null)

	let { data: artistQuery } = useQuery(
		'artistQuery',
		async () => await ArtistRequest(artistId),
		{ enabled: enabledArtistRequest }
	)

	let { data: artistAlbums } = useQuery(
		'artistAlbums',
		async () => await ArtistAlbumsRequest(artistId),
		{
			enabled: enabledAlbumRequest,
			refetchOnMount: true
		}
	)

	useEffect(() => {
		if (artistQuery) {
			setArtistData(artistQuery.data)
			setEnabledArtistRequest(false)
		}
		if (artistAlbums) {
			setAlbumsData(artistAlbums.data.items)
			setEnabledAlbumRequest(false)
		}
	}, [artistQuery, artistAlbums])

	return (
		<>
			{artistData &&
				<>
					<Container
						maxWidth="lg"
					>
						<Grid
							container
							direction="row"
							mt={12}
							alignItems="center"
							spacing={5}
						>
							<Grid item>
								<img src={artistData.images[0].url} alt={artistData.name} className="image-artist" />
							</Grid>
							<Grid item>
								<Typography variant="h1">
									{artistData.name}
								</Typography>
								<Typography>
									Seguidores: {artistData.followers.total}
								</Typography>
							</Grid>
						</Grid>
					</Container >
					<Container
						maxWidth="xl"
						direction="row"
						alignItems="center"
						justifyContent="flex-start"
					>
						<Typography mt={3}>
							{`Guarda tus álbumes favoritos de ${artistData.name}`}
						</Typography>
						<Grid
							container
							direction="row"
							justifyContent="center"
							spacing={3}
						>
							{albumsData &&
								<AlbumList albums={albumsData} refreshAlbumsList={setEnabledAlbumRequest} />
							}
						</Grid>
					</Container>
				</>
			}
		</>
	)
}