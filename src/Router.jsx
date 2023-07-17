import { Route, Routes } from "react-router-dom"
import { RouterLayout } from "./common/RouterLayout"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Artist } from "./pages/Artist"

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<RouterLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/artist/:artistId" element={<Artist />} />
				<Route path="/login" element={<Login />} />
			</Route>
		</Routes>
	)
}