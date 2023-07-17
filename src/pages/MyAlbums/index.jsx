import { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { Container, Grid, Typography } from "@mui/material"
import { PageTitle } from "../../components/PageTitle"
import { UserAlbumsRequest } from "../../api/Api"
import { AlbumList } from "../../components/AlbumList"

export const MyAlbums = () => {
	const [enabledAlbumRequest, setEnabledAlbumRequest] = useState(true)
	const [albumsData, setAlbumsData] = useState(null)

	let { data: userAlbums } = useQuery(
		'userAlbums',
		async () => await UserAlbumsRequest(),
		{
			enabled: enabledAlbumRequest,
			refetchOnMount: true
		}
	)

	useEffect(() => {
		if (userAlbums) {
			setAlbumsData(userAlbums.data.items.map(album => album.album))
			setEnabledAlbumRequest(false)
		}
	}, [userAlbums])

	return (
		<Container maxWidth="lg" sx={{ mt: 9 }}>
			<Grid container direction="column">
				<Grid item>
					<PageTitle whiteText="Mis albumes" yellowText="guardados" align="center" />
				</Grid>
				<Grid item>
					<Typography>
						Disfruta de tu música a un solo click y descube que discos has guardado dentro de  “mis  álbumes”
					</Typography>
				</Grid>
				{albumsData &&
					<Grid container>
						<AlbumList albums={albumsData} refreshAlbumsList={setEnabledAlbumRequest} />
					</Grid>
				}
			</Grid>
		</Container>
	)
}