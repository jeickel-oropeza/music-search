import { AppBar, Box, Container, Grid, Toolbar, Divider, Typography } from "@mui/material"
import spotify_logo from "../assets/spotify_logo.svg"
import logoutIcon from "../assets/logout.svg"
import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
	const navigate = useNavigate()
	const session = sessionStorage.getItem('token')
	const logout = (e) => {
		e.preventDefault()
		sessionStorage.clear()
		navigate('/login')
	}

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
							{session &&
								<Grid item>
									<Stack direction="row" spacing={2}>
										<Link to="/">Buscar</Link>
										<Link to="/my-albums">Mis albumes</Link>
										<Divider sx={{ height: 28, m: 0.5, borderColor: "#FFFFFF" }} orientation="vertical" />
										<Link onClick={logout}>
											<Typography sx={{
												display: {
													xs: "none",
													md: "block"
												}
											}}>
												Cerrar sesión
											</Typography>
											<img src={logoutIcon} alt="Logout icon" className="logout-icon" />
										</Link>

									</Stack>
								</Grid>
							}
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	)
}