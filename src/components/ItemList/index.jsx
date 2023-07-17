import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const ItemList = ({ title, information, media, actions = false, handleItemClick = false, button, column = 4 }) => {
	return (
		<Grid
			item
			columns={{ xs: 12, md: 6, lg: column }}
			alignItems="center"
			justifyContent="center"
		>
			<Card
				onClick={(handleItemClick) ? handleItemClick : undefined}
				className={(handleItemClick) ? 'hoverable-item' : null}
				sx={{
					maxWidth: 345,
					padding: 2,
					borderRadius: "1.5rem"
				}}
			>
				<CardMedia
					sx={{ height: 240, width: 270, borderRadius: "1.5rem" }}
					image={media}
					title={title}
				/>
				<CardContent sx={{ padding: 0 }}>
					<Typography gutterBottom variant="h5" mt={2} component="div" sx={{ fontWeight: 600 }}>
						{title}
					</Typography>
					<Typography variant="body2" sx={{ fontWeight: 600 }}>
						{information}
					</Typography>
				</CardContent>
				{actions &&
					<CardActions>
						{button()}
					</CardActions>
				}
			</Card>
		</Grid>
	)
}