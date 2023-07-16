import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

const globalPalette = {
	BG: "#222222",
	YELLOW: "#D6F379",
	RED: "#E3513D",
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
					fontWeight: 600
				}
			}
		}
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