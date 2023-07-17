import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const ItemList = ({ title, information, media, actions = false, handleItemClick = false, button }) => {
	return (
		<Card sx={{ maxWidth: 345 }} onClick={(handleItemClick) ? handleItemClick : undefined}>
			<CardMedia
				sx={{ height: 240, width: 270 }}
				image={media}
				title={title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{information}
				</Typography>
			</CardContent>
			{actions &&
				<CardActions>
					{button()}
				</CardActions>
			}
		</Card>
	)
}