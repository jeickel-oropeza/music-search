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
				alignItems="center"
				justifyContent="space-around"
				sx={{
					minHeight: "100vh",
					flexDirection: {
						xs: "column",
						md: "row"
					},
					alignItems: {
						xs: "flex-start",
						md: "center"
					},
					justifyContent: {
						xs: "center",
						md: "space-around"
					}
				}}
			>
				<Grid
					item
					columns={{ xs: 12, sm: 12, md: 6, lg: 6 }}
				>
					<img src={arrow_login} alt="Arrow login" className="login-logo" />
				</Grid>
				<Grid
					item
					columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
				>
					<Grid item>
						<PageTitle whiteText="Disfruta de la" yellowText="mejor música" align="left" />
					</Grid>
					<Grid
						item
						direction="column"
						justifyContent="space-between"

					>
						<Typography>
							Accede a tu cuenta para guardar tus albumes favoritos.
						</Typography>
						<a href={AUTH_URL}>
							Log in con Spotify
						</a>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}