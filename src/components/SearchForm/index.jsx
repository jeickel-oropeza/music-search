import { Button, InputBase, Paper } from "@mui/material"

export const SearchForm = ({ handleSubmit, handleChange, buttonDisabled }) => {
	return (
		<Paper
			component="form"
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, }}
			onSubmit={handleSubmit}
		>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="¿Qué quieres escuchar?"
				inputProps={{ 'aria-label': '¿Qué quieres escuchar?' }}
				onChange={handleChange}
			/>
			<Button type="submit" variant="contained" sx={{ p: '10px' }} aria-label="search" disabled={buttonDisabled}>
				Buscar
			</Button>
		</Paper>
	)
}