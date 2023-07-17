import { Container, Grid, Pagination, Typography } from "@mui/material"
import { ItemList } from "../ItemList"
import { useNavigate } from "react-router-dom"

export const ArtistList = ({ dataArtists, totalResult, showingItems, setOffset, setEnabledSearch }) => {
	const navigate = useNavigate()
	const countPages = Math.ceil(totalResult / showingItems)

	const handlePaginationChange = (e, currentPage) => {
		(currentPage === 1) ? setOffset(0) : setOffset((currentPage - 1) * 4)
		setEnabledSearch(true)
	}

	const handleItemClick = (artistId) => {
		navigate(`/artist/${artistId}`)
	}

	return (
		<Grid container direction="column" mt={5}>
			<Grid item pl={12}>
				<Typography>
					{`Mostrando ${dataArtists.length} resultados de ${totalResult}`}
				</Typography>
			</Grid>
			<Grid
				container
				direction="row"
				justifyContent="center"
				mt={3}
				spacing={3}
			>
				{dataArtists.map(artist => (
					<ItemList
						key={artist.id}
						title={artist.name}
						information={`Seguidores: ${artist.followers.total}`}
						media={(artist.images.length > 0) ? artist.images[0].url : null}
						handleItemClick={() => handleItemClick(artist.id)}
					/>
				))}
			</Grid>
			<Grid item pl={10} mb={10}>
				<Pagination count={countPages} color="primary" onChange={handlePaginationChange} />
			</Grid>
		</Grid>
	)
}