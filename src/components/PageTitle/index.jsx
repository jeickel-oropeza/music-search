import { Typography } from "@mui/material"

export const PageTitle = ({ whiteText, yellowText, align }) => {
	return (
		<Typography
			variant="h1"
			className="page-title"
			align={align}
			sx={{
				fontSize: {
					xs: "3rem",
					md: "4rem"
				}
			}}
		>
			<span>{whiteText}</span>
			<span className="color-yellow">{yellowText}</span>
		</Typography>
	)
}