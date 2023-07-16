import { Typography } from "@mui/material"

export const PageTitle = ({whiteText, yellowText}) => {
	return (
		<Typography variant="h1" className="page-title">
			<span>{whiteText}</span>
			<span className="color-yellow">{yellowText}</span>
		</Typography>
	)
}