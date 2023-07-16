import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const ItemList = ({ id, title, information, media, actions = false, handleItemClick = false }) => {
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
					<Button size="small">Share</Button>
				</CardActions>
			}
		</Card>
	)
}