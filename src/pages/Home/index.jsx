import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Container, Grid, Typography } from "@mui/material"
import { PageTitle } from "../../components/PageTitle"
import { SearchForm } from "../../components/SearchForm"
import { ArtistList } from "../../components/ArtistList"
import { SearchRequest } from "../../api/Api"

export const Home = () => {
	const [enabledSearch, setEnabledSearch] = useState(false)
	const [artistName, setArtistName] = useState(null)
	const [artistList, setArtistList] = useState([])
	const [totalResult, setTotalResult] = useState(null)
	const [showingItems, setShowingItems] = useState(null)
	const [offset, setOffset] = useState(0)

	let { data: apiResponse, isLoading, isError } = useQuery(
		`searchArtist${offset}`,
		async () => await SearchRequest(artistName, offset),
		{ enabled: enabledSearch }
	)

	useEffect(() => {
		if (apiResponse) {
			setArtistList(apiResponse.data.artists.items)
			setShowingItems(apiResponse.data.artists.limit)
			setTotalResult(apiResponse.data.artists.total)
			setEnabledSearch(false)
		}
	}, [apiResponse])

	const handleSubmit = (e) => {
		e.preventDefault()
		setEnabledSearch(true)
	}

	const handleInputChange = (e) => {
		setArtistName(e.target.value)
	}

	return (
		<Container maxWidth="lg">
			<Grid
				container
				direction="column"
			>
				<Grid item>
					<PageTitle whiteText="Busca tus" yellowText="artistas" align="center" />
				</Grid>
				<Grid item>
					<Typography>
						Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus álbumes favoritos
					</Typography>
				</Grid>
				<Grid item>
					<SearchForm
						handleSubmit={handleSubmit}
						handleChange={handleInputChange}
						buttonDisabled={!artistName}
					/>
				</Grid>
				<Grid item>
					{(artistList.length > 0) &&
						<ArtistList
							dataArtists={artistList}
							totalResult={totalResult}
							showingItems={showingItems}
							setOffset={setOffset}
							setEnabledSearch={setEnabledSearch}
						/>
					}
				</Grid>
			</Grid>
		</Container>
	)
}