import { Typography } from "@mui/material"

export const PageTitle = ({whiteText, yellowText, align}) => {
	return (
		<Typography variant="h1" className="page-title" align={align}>
			<span>{whiteText}</span>
			<span className="color-yellow">{yellowText}</span>
		</Typography>
	)
}