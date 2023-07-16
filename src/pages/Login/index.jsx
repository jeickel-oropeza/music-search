import { Container, Grid, Typography } from "@mui/material"
import arrow_login from "../../assets/arrow_login.svg"
import { PageTitle } from "../../components/PageTitle"
import { AUTH_URL } from "../../api/KeyNames"

export const Login = () => {
	return (
		<Container maxWidth="lg">
			<Grid
				container
				direction="row"
				justifyContent="space-around"
				alignItems="center"
			>
				<Grid item>
					<img src={arrow_login} alt="Arrow login" />
				</Grid>
				<Grid item>
					<PageTitle whiteText="Disfruta de la" yellowText="mejor música" align="left" />
					<Typography>
						Accede a tu cuenta para guardar tus albumes favoritos.
					</Typography>
					<a href={AUTH_URL}>
						Log in con Spotify
					</a>
				</Grid>
			</Grid>
		</Container>
	)
}