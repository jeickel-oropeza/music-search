import { AppBar, Box, Container, Grid, Toolbar } from "@mui/material"
import spotify_logo from "../assets/spotify_logo.svg"
import logout from "../assets/logout.svg"
import { Stack } from "@mui/system"
import { Link } from "react-router-dom"

export const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<Container maxWidth="xl">
						<Grid
							container
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item>
								<img src={spotify_logo} className="logo" alt="Spotify logo" />
							</Grid>
							<Grid item>
								<Stack direction="row" spacing={2}>
									<Link>Buscar</Link>
									<Link>Mis albumes</Link>
									<Link>Cerrar sesión</Link>
									<Link>
										<img src={logout} alt="Logout icon" />
									</Link>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	)
}