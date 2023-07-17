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
		<Container maxWidth="xl" sx={{
			minHeight: "100vh",
		}}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="flex-start"
				mt={12}
			>
				<Grid item>
					<PageTitle whiteText="Mis albumes" yellowText="guardados" align="center" />
				</Grid>
				<Grid
					item
					mt={3}
					sx={{
						width: {
							xs: "100%",
							md: "30%"
						}
					}}
				>
					<Typography align="center">
						Disfruta de tu música a un solo click y descube que discos has guardado dentro de  “mis  álbumes”
					</Typography>
				</Grid>
				{albumsData &&
					<Grid
						container
						direction="row"
						justifyContent="center"
						spacing={3}
						mt={5}
					>
						<AlbumList albums={albumsData} refreshAlbumsList={setEnabledAlbumRequest} />
					</Grid>
				}
			</Grid>
		</Container>
	)
}