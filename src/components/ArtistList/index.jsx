import { Grid, Pagination, Typography } from "@mui/material"
import { ItemList } from "../ItemList"

export const ArtistList = ({ dataArtists, totalResult, showingItems, setOffset, setEnabledSearch }) => {
	const countPages = Math.ceil(totalResult / showingItems)

	const handlePaginationChange = (e, currentPage) => {
		(currentPage === 1) ? setOffset(0) : setOffset((currentPage - 1) * 4)
		setEnabledSearch(true)
	}

	const handleItemClick = (artistId) => {
		console.log('artistId', artistId)
	}

	return (
		<Grid container direction="column">
			<Typography>
				{`Mostrando ${dataArtists.length} resultados de ${totalResult}`}
			</Typography>
			<Grid container direction="row">
				{dataArtists.map(artist => (
					<ItemList
						key={artist.id}
						id={artist.id}
						title={artist.name}
						information={`Seguidores: ${artist.followers.total}`}
						media={(artist.images.length > 0) ? artist.images[0].url : null}
						handleItemClick={() => handleItemClick(artist.id)}
					/>
				))}
			</Grid>
			<Pagination count={countPages} color="primary" onChange={handlePaginationChange} />
		</Grid>
	)
}