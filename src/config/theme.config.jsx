import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

const globalPalette = {
	BG: "#222222",
	YELLOW: "#D6F379",
	RED: "#E3513D",
	BLACK: "#000000",
	WHITE: "#FFFFFF",
	GLOBAL_FONT: "Montserrat, monospace"
}

const theme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: globalPalette.BG
		},
		primary: {
			main: globalPalette.YELLOW
		}
	},
	typography: {
		fontFamily: globalPalette.GLOBAL_FONT,
		h1: {
			fontSize: "4rem",
			fontWeight: 700
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				style: {
					textTransform: "none",
					boxShadow: "none",
					fontWeight: 600,
					color: globalPalette.BLACK,
					borderRadius: "1.5rem"
				}
			}
		},
		MuiInputBase: {
			defaultProps: {
				style: {
					backgroundColor: globalPalette.WHITE,
					color: globalPalette.BLACK,
					fontWeight: 600,
					fontFamily: globalPalette.GLOBAL_FONT,
				}
			}
		},
		
	}
})

export const ThemeConfig = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}