import { Button, InputBase, Paper } from "@mui/material"

export const SearchForm = ({ handleSubmit, handleChange, buttonDisabled }) => {
	return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				p: '5px 5px',
				display: 'flex',
				alignItems: 'center',
				background: "#FFFFFF",
				borderRadius: "1.5rem",
				width: {
					sx: 300,
					md: 500,
					lg: 600
				}
			}}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="¿Qué quieres escuchar?"
				inputProps={{ 'aria-label': '¿Qué quieres escuchar?' }}
				onChange={handleChange}
			/>
			<Button
				type="submit"
				variant="contained"
				aria-label="search"
				sx={{
					p: '10px',
					height: 40,
					width: {
						sx: 120,
						md: 150
					}
				}}
			>
				Buscar
			</Button>
		</Paper>
	)
}